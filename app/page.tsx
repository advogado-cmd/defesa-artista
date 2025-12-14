"use client"

import { Shield, Scale, Gavel, Smartphone, FileSearch, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      {/* Header with desktop navigation menu */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a href="#inicio">
                <img src="/images/ativo-2016.png" alt="Dr. Oliveira Advocacia" className="h-12" />
              </a>
            </div>

            <ul className="hidden md:flex items-center gap-8">
              <li>
                <a
                  href="#inicio"
                  className="text-[#082533] hover:text-[#ccab76] font-semibold transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#inicio")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#atuacao"
                  className="text-[#082533] hover:text-[#ccab76] font-semibold transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#atuacao")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Atuação
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-[#082533] hover:text-[#ccab76] font-semibold transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-[#082533] hover:text-[#ccab76] font-semibold transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#faq")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Perguntas
                </a>
              </li>
              <li>
                <Button
                  size="sm"
                  className="bg-[#ccab76] hover:bg-[#b89a65] text-[#082533] font-bold cursor-pointer"
                  onClick={() => {
                    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Contato
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-[#082533] text-white overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, #ccab76 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <img src="/images/8.jpg" alt="Dr. Oliveira Logo" className="w-24 h-24 mx-auto" />
            </div>

            <p className="text-white font-semibold text-lg mb-4 tracking-wide">DEFESA DE HUMORISTAS E CRIADORES</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-balance text-white">
              Transformaram seu show em um processo judicial? Piada não é crime. Defendemos sua Liberdade de Expressão.
            </h1>

            <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
              A linha entre o humor e a ofensa é tênue, mas existe. Se você está sendo processado, cancelado ou teve
              suas redes bloqueadas por causa do seu conteúdo, você precisa de uma defesa que entenda de{" "}
              <span className="text-[#ccab76] font-semibold">Animus Jocandi</span> (intenção de brincar) e Constituição
              Federal.
            </p>

            <Button
              size="lg"
              className="bg-[#ccab76] hover:bg-[#b89a65] text-[#082533] font-bold text-lg px-8 py-6"
              asChild
            >
              <a href="#contato">
                <Shield className="mr-2 h-5 w-5" />
                Blindar Minha Carreira Agora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-[#ccab76]">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-serif font-bold mb-3 text-[#082533]">O Palco</h3>
                  <p className="text-gray-700 leading-relaxed">
                    O trabalho do comediante é testar limites. Você cria, roteiriza e sobe no palco (ou posta o vídeo)
                    com a intenção de fazer rir. A arte exige liberdade.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#ccab76]">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-serif font-bold mb-3 text-[#082533]">A Censura</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Mas vivemos a era da vigilância. Um recorte fora de contexto viraliza, grupos se sentem ofendidos e
                    o que era piada vira Inquérito Policial, processo de Danos Morais ou bloqueio de contas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#ccab76]">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-serif font-bold mb-3 text-[#082533]">A Defesa da Arte</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Não aceitamos a criminalização do humor. Nossa defesa é pautada na ADI 4451 do STF e na garantia
                    constitucional da livre manifestação do pensamento.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Defense Mechanism */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#082533] mb-4">O Mecanismo da Defesa</h2>
            <p className="text-lg text-gray-700">
              Uma defesa técnica baseada em precedentes do STF e análise de contexto artístico
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#ccab76] rounded-full flex items-center justify-center mb-4">
                <FileSearch className="h-6 w-6 text-[#082533]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#082533]">Passo 1</h3>
              <h4 className="font-semibold text-[#ccab76] mb-2">Análise de Contexto</h4>
              <p className="text-gray-700 leading-relaxed">
                Dissecamos o conteúdo para provar tecnicamente que a intenção era humorística, e não ofensiva (Animus
                Injuriandi).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#ccab76] rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-[#082533]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#082533]">Passo 2</h3>
              <h4 className="font-semibold text-[#ccab76] mb-2">Blindagem Processual</h4>
              <p className="text-gray-700 leading-relaxed">
                Defesa ativa em processos Cíveis (indenização) e Criminais (injúria/difamação), invocando precedentes do
                STF sobre liberdade artística.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#ccab76] rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-[#082533]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#082533]">Passo 3</h3>
              <h4 className="font-semibold text-[#ccab76] mb-2">Gestão de Crise e Redes</h4>
              <p className="text-gray-700 leading-relaxed">
                Ações para desbloqueio de contas, derrubada de fakes e notificações contra caluniadores que atacam o
                artista.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="atuacao" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#082533] mb-4">Cenários de Atuação</h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-[#082533] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-[#ccab76]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#082533]">Defesa em Danos Morais</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Quando a piada gera processos indenizatórios milionários. Atuamos para provar a ausência de dano real
                  e a licitude da arte.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-[#082533] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gavel className="h-8 w-8 text-[#ccab76]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#082533]">Crimes contra a Honra</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Defesa criminal em queixas-crime de Calúnia, Injúria e Difamação decorrentes de shows, podcasts ou
                  vídeos.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-[#082533] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-[#ccab76]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#082533]">Recuperação de Contas</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ações urgentes para recuperar Instagram/YouTube bloqueados ou hackeados, garantindo o retorno da sua
                  ferramenta de trabalho.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-[#082533] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileSearch className="h-8 w-8 text-[#ccab76]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#082533]">Consultoria Preventiva</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Análise de riscos jurídicos em roteiros, especiais de comédia e campanhas publicitárias antes do
                  lançamento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About / Authority */}
      <section id="sobre" className="py-20 bg-[#082533] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/images/forumboa.png"
                  alt="Dr. Carlos Fernando Lopes de Oliveira"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  Dr. Carlos Fernando Lopes de Oliveira
                </h2>

                <div className="mb-6 space-y-2 text-[#ccab76]">
                  <p className="font-semibold">OAB/SP 524.997 | OAB/PE 24.469</p>
                </div>

                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Defender a comédia exige alta capacidade intelectual para separar o Direito da Moral. O Dr. Carlos
                  Fernando Lopes de Oliveira é Mestre em Ciências Jurídicas (UFPB) e ex-professor universitário.
                </p>

                <div className="space-y-3 mb-6 text-gray-300">
                  <p>
                    • <span className="font-semibold">Mestre</span> em Ciências Jurídicas pela Universidade Federal da
                    Paraíba (UFPB)
                  </p>
                  <p>
                    • <span className="font-semibold">Bacharel</span> em Direito pela Faculdade Integrada do Recife
                    (FIR)
                  </p>
                  <p>
                    • <span className="font-semibold">Especialista</span> em Gestão Empresarial pelo CEDEPE
                  </p>
                  <p>
                    • <span className="font-semibold">Docência:</span> Ex-professor em UFPB, FIR e AESO
                  </p>
                </div>

                <blockquote className="border-l-4 border-[#ccab76] pl-4 italic text-lg text-gray-300">
                  "O humor é o termômetro da democracia. Defender o comediante é defender a liberdade de todos."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Foundation / STF */}
      <section className="py-16 bg-[#ccab76]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold text-[#082533] mb-4">O STF e o Humor</h3>
            <p className="text-[#082533] leading-relaxed text-lg">
              Na <span className="font-bold">ADI 4451</span>, o Supremo Tribunal Federal decidiu que{" "}
              <span className="italic">
                "a liberdade de expressão não protege apenas opiniões inofensivas, mas também aquelas que possam ferir,
                ofender ou inquietar"
              </span>
              . O direito à sátira e ao humor está protegido constitucionalmente.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#082533] mb-12 text-center">
              Perguntas Frequentes
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-[#082533] mb-2">Posso ser preso por uma piada?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    É raro, mas possível se configurado discurso de ódio ou racismo. Por isso a defesa técnica é vital
                    para desclassificar a conduta e demonstrar o contexto artístico.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-[#082533] mb-2">Meu Instagram caiu. Volta rápido?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Com liminar judicial, conseguimos ordens de restabelecimento em até 24h/48h em muitos casos,
                    dependendo da complexidade e da plataforma.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-[#082533] mb-2">
                    Vale a pena processar quem me xinga nos comentários?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Depende. Analisamos se é um 'hater' real ou bot, e se vale o custo-benefício da ação. Nem todo
                    comentário justifica processo.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-[#082533] mb-2">Vocês fazem análise de roteiro?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sim, apontamos os riscos jurídicos de cada piada para você decidir se vale a pena correr ou não.
                    Consultoria preventiva é sempre mais barata que defesa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#082533] mb-4">
                Proteja Sua Carreira Agora
              </h2>
              <p className="text-lg text-gray-700">
                Preencha o formulário ou entre em contato diretamente pelo WhatsApp
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#082533] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <img src="/images/ativo-2011.png" alt="Dr. Oliveira Advocacia" className="h-16 mb-4" />
              <p className="text-gray-400 text-sm">
                Advocacia especializada em Liberdade de Expressão e Direito Digital
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-[#ccab76]">Contato</h3>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-start gap-2">
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>+55 11 93081 9577</span>
                </p>
                <p className="flex items-start gap-2">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>advogado@droliveira.adv.br</span>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>
                    Rua Loefgren, 1291
                    <br />
                    Vila Mariana, São Paulo - SP
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-[#ccab76]">Registro</h3>
              <div className="space-y-2 text-gray-400">
                <p>OAB/SP 524.997</p>
                <p>OAB/PE 24.469</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p className="mb-2">
              © {new Date().getFullYear()} Dr. Carlos Fernando Lopes de Oliveira - Todos os direitos reservados
            </p>
            <p className="text-xs">
              Este é um site de advocacia especializado em Liberdade de Expressão e Direito Digital. Atuamos na defesa
              jurídica, não em assessoria de imprensa.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </>
  )
}
