import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Roboto, Roboto_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})
const _robotoSerif = Roboto_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dr. Carlos Oliveira | Defesa da Liberdade Artística",
  description:
    "Advocacia especializada na defesa de Humoristas, Podcasters e Criadores de Conteúdo contra censura e processos.",
  keywords:
    "advogado para comediantes, processo por piada, defesa liberdade de expressão, danos morais humorista, recuperação de conta instagram, injúria e difamação internet",
  authors: [{ name: "Dr. Carlos Fernando Lopes de Oliveira" }],
  openGraph: {
    title: "Dr. Carlos Oliveira | Defesa da Liberdade Artística",
    description:
      "Advocacia especializada na defesa de Humoristas, Podcasters e Criadores de Conteúdo contra censura e processos.",
    type: "website",
    images: [
      {
        url: "/images/8.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Oliveira Advocacia",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WV3MG7ZN');`,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WV3MG7ZN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
