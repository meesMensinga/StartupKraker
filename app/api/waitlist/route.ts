import { NextRequest, NextResponse } from "next/server"
import { Client } from "@notionhq/client"
import { Resend } from "resend"

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const resend = new Resend(process.env.RESEND_API_KEY)

/* ------------------------------------------------------------------ */
/* Helper: bevestigingsmail HTML                                        */
/* ------------------------------------------------------------------ */
function confirmationHtml(bedrijfsnaam: string): string {
  const naam = bedrijfsnaam && bedrijfsnaam !== "Onbekend" ? bedrijfsnaam : ""
  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Je staat op de lijst</title>
</head>
<body style="margin:0;padding:0;background:#1a1714;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#1a1714;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;">

          <!-- Logo / wordmark -->
          <tr>
            <td style="padding-bottom:40px;">
              <span style="font-size:22px;font-weight:800;letter-spacing:-0.03em;color:#f0e8d8;">
                startupkraker<span style="color:#c8952a;">✳</span>
              </span>
            </td>
          </tr>

          <!-- Accent bar -->
          <tr>
            <td style="padding-bottom:32px;">
              <div style="width:40px;height:3px;background:#c8952a;border-radius:2px;"></div>
            </td>
          </tr>

          <!-- Headline -->
          <tr>
            <td style="padding-bottom:20px;">
              <h1 style="margin:0;font-size:32px;font-weight:700;letter-spacing:-0.025em;line-height:1.1;color:#f0e8d8;">
                Je staat op de lijst.
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding-bottom:32px;">
              <p style="margin:0;font-size:17px;line-height:1.65;color:#9a8f7e;">
                ${naam ? `Bedankt, <strong style="color:#f0e8d8;">${naam}</strong>. ` : ""}Bedankt voor je aanmelding bij Startupkraker.
                We nemen binnen <strong style="color:#f0e8d8;">24 uur</strong> contact op.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding-bottom:32px;">
              <div style="height:1px;background:#2a2620;"></div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding-bottom:40px;">
              <p style="margin:0 0 20px;font-size:15px;color:#9a8f7e;">
                Wil je alvast een kennismakingsgesprek inplannen?
              </p>
              <a href="${process.env.NEXT_PUBLIC_CAL_URL ?? "https://startupkraker.nl"}"
                 style="display:inline-block;background:#c8952a;color:#1a1714;font-size:15px;font-weight:700;
                        padding:14px 28px;border-radius:999px;text-decoration:none;">
                Plan een gesprek →
              </a>
            </td>
          </tr>

          <!-- Sign-off -->
          <tr>
            <td style="padding-bottom:8px;">
              <p style="margin:0;font-size:15px;color:#9a8f7e;">— Team Startupkraker</p>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://startupkraker.nl"
                 style="font-size:13px;color:#c8952a;text-decoration:none;">
                startupkraker.nl
              </a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

/* ------------------------------------------------------------------ */
/* Helper: notificatiemail plain-text                                   */
/* ------------------------------------------------------------------ */
function notificationHtml(email: string, bedrijfsnaam: string, timestamp: string): string {
  return `<p style="font-family:monospace;font-size:15px;line-height:1.8;">
    <strong>Nieuwe aanmelding via de wachtlijst</strong><br/>
    <br/>
    E-mail: ${email}<br/>
    Bedrijfsnaam: ${bedrijfsnaam}<br/>
    Tijdstip: ${timestamp}<br/>
  </p>`
}

/* ------------------------------------------------------------------ */
/* POST /api/waitlist                                                   */
/* ------------------------------------------------------------------ */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email: string = (body.email ?? "").trim().toLowerCase()
    const bedrijfsnaam: string = (body.bedrijfsnaam ?? "").trim() || "Onbekend"

    // Basic validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Ongeldig e-mailadres." }, { status: 400 })
    }

    const timestamp = new Date().toLocaleString("nl-NL", {
      timeZone: "Europe/Amsterdam",
      dateStyle: "long",
      timeStyle: "short",
    })
    const isoDate = new Date().toISOString().split("T")[0] // YYYY-MM-DD

    /* ---- A) Notion ---- */
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID! },
      properties: {
        // "Naam" is usually the title property in Notion
        Naam: {
          title: [{ text: { content: bedrijfsnaam } }],
        },
        Email: {
          email: email,
        },
        "Aangemeld op": {
          date: { start: isoDate },
        },
        Status: {
          select: { name: "Nieuw" },
        },
      },
    })

    /* ---- B) Bevestigingsmail naar aanmelder ---- */
    await resend.emails.send({
      from: "Startupkraker <onboarding@resend.dev>",
      to: [email],
      subject: "Je staat op de lijst 🎉",
      html: confirmationHtml(bedrijfsnaam),
    })

    /* ---- C) Notificatiemail naar info@ ---- */
    await resend.emails.send({
      from: "Startupkraker <onboarding@resend.dev>",
      to: ["info@startupkraker.nl"],
      subject: `Nieuwe aanmelding: ${email}`,
      html: notificationHtml(email, bedrijfsnaam, timestamp),
    })

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    console.error("[waitlist] Error:", err)
    const message = err instanceof Error ? err.message : "Onbekende fout"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
