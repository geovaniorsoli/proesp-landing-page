"use client" // Necessário no Next.js App Router para usar hooks
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 80
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
    }

    const menuItems = [
        { name: "História", id: "história", path: "/Historia" },
        { name: "Estatuto", id: "Estatuto", path: "/Estatuto" },
        { name: "Projetos", id: "projetos", path: "/#projetos" },
    ]

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50",
            isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-white/80 backdrop-blur-md"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Logo */}
                    <Link href={"/"} className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img src="/icon.png" className="h-8 w-8 md:h-10 md:w-10" alt="Logo PROESP" />
                        <span className={cn(
                            "text-xl md:text-2xl font-bold transition-colors",
                            isScrolled ? "text-[#2B1770]" : "text-[#2B1770]"
                        )}>
                            PROESP
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <Link key={item.id} href={item.path}>
                                <button className="font-medium transition-colors hover:text-[#12A150] text-gray-900">
                                    {item.name}
                                </button>
                            </Link>
                        ))}
                        <Button
                            onClick={() => scrollToSection("doar")}
                            className="bg-[#12A150] hover:bg-[#0E793C] text-white rounded-full px-6"
                        >
                            Seja voluntário/Doar
                        </Button>
                    </div>

                    {/* Mobile Menu Button (Drawer) */}
                    <div className="md:hidden">
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button variant="ghost" size="icon" className={isScrolled ? "text-black" : "text-white"}>
                                    <Menu className="h-8 w-8" />
                                </Button>
                            </DrawerTrigger>

                            <DrawerContent className="bg-white">
                                <div className="mx-auto w-full max-w-sm">
                                    <DrawerHeader className="border-b">
                                        <DrawerTitle className="text-[#27272A] flex items-center gap-2">
                                            Navegação
                                        </DrawerTitle>
                                    </DrawerHeader>

                                    <div className="flex flex-col p-6 gap-2">
                                        {menuItems.map((item) => (

                                            <DrawerClose key={item.id} asChild>
                                                <Link
                                                    href={item.path}
                                                    className="text-left text-lg font-semibold py-4 border-b border-gray-100 text-gray-700 active:text-[#12A150]"
                                                >
                                                    {item.name}
                                                </Link>
                                            </DrawerClose>
                                        ))}

                                            <DrawerClose asChild>
                                                <Link href="/#doar" className="w-full">
                                                    <Button
                                                        className="w-full bg-[#F31260] hover:bg-[#D41155] text-white mt-6 h-14 text-lg rounded-xl shadow-md active:scale-[0.98] transition-all"
                                                    >
                                                        Seja voluntário / Doar
                                                    </Button>
                                                </Link>
                                            </DrawerClose>
                                    </div>

                                    <DrawerFooter className="pb-8">
                                        <DrawerClose asChild>
                                            <Button variant="outline" className="w-full">Voltar</Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>

                </div>
            </div>
        </nav>
    )
}