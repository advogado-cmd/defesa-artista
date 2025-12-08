import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const data = await request.json()

    console.log("[v0] Contact form submission:", data)

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "advogado@droliveira.adv.br",
      subject: `Lead ARTÍSTICO: ${data.nome} - ${data.problema}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #082533; border-bottom: 3px solid #ccab76; padding-bottom: 10px;">
            Novo Lead de Artista
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <p style="margin: 10px 0;"><strong>Nome:</strong> ${data.nome}</p>
            <p style="margin: 10px 0;"><strong>Telefone:</strong> ${data.telefone}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 10px 0;"><strong>Problema:</strong> ${data.problema}</p>
            ${data.redeSocial ? `<p style="margin: 10px 0;"><strong>Rede Social:</strong> ${data.redeSocial}</p>` : ""}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #082533;">Mensagem:</h3>
            <p style="background: #ffffff; padding: 15px; border-left: 4px solid #ccab76; margin: 10px 0;">
              ${data.mensagem}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">
              Este email foi enviado através do formulário de contato do site Dr. Oliveira Advocacia
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    console.log("[v0] Email sent successfully")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
