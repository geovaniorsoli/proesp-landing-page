"use client"

import React from 'react'
import { FileText, Download, Users, ShieldCheck, Landmark, Leaf, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/Nav" 
import Footer from "@/components/FooterPage"

export default function estatuto() {
  const diretoria = [
    { cargo: "PRESIDENTE", nome: "Roseli Buzanelli Torres" },
    { cargo: "VICE PRESIDENTE", nome: "Vitor Hugo Penedo" },
    { cargo: "SECRETÁRIA", nome: "Ernestina Gomes de Oliveira" },
    { cargo: "2º. SECRETÁRIO", nome: "Tiago Fernandes de Lira" },
    { cargo: "TESOUREIRO", nome: "José Antônio de Oliveira" },
    { cargo: "2º. TESOUREIRO", nome: "Giovana Guarizzo" },
  ]

  return (
    <main className="min-h-screen bg-[#E8FAF0]">
      <Navbar />

      <section className="pt-32 pb-16 bg-[#095028] text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Transparência e Governança
          </h1>
          <p className="text-xl text-white/80 font-medium">
            PROESP (Estatuto 2026)
          </p>
        </div>
      </section>

      {/* Seção do Estatuto */}
      <section className="py-16 px-4 -mt-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* História */}
            <Card className="border-none   transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#12A150]/10 rounded-lg">
                    <Landmark className="w-6 h-6 text-[#12A150]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#27272A] mb-2">História e Legitimidade</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Fundada em <strong>13 de abril de 1977</strong>, a PROESP é uma instituição histórica de Campinas com personalidade jurídica e prazo de duração indeterminado, consolidando quase 50 anos de atuação ininterrupta.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Justiça Climática */}
            <Card className="border-none   transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#12A150]/10 rounded-lg">
                    <Leaf className="w-6 h-6 text-[#12A150]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#27272A] mb-2">Compromisso Climático</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nosso objetivo central evoluiu para incluir a <strong>Justiça Climática</strong> e a defesa de populações vulneráveis, unindo a preservação da fauna e flora nativas com as urgências ambientais do século XXI.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gestão Voluntária */}
            <Card className="border-none   transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#12A150]/10 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-[#12A150]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#27272A] mb-2">Gestão 100% Voluntária</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Conforme o Art. 5º, a PROESP <strong>não remunera</strong> nenhum membro de sua Diretoria. Todo o trabalho é realizado por voluntários, garantindo foco total na causa ambiental.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recursos */}
            <Card className="border-none   transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#12A150]/10 rounded-lg">
                    <FileText className="w-6 h-6 text-[#12A150]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#27272A] mb-2">Aplicação de Recursos</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Entidade sem fins econômicos. <strong>100% dos recursos</strong> arrecadados são aplicados obrigatoriamente na manutenção e expansão dos nossos projetos de conservação.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Botão de Download */}
          <div className="mt-12 text-center">
            <a href="/Estatuto.pdf" download>
              <Button size="lg" className="text-white px-8 py-7 rounded-2xl text-lg transition-all gap-3">
                <Download className="w-6 h-6" />
                Baixar Estatuto Completo
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-gray-100 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-[#18181B]">Diretoria Executiva</h2>
            <p className="text-gray-500 mt-4 text-center">Biênio 2024 — 2026</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {diretoria.map((membro, index) => (
              <div 
                key={index} 
                className="flex flex-col p-6 bg-[#F8FAFC] rounded-xl border border-gray-100 hover:border-[#17C964]/30 transition-colors"
              >
                <span className="text-xs font-bold text-[#12A150] uppercase tracking-widest mb-1">
                  {membro.cargo}
                </span>
                <span className="text-lg font-bold text-[#27272A]">
                  {membro.nome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}