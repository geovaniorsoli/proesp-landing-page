"use client"
import { useRef, useEffect, useState } from 'react'
import React from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Navbar from '@/components/Nav'
import Footer from '@/components/FooterPage'

const projetos = [
    {
        titulo: "Brigada Cachorro-do-mato",
        link: "https://www.instagram.com/brigada_cachorrodomato/?hl=pt-br",
        imagem: "/fogo.webp", 
    },
    {
        titulo: "Mini Pantanal de Paulínia",
        link: "https://www.instagram.com/explore/locations/283500781/mini-pantanal-paulinia/",
        imagem: "/tucano.webp",
    },
    {
        titulo: "Regeneração Sítio São Francisco & Beco Mokarzel",
        link: "https://viladasartescampinas.wordpress.com/",
        imagem: "/souzas.jpg",
    }
]

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

// Componente de Card isolado para não repetir código e manter a animação
function ProjetoCard({ proj }: { proj: typeof projetos[0] }) {
    return (
        <Link href={proj.link} target="_blank" rel="noopener noreferrer" className="block w-full">
            <Card className="border-none overflow-hidden rounded-[32px] group cursor-pointer shadow-none">
                <CardContent className="p-0 relative rounded-[32px] aspect-[4/5]">
                    <img
                        src={proj.imagem}
                        alt={proj.titulo}
                        className="absolute inset-0 w-full rounded-[32px] h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                        <h3 className="text-xl font-bold text-white leading-tight">
                            {proj.titulo}
                        </h3>
                        <p className="text-[#17C964] text-sm mt-2 font-medium md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                            Ver detalhes no link →
                        </p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default function ProjetosSection() {
    const { ref, isIntersecting } = useIntersectionObserver()

    return (
        <>
            <Navbar />
            <section className="pt-32 pb-16 mb-16 bg-[#095028] text-white px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Projetos
                    </h1>
                </div>
            </section>

            <section id="projetos" className="py-12 md:py-24 bg-white">
                <div
                    ref={ref}
                    className={cn(
                        "max-w-7xl mx-auto px-4 transition-all duration-1000 ease-out",
                        isIntersecting
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    )}
                >
                    {/* VERSÃO MOBILE: Lista Vertical (1 embaixo do outro) */}
                    <div className="grid grid-cols-1 gap-8 md:hidden">
                        {projetos.map((proj, index) => (
                            <ProjetoCard key={`mobile-${index}`} proj={proj} />
                        ))}
                    </div>

                    {/* VERSÃO DESKTOP: Carrossel */}
                    <div className="hidden md:block">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4">
                                {projetos.map((proj, index) => (
                                    <CarouselItem key={`desktop-${index}`} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                        <ProjetoCard proj={proj} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="flex justify-end gap-4 mt-8">
                                <CarouselPrevious className="static translate-y-0" />
                                <CarouselNext className="static translate-y-0" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}