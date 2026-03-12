"use client"

import React from 'react'
import Navbar from "@/components/Nav"
import Footer from "@/components/FooterPage"
import { useRef, useEffect, useState } from 'react'

const historiaCards = [
    {
        title: "Fundada no Coração de Campinas",
        description: "A PROESP – Associação Protetora da Diversidade das Espécies – é a organização não governamental ambientalista mais antiga da região de Campinas em atividade e uma das precursoras do movimento ambiental no Brasil. Fundada em 13 de abril de 1977, a associação nasceu da visão de cientistas do Instituto Agronômico de Campinas (IAC) e de cidadãos visionários.",
        image: "/diretoria.png",
        color: "bg-[#D7F8FE]",
    },
    {
        title: "Conquistas e Preservação",
        description: "Ao longo das décadas, a atuação da PROESP expandiu-se e foi decisiva para a proteção de ecossistemas vitais como a Mata de Santa Genebra. Colaborou ativamente para a doação desta área ao município, ocupando hoje assento permanente no Conselho da Fundação José Pedro de Oliveira.",
        image: "/bosque.png",
        color: "bg-[#D1F4E0]",
    },
    {
        title: "Reconhecimento e Utilidade Pública",
        description: "Pela seriedade de seu trabalho, a PROESP é reconhecida como entidade de Utilidade Pública Municipal (1980) e Estadual (1984). Em 1994, recebeu o Prêmio Mundial de Respeito ao Meio Ambiente, concedido pela empresa DuPont, em reconhecimento aos serviços prestados à sustentabilidade.",
        image: "/dupont.png",
        color: "bg-[#FEE7EF]",
    },
    {
        title: "Pioneirismo e Ação Local",
        description: "No início de sua trajetória, a PROESP concentrou esforços na criação de um viveiro de mudas de árvores nativas, fundamental para o plantio em áreas públicas e o enriquecimento das florestas originais da região. O viveiro ocupou espaços emblemáticos da cidade, como a 'Guardinha'.",
        image: "/acao.png",
        color: "bg-[#FDEDD3]",
    },
    {
        title: "Influência em Políticas Públicas",
        description: "A PROESP sempre foi uma voz ativa na construção das leis ambientais. Participou da elaboração do capítulo de Meio Ambiente da Lei Orgânica de Campinas e mantém representatividade em conselhos fundamentais como o COMDEMA, CONSEMA e o Conselho Gestor da APA de Campinas.",
        image: "/prefeitura.png",
        color: "bg-[#E4E4E7]",
    },
]

export default function Historia() {

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

    const { ref, isIntersecting } = useIntersectionObserver()

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Título da Página */}
            <section className="pt-32 pb-16 mb-16 bg-[#095028] text-white px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Nossa História
                    </h1>
                </div>
            </section>

            {/* Seção de Cards */}
            <section className="pb-20 px-4 space-y-8">
                <div
                    ref={ref}
                    className={cn(
                        "max-w-6xl mx-auto space-y-8 duration-1000 ease-out",
                        isIntersecting
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    )}>
                    {historiaCards.map((card, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex flex-col md:flex-row items-center gap-8 md:gap-16 p-8 md:p-12 rounded-[40px]",
                                card.color,
                                index % 2 !== 0 && "md:flex-row-reverse" // Alterna a ordem (imagem esquerda/direita)
                            )}
                        >
                            {/* Texto */}
                            <div className="flex-1 space-y-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#18181B]">
                                    {card.title}
                                </h2>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    {card.description}
                                </p>
                            </div>

                            {/* Imagem */}
                            <div className="w-full md:w-[400px] shrink-0">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full aspect-square object-cover rounded-[32px]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    )
}

// Função auxiliar simples caso não queira importar o 'cn'
function cn(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}