"use client"
import React from 'react'
import { FileDown, ShieldCheck, Landmark, BadgeDollarSign } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from '@/components/Nav'
import Footer from '@/components/FooterPage'
import { useRef, useEffect, useState } from 'react'

// Hook de animação que você já tem no projeto
function useIntersectionObserver(options?: IntersectionObserverInit) {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersecting(true)
            }
        }, { threshold: 0.1, ...options })

        if (ref.current) {
            observer.observe(ref.current)
        }
        return () => observer.disconnect()
    }, [options])

    return { ref, isIntersecting }
}

export default function TransparenciaPage() {
    const { ref, isIntersecting } = useIntersectionObserver()

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Header Simples */}
            <section className="pt-32 pb-16 bg-[#095028] text-white px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Portal da Transparência
                    </h1>
                    <p className="text-green-100 text-lg">
                        Prestação de contas e informações sobre recursos e parcerias.
                    </p>
                </div>
            </section>

            {/* Conteúdo da Transparência */}
            <section className="py-20 px-4">
                <div
                    ref={ref}
                    className={cn(
                        "max-w-5xl mx-auto transition-all duration-1000 ease-out",
                        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {/* Card Valor */}
                        <Card className="bg-blue-50 border-none rounded-3xl">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <BadgeDollarSign className="w-10 h-10 text-blue-600 mb-4" />
                                <span className="text-sm text-blue-600 font-semibold uppercase">Valor Global</span>
                                <h3 className="text-2xl font-bold text-slate-900">R$ 200.000,00</h3>
                            </CardContent>
                        </Card>

                        {/* Card Origem */}
                        <Card className="bg-purple-50 border-none rounded-3xl">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <Landmark className="w-10 h-10 text-purple-600 mb-4" />
                                <span className="text-sm text-purple-600 font-semibold uppercase">Origem</span>
                                <h3 className="text-lg font-bold text-slate-900">Emenda Parlamentar - Erika Hilton</h3>
                            </CardContent>
                        </Card>

                        {/* Card Status */}
                        <Card className="bg-amber-50 border-none rounded-3xl">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <ShieldCheck className="w-10 h-10 text-amber-600 mb-4" />
                                <span className="text-sm text-amber-600 font-semibold uppercase">Situação</span>
                                <h3 className="text-lg font-bold text-slate-900">Em fase de formalização</h3>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Detalhes do Projeto Baseado no Documento */}
                    <div className="bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-200">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">Detalhes da Parceria</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Informações referentes ao Programa Transferegov nº 8100020260012, vinculado ao Ministério dos Direitos Humanos e Cidadania. [cite: 3, 4]
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 py-6 border-y border-slate-200">
                                <div>
                                    <h4 className="font-bold text-slate-900">Instituição Beneficiária</h4>
                                    <p className="text-slate-600">PROESP - Sociedade Protetora da Diversidade das Espécies [cite: 2]</p>
                                    <p className="text-slate-600">CNPJ: 50.086.578/0001-80 [cite: 2]</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Proposta</h4>
                                    <p className="text-slate-600">Nº 005325/2026 [cite: 5]</p>
                                    <p className="text-slate-600">Objeto: Promoção de educação não formal e socioambiental em comunidades periféricas. [cite: 7]</p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <p className="text-sm text-slate-500 mb-6 italic">
                                    "Objetivando educação socioambiental crítica e emancipadora para discutir meio ambiente equilibrado como um direito humano e justiça climática." [cite: 7]
                                </p>

                                <div className="flex justify-center w-full mt-6">
                                    <a href="/Proesp.pdf" download>
                                        <Button className="">
                                            <FileDown className="w-5 h-5" />
                                            Baixar Plano de Trabalho
                                        </Button>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}