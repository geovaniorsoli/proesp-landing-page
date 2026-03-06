"use client"

import { useState, useEffect, useRef } from "react"
import { Copy, Check, Leaf, Users, TreePine, Heart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

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

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/70 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-[#12A150]" />
            <span className="text-xl md:text-2xl font-bold text-[#2B1770]">PROESP</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("historia")}
              className={cn(
                "font-medium transition-colors text-gray-900 hover:text-[#12A150]",
              )}
            >
              História
            </button>
            <button
              onClick={() => scrollToSection("estatuto")}
              className={cn(
                "font-medium transition-colors text-gray-900 hover:text-[#12A150]",
              )}
            >
              Estatuto
            </button>
            <button
              onClick={() => scrollToSection("diretoria")}
              className={cn(
                "font-medium transition-colors text-gray-900 hover:text-[#12A150]",
              )}
            >
              Diretoria
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className={cn(
                "font-medium transition-colors text-gray-900 hover:text-[#12A150]",
              )}
            >
              Projetos
            </button>
            <Button
              onClick={() => scrollToSection("doar")}
              className="bg-[#12A150] hover:bg-[#0E793C] text-white rounded-full px-6"
            >
              Seja voluntário/Doar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-gray-700" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-gray-700" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg p-4 mb-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("historia")}
                className="text-gray-700 font-medium py-2 hover:text-[#12A150]"
              >
                História
              </button>
              <button
                onClick={() => scrollToSection("estatuto")}
                className="text-gray-700 font-medium py-2 hover:text-[#12A150]"
              >
                Estatuto
              </button>
              <button
                onClick={() => scrollToSection("diretoria")}
                className="text-gray-700 font-medium py-2 hover:text-[#12A150]"
              >
                Diretoria
              </button>
              <button
                onClick={() => scrollToSection("projetos")}
                className="text-gray-700 font-medium py-2 hover:text-[#12A150]"
              >
                Projetos
              </button>
              <Button
                onClick={() => scrollToSection("doar")}
                className="bg-[#12A150] hover:bg-[#0E793C] text-white rounded-full"
              >
                Seja voluntário/Doar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function HeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-[60px] mx-20 my-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-[60px]" />
      </div>

      {/* Content */}
    <div
    ref={ref}
    className={cn(
    "relative z-10 text-left max-w-5xl transition-all duration-1000",
    isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  )}
  >
  <p className="text-white text-lg md:text-xl mb-4 animate-in fade-in slide-in-from-right duration-700">
    Associação Protetora da Diversidades das Espécies (PROESP)
  </p>
  <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-[#12A150] leading-tight animate-in fade-in slide-in-from-right duration-1000 delay-300">
    O Proteger com Natureza e União
  </h1>
  </div>

    </section>
  )
}

function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver()

  const cards = [
    {
      icon: Leaf,
      title: "47",
      description: "Anos",
    },
    {
      icon: Users,
      title: "1000+",
      description: "Voluntários mobilizados",
    },
    {
      icon: TreePine,
      title: "50mil+",
      description: "Mudas Plantadas",
    },
  ]

  return (
    <section id="historia" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={ref}
          className={cn(
            "text-3xl md:text-4xl font-bold text-center text-[#27272A] mb-16 transition-all duration-700",
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          Sobre a PROESP
        </h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
  {cards.map((card, index) => (
    <Card
      key={card.title}
      className={cn(
        "bg-[#D1F4E0] border-none rounded-[40px] transition-all duration-500",
        "aspect-square flex flex-col items-center justify-center", 
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <CardContent className="p-6 md:p-8 text-center flex flex-col items-center justify-center h-full w-full">
        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 shrink-0">
          <card.icon className="h-25 w-25 md:h-8 md:h-8 text-[#0E793C]" />
        </div>
        
        <h3 className="text-2xl md:text-5xl font-bold text-[#0E793C] mb-2 leading-tight">
          {card.title}
        </h3>
        
        <p className="text-[#0E793C] text-sm md:text-base line-clamp-3">
          {card.description}
        </p>
      </CardContent>
    </Card>
  ))}
</div>
      </div>
    </section>
  )
}

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
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
    },
    {
      title: "Educação Ambiental",
      description: "Programas educativos para escolas e comunidades sobre preservação ambiental",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
    },
    {
      title: "Defesa de Matas Nativas",
      description: "Monitoramento e proteção da Mata de Santa Genebra e outras áreas de preservação",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
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
        <img
          src={project.image}
          alt={project.title}
          className="rounded-[32px] w-full aspect-square object-cover hover:scale-102 transition-transform duration-500"        />
      </div>
      <div className="md:w-2/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-[#095028] mb-2">{project.title}</h1>
        <p className="text-gray-500 text-lg w-100">{project.description}</p>
      </div>
    </div>
  )
}

function DonationSection() {
  const [copied, setCopied] = useState(false)
  const { ref, isIntersecting } = useIntersectionObserver()
  const pixKey = "proesp@preservacao.org.br"

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
          <h2 className="text-3xl md:text-4xl font-bold text-[#F31260] mb-4">
            Apoie Nossa Causa
          </h2>
          <p className="text-[#F871A0] text-lg mb-5">
            Sua doação ajuda a manter nossos projetos de preservação ambiental e educação ecológica.
          </p>

          <Card className="bg-[#F4F4F5] border-[#D4D4D8]">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-xl font-bold text-[#08BFB1]">Chave PIX</span>
              </div>
              
              <div className="bg-white rounded-xl p-4 flex items-center justify-between gap-4">
                <code className="text-sm md:text-base text-[#2B1770] font-mono flex-1 truncate">
                  {pixKey}
                </code>
                <Button
                  onClick={handleCopy}
                  className={cn(
                    "transition-all duration-300",
                    copied
                      ? "bg-[#095028]"
                      : "bg-[#12A150] hover:bg-[#095028]"
                  )}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copiar
                    </>
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
    <section className="py-20 px-4 bg-gradient-to-br from-[#2B1770] to-[#1a0e45]">
      <div className="max-w-2xl mx-auto">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Seja um Voluntário
          </h2>
          <p className="text-white/80 text-center mb-12">
            Junte-se a nós na missão de proteger a natureza
          </p>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white mb-2 font-medium">Nome *</label>
                  <Input
                    type="text"
                    value={formData.nome}
                    onChange={(e) => handleChange("nome", e.target.value)}
                    onBlur={() => handleBlur("nome")}
                    placeholder="Seu nome completo"
                    className={cn(
                      "bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-[#12A150]",
                      errors.nome && touched.nome && "border-[#F31260] focus:border-[#F31260]"
                    )}
                  />
                  {errors.nome && touched.nome && (
                    <p className="text-[#F31260] text-sm mt-1">{errors.nome}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">E-mail *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder="seu@email.com"
                    className={cn(
                      "bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-[#12A150]",
                      errors.email && touched.email && "border-[#F31260] focus:border-[#F31260]"
                    )}
                  />
                  {errors.email && touched.email && (
                    <p className="text-[#F31260] text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">Telefone *</label>
                  <Input
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => handleChange("telefone", e.target.value)}
                    onBlur={() => handleBlur("telefone")}
                    placeholder="(00) 00000-0000"
                    className={cn(
                      "bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-[#12A150]",
                      errors.telefone && touched.telefone && "border-[#F31260] focus:border-[#F31260]"
                    )}
                  />
                  {errors.telefone && touched.telefone && (
                    <p className="text-[#F31260] text-sm mt-1">{errors.telefone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">Como gostaria de ajudar? *</label>
                  <Textarea
                    value={formData.mensagem}
                    onChange={(e) => handleChange("mensagem", e.target.value)}
                    onBlur={() => handleBlur("mensagem")}
                    placeholder="Descreva como você gostaria de contribuir com a PROESP..."
                    rows={4}
                    className={cn(
                      "bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-[#12A150] resize-none",
                      errors.mensagem && touched.mensagem && "border-[#F31260] focus:border-[#F31260]"
                    )}
                  />
                  {errors.mensagem && touched.mensagem && (
                    <p className="text-[#F31260] text-sm mt-1">{errors.mensagem}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid()}
                  className={cn(
                    "w-full py-6 text-lg font-bold rounded-full transition-all duration-300",
                    isFormValid()
                      ? "bg-[#12A150] hover:bg-[#0E793C] text-white hover:scale-105"
                      : "bg-gray-400 text-gray-200 cursor-not-allowed"
                  )}
                >
                  Quero ser voluntário
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#1a0e45] py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="h-8 w-8 text-[#12A150]" />
          <span className="text-2xl font-bold text-white">PROESP</span>
        </div>
        <p className="text-white/60 mb-6">
          Associação Protetora da Diversidades das Espécies
        </p>
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} PROESP. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <EstatutoSection /> */}
      {/* <DiretoriaSection /> */}
      <ProjectsSection />
      <DonationSection />
      <VolunteerForm />
      <Footer />
    </main>
  )
}
