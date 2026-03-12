"use client"

import { useState, useEffect, useRef } from "react"
import { Copy, Check, Leaf, Users, TreePine, Heart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import Footer from "@/components/FooterPage"
import Nav from "@/components/Nav"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link"


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

function HeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver()

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-0">
      {/* Background Image Container */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center transition-all duration-500",
          "rounded-[30px] mx-6 my-16", // Mobile: margens pequenas e arredondamento suave
          "md:rounded-[60px] md:mx-20 md:my-20" // Desktop: volta ao seu design original
        )}
        style={{
          backgroundImage: `url('/hero.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 rounded-[30px] md:rounded-[60px]" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={cn(
          "relative z-10 w-full max-w-5xl transition-all duration-1000",
          "text-center md:text-left", // Centraliza no mobile para melhor leitura
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <p className="text-white text-base md:text-2xl mb-4 px-4 md:px-0 opacity-90">
          Associação Protetora da Diversidades das Espécies (PROESP)
        </p>
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#12A150] leading-[1.1] md:leading-tight px-2 md:px-0">
          O Proteger com <br className="hidden md:block" /> Natureza e União
        </h1>
      </div>
    </section>
  )
}

// function AboutSection() {
//   const { ref, isIntersecting } = useIntersectionObserver()

//   const cards = [
//     {
//       icon: "calendar_month",
//       title: "47",
//       description: "Anos",
//     },
//     {
//       icon: "account_circle",
//       title: "1000+",
//       description: "Voluntários mobilizados",
//     },
//     {
//       icon: "forest",
//       title: "50mil+",
//       description: "Mudas Plantadas",
//     },
//   ]

//   return (
//     <section id="historia" className="py-20 px-4 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <h2
//           ref={ref}
//           className={cn(
//             "text-3xl md:text-4xl font-bold text-center text-[#27272A] mb-16 transition-all duration-700",
//             isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           )}
//         >
//           Sobre a PROESP
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
//           {cards.map((card, index) => (
//             <Card
//               key={card.title}
//               className={cn(
//                 "bg-[#D1F4E0] border-none rounded-[40px] transition-all duration-500",
//                 "aspect-square flex flex-col items-center justify-center",
//                 isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               )}
//               style={{ transitionDelay: `${index * 200}ms` }}
//             >
//               <CardContent className="p-6 md:p-8 text-center flex flex-col items-center justify-center h-full w-full">
//                 <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 shrink-0">
//                   <span className="material-symbols-outlined text-[#0E793C] !text-5xl">
//                     {card.icon}
//                   </span>
//                 </div>

//                 <h3 className="text-2xl md:text-5xl font-bold text-[#0E793C] mb-2 leading-tight">
//                   {card.title}
//                 </h3>

//                 <p className="text-[#0E793C] text-sm md:text-base line-clamp-3">
//                   {card.description}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

function EstatutoSection() {
  const { ref, isIntersecting } = useIntersectionObserver()

  return (
    <section id="estatuto" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={cn(
            "text-center transition-all duration-700",
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B1770] mb-8">Estatuto</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Nossa associação é regida por um estatuto que define nossa missão, visão e valores.
            Trabalhamos com transparência e compromisso com a causa ambiental.
          </p>
          <Button className="bg-[#2B1770] hover:bg-[#1a0e45] text-white rounded-full px-8">
            Ver Estatuto Completo
          </Button>
        </div>
      </div>
    </section>
  )
}

function DiretoriaSection() {
  const { ref, isIntersecting } = useIntersectionObserver()

  const diretores = [
    { name: "Maria Silva", role: "Presidente", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" },
    { name: "João Santos", role: "Vice-Presidente", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
    { name: "Ana Costa", role: "Tesoureira", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" },
  ]

  return (
    <section id="diretoria" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={ref}
          className={cn(
            "text-3xl md:text-4xl font-bold text-center text-[#2B1770] mb-16 transition-all duration-700",
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          Diretoria
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {diretores.map((diretor, index) => (
            <div
              key={diretor.name}
              className={cn(
                "text-center transition-all duration-500",
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <img
                  src={diretor.image}
                  alt={diretor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#2B1770]">{diretor.name}</h3>
              <p className="text-[#12A150]">{diretor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: "Plantio de Mudas",
      description: "Recuperação de áreas degradadas com espécies nativas da Mata Atlântica",
      image: "/mudassemborda.png",
    },
    {
      title: "Educação Ambiental",
      description: "Programas educativos para escolas e comunidades sobre preservação ambiental",
      image: "/educacao.png",
    },
    {
      title: "Defesa de Matas Nativas",
      description: "Monitoramento e proteção da Mata de Santa Genebra e outras áreas de preservação",
      image: "/arvore.png",
    },
  ]

  return (
    <section id="projetos" className="py-20 px-4 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#27272A] mb-16">
          Projetos
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0

            return (
              <ProjectItem key={project.title} project={project} isEven={isEven} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProjectItem({ project, isEven }: { project: { title: string; description: string; image: string }; isEven: boolean }) {
  const { ref, isIntersecting } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-8 items-center transition-all duration-700",
        isEven ? "md:flex-row" : "md:flex-row-reverse",
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="md:w-2/3">
        <Link href="/Projetos">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-[60px] overflow-hidden isolate aspect-square object-cover hover:scale-102 transition-transform duration-500" />
        </Link>
      </div>
      <div className="md:w-2/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#095028] leading-tight">{project.title}</h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-prose mx-auto md:mx-0">{project.description}</p>
      </div>
    </div >
  )
}

function DonationSection() {
  const [copied, setCopied] = useState(false)
  const { ref, isIntersecting } = useIntersectionObserver()
  const pixKey = "proesp2019.gmail.com"

  const handleCopy = async () => {
    await navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="doar" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-left">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >

          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center justify-center w-16 h-16 bg-[#FFE4E6] rounded-full shrink-0">
              <span className="material-symbols-outlined text-[#F31260] text-3xl">
                volunteer_activism
              </span>
            </div>

            {/* Coluna 2: Textos */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F31260] mb-2 leading-tight">
                Apoie Nossa Causa
              </h2>
              <p className="text-[#F871A0] text-sm md:text-base max-w-md md:max-w-xl">
                Sua doação ajuda a manter nossos projetos de preservação ambiental.
              </p>
            </div>
          </div>

          <Card className="mt-10 md:mt-[60px] bg-[#F4F4F5] border-[#D4D4D8] mx-4 md:mx-0">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-lg md:text-xl font-bold text-[#27272A]">Chave PIX</span>
              </div>

              {/* Container flex-col para mobile, flex-row para desktop */}
              <div className="bg-white rounded-xl p-3 md:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
                <p className="text-xs sm:text-sm md:text-base font-bold text-[#27272A] flex-1 break-all text-center sm:text-left">
                  {pixKey}
                </p>

                <Button
                  onClick={handleCopy}
                  className={cn(
                    "w-full sm:w-auto transition-all duration-300 min-w-[120px]", // w-full no mobile
                    copied
                      ? "bg-[#095028]"
                      : "bg-[#12A150] hover:bg-[#095028]"
                  )}
                >
                  {copied ? (
                    <><Check className="h-4 w-4 mr-2" /> Copiado!</>
                  ) : (
                    <><Copy className="h-4 w-4 mr-2" /> Copiar</>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function VolunteerForm() {
  const { ref, isIntersecting } = useIntersectionObserver()
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  })
  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  })
  const [touched, setTouched] = useState({
    nome: false,
    email: false,
    telefone: false,
    mensagem: false,
  })

  const validateNome = (value: string) => {
    if (!value.trim()) return "Nome é obrigatório"
    if (value.trim().length < 3) return "Nome deve ter pelo menos 3 caracteres"
    return ""
  }

  const validateEmail = (value: string) => {
    if (!value.trim()) return "E-mail é obrigatório"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) return "E-mail inválido"
    return ""
  }

  const validateTelefone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (!numbers) return "Telefone é obrigatório"
    if (numbers.length < 10 || numbers.length > 11) return "Telefone inválido"
    return ""
  }

  const validateMensagem = (value: string) => {
    if (!value.trim()) return "Por favor, descreva como gostaria de ajudar"
    if (value.trim().length < 10) return "Descreva com mais detalhes (mínimo 10 caracteres)"
    return ""
  }

  const formatTelefone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const handleChange = (field: keyof typeof formData, value: string) => {
    let formattedValue = value

    if (field === "telefone") {
      formattedValue = formatTelefone(value)
    }

    setFormData((prev) => ({ ...prev, [field]: formattedValue }))

    if (touched[field]) {
      let error = ""
      switch (field) {
        case "nome":
          error = validateNome(formattedValue)
          break
        case "email":
          error = validateEmail(formattedValue)
          break
        case "telefone":
          error = validateTelefone(formattedValue)
          break
        case "mensagem":
          error = validateMensagem(formattedValue)
          break
      }
      setErrors((prev) => ({ ...prev, [field]: error }))
    }
  }

  const handleBlur = (field: keyof typeof formData) => {
    setTouched((prev) => ({ ...prev, [field]: true }))

    let error = ""
    switch (field) {
      case "nome":
        error = validateNome(formData.nome)
        break
      case "email":
        error = validateEmail(formData.email)
        break
      case "telefone":
        error = validateTelefone(formData.telefone)
        break
      case "mensagem":
        error = validateMensagem(formData.mensagem)
        break
    }
    setErrors((prev) => ({ ...prev, [field]: error }))
  }

  const isFormValid = () => {
    return (
      !validateNome(formData.nome) &&
      !validateEmail(formData.email) &&
      !validateTelefone(formData.telefone) &&
      !validateMensagem(formData.mensagem)
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = {
      nome: validateNome(formData.nome),
      email: validateEmail(formData.email),
      telefone: validateTelefone(formData.telefone),
      mensagem: validateMensagem(formData.mensagem),
    }

    setErrors(newErrors)
    setTouched({ nome: true, email: true, telefone: true, mensagem: true })

    if (isFormValid()) {
      alert("Obrigado por querer ser voluntário! Entraremos em contato em breve.")
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" })
      setTouched({ nome: false, email: false, telefone: false, mensagem: false })
    }
  }

  return (
    <section className="py-20 px-4 bg-[#F4F4F5]">
      <div className="max-w-2xl mx-auto">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#27272A] mb-4">
            Seja um Voluntário
          </h2>
          <p className="text-[#71717A] text-center mb-12">
            Junte-se a nós na missão de proteger a natureza
          </p>

          <Card className="bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#27272A] mb-2">Nome</label>
                  <Input
                    type="text"
                    value={formData.nome}
                    onChange={(e) => handleChange("nome", e.target.value)}
                    onBlur={() => handleBlur("nome")}
                    placeholder="Seu nome completo"
                    className={cn(
                      errors.nome && touched.nome && "border-[#F31260] focus:border-[#F31260]"
                    )}
                  />
                  {errors.nome && touched.nome && (
                    <p className="text-[#F31260] text-sm mt-1">{errors.nome}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[#27272A] mb-2">E-mail</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder="seu@email.com"
                    className={cn(
                      errors.email && touched.email && "border-[#F31260] focus:border-[#F31260]"
                    )}
                  />
                  {errors.email && touched.email && (
                    <p className="text-[#F31260] text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[#27272A] mb-2 font-medium">Telefone</label>
                  <Input
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => handleChange("telefone", e.target.value)}
                    onBlur={() => handleBlur("telefone")}
                    placeholder="(00) 00000-0000"
                    className={cn(
                      errors.telefone && touched.telefone && "border-[#F31260] focus:border-[#F31260]"
                    )}
                  />
                  {errors.telefone && touched.telefone && (
                    <p className="text-[#F31260] text-sm mt-1">{errors.telefone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[#27272A] mb-2 font-medium">Como gostaria de ajudar?</label>
                  <Textarea
                    value={formData.mensagem}
                    onChange={(e) => handleChange("mensagem", e.target.value)}
                    onBlur={() => handleBlur("mensagem")}
                    placeholder="Descreva como você gostaria de contribuir com a PROESP..."
                    rows={4}
                    className={cn(
                      errors.mensagem && touched.mensagem && "border-[#F31260] focus:border-[#F31260]"
                    )}
                  />
                  {errors.mensagem && touched.mensagem && (
                    <p className="text-[#F31260] text-sm mt-1">{errors.mensagem}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant={"default"}
                  disabled={!isFormValid()}
                  className={cn(
                    "w-full py-6 bg-[#12A150] text-lg font-bold rounded-full transition-all duration-300",
                  )}
                >
                  Quero ser voluntário!
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <HeroSection />
      {/* <AboutSection /> */}
      {/* <EstatutoSection /> */}
      {/* <DiretoriaSection /> */}
      <ProjectsSection />
      <DonationSection />
      <VolunteerForm />
      <Footer />
    </main>
  )
}
