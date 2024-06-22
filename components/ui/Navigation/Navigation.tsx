"use client"
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useMedia } from "react-use";
import { Button } from "@/components/ui/button";
import NavButton from "@/components/ui/NavButton/NavButton"


import Sheet from "@/components/ui/Sheet/Sheet";
import SheetContent from "@/components/ui/SheetContent/SheetContent";
import SheetTrigger from "@/components/ui/SheetTrigger/SheetTrigger";

const routes = [
    {
        href: "/",
        label: "Overview"
    },
    {
        href: "/transactions",
        label: "Transactions"
    },
    {
        href: "/accounts",
        label: "Accounts"
    },
    {
        href: "/categories",
        label: "Categories"
    },
    {
        href: "/settings",
        label: "Settings"
    },
];

const NavigationComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();
    const pathName = usePathname();
    const isMobile = useMedia("(max-width: 1024px)", false);

    const onClick = (href: string) => {
        router.push(href);
        setIsOpen(false);
    };

    const close= () =>{
        setIsOpen(!isOpen)
    }

    if(isMobile){
        return (
            <Sheet isOpen={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                    <Button variant="outline" size="sm" className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition">
                        <Menu className="size-4"/>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="px-2">
                    <div onClick={() => close()} className="absolute top-0 right-0 bg-white-500 text-black p-4 cursor-pointer">
                        <p className="transform rotate-45 text-3xl">+</p>
                    </div>
                    <nav className="flex flex-col gap-y-2 pt-6 mt-5">
                        {routes.map((route) => {
                            return (<Button
                                key={route.href}
                                variant={pathName === route.href ? "secondary" : "ghost"}
                                onClick={() => onClick(route.href)}
                            >
                                {route.label}
                            </Button>)
                        })}
                    </nav>
                </SheetContent>
            </Sheet>
        )
    }

    return (
        <nav  className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
            {
                routes.map((route, index) => (
                    <NavButton 
                        key={route.href}
                        href={route.href}
                        label={route.label}
                        isActive={pathName === route.href}
                    />
                ))
            }
        </nav>
    )
}

export default NavigationComponent;