"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { cn } from "@/lib/utils"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "sonner"
import { env } from "process"

const STORAGE_KEY = "volunteer_form_submitted"

export default function VolunteerForm() {

    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

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

    // 👇 verifica localStorage ao carregar
    useEffect(() => {
        const wasSubmitted = localStorage.getItem(STORAGE_KEY)
        if (wasSubmitted === "true") setSubmitted(true)
    }, [])

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
        if (field === "telefone") formattedValue = formatTelefone(value)

        setFormData((prev) => ({ ...prev, [field]: formattedValue }))

        if (touched[field]) {
            let error = ""
            switch (field) {
                case "nome": error = validateNome(formattedValue); break
                case "email": error = validateEmail(formattedValue); break
                case "telefone": error = validateTelefone(formattedValue); break
                case "mensagem": error = validateMensagem(formattedValue); break
            }
            setErrors((prev) => ({ ...prev, [field]: error }))
        }
    }

    const handleBlur = (field: keyof typeof formData) => {
        setTouched((prev) => ({ ...prev, [field]: true }))

        let error = ""
        switch (field) {
            case "nome": error = validateNome(formData.nome); break
            case "email": error = validateEmail(formData.email); break
            case "telefone": error = validateTelefone(formData.telefone); break
            case "mensagem": error = validateMensagem(formData.mensagem); break
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

    const handleSubmit = async (e: React.FormEvent) => {
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
            setIsSubmitting(true)
            try {
                    const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                })

                if (res.ok) {
                    localStorage.setItem(STORAGE_KEY, "true") //
                    setSubmitted(true)
                    setFormData({ nome: "", email: "", telefone: "", mensagem: "" })
                    setTouched({ nome: false, email: false, telefone: false, mensagem: false })
                } else {
                    toast.error("Erro ao enviar.", { description: "Por favor, tente novamente." })
                }
            } catch {
                toast.error("Erro de conexão.", { description: "Verifique sua internet e tente novamente." })
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    const handleReset = () => {
        localStorage.removeItem(STORAGE_KEY)
        setSubmitted(false)
        setErrors({ nome: "", email: "", telefone: "", mensagem: "" })
        setTouched({ nome: false, email: false, telefone: false, mensagem: false })
    }

    const isDisabled = submitted || isSubmitting // 

    return (
        <section className="py-20 px-4 bg-[#F4F4F5]">
            <div className="max-w-2xl mx-auto">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#27272A] mb-4">
                        Seja um Voluntário
                    </h2>
                    <p className="text-[#71717A] text-center mb-12">
                        Junte-se a nós na missão de proteger a natureza
                    </p>

                    <Card className={cn(
                        "transition-all duration-500",
                        submitted ? "bg-[#E8FAF0] border-[#D1F4E0] border-2" : "bg-white"
                    )}>
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
                                        disabled={isDisabled} 
                                        className={cn(errors.nome && touched.nome && "border-[#F31260] focus:border-[#F31260]")}
                                    />
                                    {errors.nome && touched.nome && <p className="text-[#F31260] text-sm mt-1">{errors.nome}</p>}
                                </div>

                                <div>
                                    <label className="block text-[#27272A] mb-2">E-mail</label>
                                    <Input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleChange("email", e.target.value)}
                                        onBlur={() => handleBlur("email")}
                                        placeholder="seu@email.com"
                                        disabled={isDisabled} 
                                        className={cn(errors.email && touched.email && "border-[#F31260] focus:border-[#F31260]")}
                                    />
                                    {errors.email && touched.email && <p className="text-[#F31260] text-sm mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-[#27272A] mb-2 font-medium">Telefone</label>
                                    <Input
                                        type="tel"
                                        value={formData.telefone}
                                        onChange={(e) => handleChange("telefone", e.target.value)}
                                        onBlur={() => handleBlur("telefone")}
                                        placeholder="(00) 00000-0000"
                                        disabled={isDisabled} 
                                        className={cn(errors.telefone && touched.telefone && "border-[#F31260] focus:border-[#F31260]")}
                                    />
                                    {errors.telefone && touched.telefone && <p className="text-[#F31260] text-sm mt-1">{errors.telefone}</p>}
                                </div>

                                <div>
                                    <label className="block text-[#27272A] mb-2 font-medium">Como gostaria de ajudar?</label>
                                    <Textarea
                                        value={formData.mensagem}
                                        onChange={(e) => handleChange("mensagem", e.target.value)}
                                        onBlur={() => handleBlur("mensagem")}
                                        placeholder="Descreva como você gostaria de contribuir com a PROESP..."
                                        rows={4}
                                        disabled={isDisabled} 
                                        className={cn(errors.mensagem && touched.mensagem && "border-[#F31260] focus:border-[#F31260]")}
                                    />
                                    {errors.mensagem && touched.mensagem && <p className="text-[#F31260] text-sm mt-1">{errors.mensagem}</p>}
                                </div>

                                <Button
                                    type="submit"
                                    variant="default"
                                    disabled={!isFormValid() || isDisabled}
                                    className="w-full py-6 bg-[#12A150] text-lg font-bold rounded-full transition-all duration-300"
                                >
                                    {isSubmitting ? "Enviando..." : "Quero ser voluntário!"}
                                </Button>
                            </form>

                            {/* 👇 Alert carinhoso após envio */}
                            {submitted && (
                                <Alert className="mt-6 border-[#6EE7B7] bg-[#D1FAE5]">
                                    <AlertTitle className="text-[#065F46] font-bold text-base">
                                        Sua solicitação foi enviada!
                                    </AlertTitle>
                                    <AlertDescription className="text-[#047857] mt-1">
                                        Que alegria ter você com a gente! Recebemos sua mensagem com muito carinho e logo entraremos em contato. Obrigado por querer fazer parte dessa missão de proteger a natureza. 💚
                                        <div className="mt-4">
                                            <Button
                                                variant="ghost"
                                                onClick={handleReset}
                                            >
                                                Enviar novamente
                                            </Button>
                                        </div>
                                    </AlertDescription>
                                </Alert>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}