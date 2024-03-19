import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";


import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { FaBars, FaChevronDown } from "react-icons/fa6";

import logo from "../assets/logos/bear.png"
import { WiSnow } from "react-icons/wi";


const programmingComponents:{title: string; href: string; description: string;}[] = [

    {
        title: "C",
        href: "/c",
        description: "How to code in the C programming language"
    },

    {
        title: "C++",
        href: "/cpp",
        description: "How to code in the C++ prorgramming langauge"
    },

    {
        title: "Java",
        href: "/java",
        description: "How to code in the Java programming langauge"
    },

    {
        title: "Python",
        href: "/python",
        description: "How to code in the Python programming langauge"
    },

    {

        title: "JavaScript",
        href: "/javascript",
        description: "How to code in the JavaScript programming langauge"

    }

];

const websiteDevelopmentComponents:{title: string; href: string; description: string;}[] = [

    {
        title: "HTML/CSS/JS",
        href: "/html-css-js",
        description: "How to make websites with HTML/CSS/JS "
    },

    {
        title: "MERN",
        href: "/mern",
        description: "How to make full stack web apps using the mern stack"
    },

    {
        title: "NextJS",
        href: "/nextjs",
        description: "How to make a full stack web app using NextJS"
    },

    {
        title: ".NET",
        href: "/dotnet",
        description: "How to make a fullstack web app using MS .NET"
    },


];

const projectComponents:{title: string; href: string; description: string;}[] = [

    {
        title: "Embedded Systems Projects",
        href: "/embedded-systems-projects",
        description: "See a list of all my embedded systems projects"
    },

    {
        title: "Machine Learning",
        href: "/machine-learning-projects",
        description: "See a list of all my machine learning projects"
    },

    {
        title: "Home Automation",
        href: "/home-automaiton-projects",
        description: "See projects related to home automation"
    },

    {
        title: "Web Apps",
        href: "/web-app-projects",
        description: "See projects deployed to the web"
    },

    {
        title: "Desktop Apps",
        href: "/desktop-app-projects",
        description: "See projects developed to run on desktops"
    },

    {
        title: "OS and Compilers",
        href: "/systems-programming",
        description: "See projects about Operating Systems and writing compilers"
    },

];

export default function Navbar() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    },[]);

    return (

        <header className="shadow-xl px-8 py-2">

            <div className="flex flex-row justify-between items-center md:max-w-[1400px] md:mx-auto md:my-0">

                <div className="flex gap-8">
                    <Link to="/">
                        <img src={logo} alt="logo image" width={75} />
                    </Link>

                </div>

                {isMobile ? <MobileMenu /> : <p>Desktop Menu</p>}

            </div>

        </header>

    );

}


function MobileMenu() {

    const [sheetOpen, setSheetOpen] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [isWebDevOpen, setIsWebDevOpen] = useState(false);
    const [isProgrammingOpen, setIsProgrammingOpen] = useState(false);

    const closeAll = () => {

        setSheetOpen(!sheetOpen);
        setIsProjectsOpen(false);
        setIsWebDevOpen(false);
        setIsProgrammingOpen(false);

    }

    return (
        
        <Sheet open={sheetOpen} onOpenChange={closeAll}>

        <SheetTrigger asChild>
            <Button variant="outline"><FaBars /></Button>
        </SheetTrigger>

        <SheetContent>

            <SheetHeader>

                <SheetTitle>Navigation</SheetTitle>
                
                <SheetDescription>
                    Browse all the projects and tutorials I have created
                </SheetDescription>

            </SheetHeader>

            <div className="flex flex-col gap-2">
                <Collapsible
                open={isProjectsOpen}
                onOpenChange={() => { setIsProjectsOpen(!isProjectsOpen); setIsWebDevOpen(false); setIsProgrammingOpen(false); }}
                className="mt-4"
                >

                <CollapsibleTrigger className="text-xl w-full flex justify-between items-center border-b border-gray-300">
                    Projects 
                    <FaChevronDown size={12} />
                </CollapsibleTrigger>

                <CollapsibleContent className={cn('overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up', "")}>
                    
                    <div className="flex flex-col gap-4 mt-4">
                        {projectComponents.map( (component, key) =>(

                            <SheetClose asChild key={key}>
                                <Link to={component.href} className="bg-gray-200 p-4 rounded-md" onClick={closeAll}>
                                    <h3 className="font-semibold">{component.title}</h3>
                                    <p className="text-gray-600">{component.description}</p>
                                </Link>
                            </SheetClose>

                        ))}
                    </div>

                </CollapsibleContent>

                </Collapsible>

                <Collapsible
                open={isWebDevOpen}
                onOpenChange={() => { setIsProjectsOpen(false); setIsWebDevOpen(!isWebDevOpen); setIsProgrammingOpen(false); }}
                className="mt-4"
                >

                <CollapsibleTrigger className="text-xl w-full flex justify-between items-center border-b border-gray-300">
                    Website Development 
                    <FaChevronDown size={12} />
                </CollapsibleTrigger>

                <CollapsibleContent className={cn('overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up', "")}>
                    
                    <div className="flex flex-col gap-4 mt-4">
                        {websiteDevelopmentComponents.map( (component, key) =>(

                            <SheetClose asChild key={key}>
                                <Link to={component.href} className="bg-gray-200 p-4 rounded-md" onClick={closeAll}>
                                    <h3 className="font-semibold">{component.title}</h3>
                                    <p className="text-gray-600">{component.description}</p>
                                </Link>
                            </SheetClose>

                        ))}
                    </div>

                </CollapsibleContent>

                </Collapsible>


                <Collapsible
                open={isProgrammingOpen}
                onOpenChange={() => { setIsProjectsOpen(false); setIsWebDevOpen(false); setIsProgrammingOpen(!isProgrammingOpen); }}
                className="mt-4"
                >

                <CollapsibleTrigger className="text-xl w-full flex justify-between items-center border-b border-gray-300">
                    Learn to Program 
                    <FaChevronDown size={12} />
                </CollapsibleTrigger>

                <CollapsibleContent className={cn('overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up', "")}>
                    
                    <div className="flex flex-col gap-4 mt-4">
                        {programmingComponents.map( (component, key) =>(

                            <SheetClose asChild key={key}>
                                <Link to={component.href} className="bg-gray-200 p-4 rounded-md" onClick={closeAll}>
                                    <h3 className="font-semibold">{component.title}</h3>
                                    <p className="text-gray-600">{component.description}</p>
                                </Link>
                            </SheetClose>

                        ))}
                    </div>

                </CollapsibleContent>

                </Collapsible>
                
                <SheetClose asChild>
                    <Link to="/about" className="text-xl w-full flex justify-between items-center border-b border-gray-300 mt-3">About</Link>
                </SheetClose>
                
            </div>

            <SheetFooter className="mt-4 flex flex-row gap-3">
                
                <SheetClose asChild>
                    <Button className="flex-1 rounded-md" variant="secondary">Login</Button>
                </SheetClose>
                <SheetClose asChild>
                    <Button className="flex-1 rounded-md">Register</Button>
                </SheetClose>

            </SheetFooter>
            
        </SheetContent>

    </Sheet>

    );

}