"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    problema: "",
    redeSocial: "",
    mensagem: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
        })

        // Redirect to WhatsApp
        const message = encodeURIComponent(
          `Olá, Dr. Carlos! Sou ${formData.nome} e estou com um problema jurídico relacionado a: ${formData.problema}`,
        )
        window.open(`https://api.whatsapp.com/send?phone=5511930819577&text=${message}`, "_blank")

        // Reset form
        setFormData({
          nome: "",
          telefone: "",
          email: "",
          problema: "",
          redeSocial: "",
          mensagem: "",
        })
      } else {
        throw new Error("Erro ao enviar")
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="shadow-xl">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
              Nome ou Nome Artístico *
            </label>
            <input
              type="text"
              id="nome"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ccab76] focus:border-transparent outline-none"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                WhatsApp/Telefone *
              </label>
              <input
                type="tel"
                id="telefone"
                required
                placeholder="+55 11 99999-9999"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ccab76] focus:border-transparent outline-none"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ccab76] focus:border-transparent outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="problema" className="block text-sm font-semibold text-gray-700 mb-2">
              Qual o Problema? *
            </label>
            <select
              id="problema"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ccab76] focus:border-transparent outline-none"
              value={formData.problema}
              onChange={(e) => setFormData({ ...formData, problema: e.target.value })}
            >
              <option value="">Selecione...</option>
              <option value="processo-piada">Processo por Piada/Conteúdo</option>
              <option value="conta-bloqueada">Conta Bloqueada</option>
              <option value="consultoria">Consultoria Preventiva</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div>
            <label htmlFor="redeSocial" className="block text-sm font-semibold text-gray-700 mb-2">
              Link da Rede Social (Opcional)
            </label>
            <input
              type="url"
              id="redeSocial"
              placeholder="https://instagram.com/seu_perfil"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ccab76] focus:border-transparent outline-none"
              value={formData.redeSocial}
              onChange={(e) => setFormData({ ...formData, redeSocial: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
              Breve Relato *
            </label>
            <textarea
              id="mensagem"
              required
              rows={5}
              placeholder="Descreva brevemente sua situação..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ccab76] focus:border-transparent outline-none resize-none"
              value={formData.mensagem}
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#082533] hover:bg-[#0a3041] text-white font-bold py-6"
          >
            {isSubmitting ? (
              "Enviando..."
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensagem
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Ao enviar, você concorda com nossa{" "}
            <a href="/politica-de-privacidade" className="text-[#ccab76] hover:underline">
              Política de Privacidade
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
