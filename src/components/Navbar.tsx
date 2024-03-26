import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import {Sheet,SheetClose,SheetContent,SheetFooter,SheetHeader,SheetTitle,SheetTrigger,} from "@/components/ui/sheet";
import {Collapsible,CollapsibleContent,CollapsibleTrigger,} from "@/components/ui/collapsible";
import {NavigationMenu,NavigationMenuContent,NavigationMenuItem,NavigationMenuLink,NavigationMenuList,NavigationMenuTrigger,} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { projectComponents, websiteDevelopmentComponents, programmingComponents } from "@/navItems";

import { FaBars, FaChevronDown, FaChevronUp, FaCircleNodes } from "react-icons/fa6";


import logo from "../assets/logos/bear.png"

export default function Navbar() {

    const [isMobile, setIsMobile] = useState(window.innerWidth);
    const mobileWidth = 1024;

    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth);
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

                    {isMobile >= mobileWidth && <DesktopMenu />}

                </div>

                <div>
                    { isMobile < mobileWidth && <MobileMenu /> }
                    {isMobile >= mobileWidth && <DesktopLogin />}
                </div>

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

        <SheetContent className="overflow-y-auto">

            <SheetHeader>

                <SheetTitle className="w-full flex justify-center">
                    <img src={logo} alt="logo" width={80} />
                </SheetTitle>

            </SheetHeader>

            <div className="flex flex-col gap-2">

                <SheetClose asChild>
                    <Link to="/" className="text-xl w-full flex justify-between items-center border-gray-300 mt-3">Home</Link>
                </SheetClose>
                
                <Collapsible
                    open={isProjectsOpen}
                    onOpenChange={() => { setIsProjectsOpen(!isProjectsOpen); setIsWebDevOpen(false); setIsProgrammingOpen(false); }}
                    className="mt-4"
                    >

                    <CollapsibleTrigger className="text-xl w-full flex justify-between items-center border-gray-300">
                        Website Development 
                        {!isProjectsOpen ? <FaChevronDown size={12} /> : <FaChevronUp size={12} />}
                    </CollapsibleTrigger>

                    <CollapsibleContent className={cn('overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up', "")}>
                        
                        <div className="flex flex-col gap-4 mt-4 w-full">
                            {projectComponents.map( (component, key) =>(

                                <SheetClose asChild key={key}>
                                    <Link to={component.href} className="border border-gray-200 shadow-md p-4 rounded-md" onClick={closeAll}>
                                        <h3 className="font-semibold flex items-center justify-start gap-4">{component.icon}{component.title}</h3>
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

                <CollapsibleTrigger className="text-xl w-full flex justify-between items-center border-gray-300">
                    Website Development 
                    {!isWebDevOpen ? <FaChevronDown size={12} /> : <FaChevronUp size={12} />}
                </CollapsibleTrigger>

                <CollapsibleContent className={cn('overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up', "")}>
                    
                    <div className="flex flex-col gap-4 mt-4 w-full">
                        {websiteDevelopmentComponents.map( (component, key) =>(

                            <SheetClose asChild key={key}>
                                <Link to={component.href} className="border border-gray-200 shadow-md p-4 rounded-md" onClick={closeAll}>
                                    <h3 className="font-semibold flex items-center justify-start gap-4">{component.icon}{component.title}</h3>
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

                <CollapsibleTrigger className="text-xl w-full flex justify-between items-center border-gray-300">
                    Programming Tutorials 
                    {!isProgrammingOpen ? <FaChevronDown size={12} /> : <FaChevronUp size={12} />}
                </CollapsibleTrigger>

                <CollapsibleContent className={cn('overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up', "")}>
                    
                    <div className="flex flex-col gap-4 mt-4 w-full">
                        {programmingComponents.map( (component, key) =>(

                            <SheetClose asChild key={key}>
                                <Link to={component.href} className="border border-gray-200 shadow-md p-4 rounded-md" onClick={closeAll}>
                                    <h3 className="font-semibold flex items-center justify-start gap-4">{component.icon}{component.title}</h3>
                                </Link>
                            </SheetClose>

                        ))}
                    </div>

                </CollapsibleContent>

                </Collapsible>

                <SheetClose asChild>
                    <Link to="/all-categories" className="text-xl w-full flex justify-between items-center border-gray-300 mt-3">All Categories</Link>
                </SheetClose>
                
                <SheetClose asChild>
                    <Link to="/about" className="text-xl w-full flex justify-between items-center border-gray-300 mt-3">About</Link>
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

function DesktopLogin() {

    return(

        <div className="flex flex-row gap-4">

            <Button className="" variant="ghost">Login</Button>
            <Button className="" variant="navBtn">Signup</Button>

        </div>

    );

}

function DesktopMenu() {

    return (

        <NavigationMenu>

                        <NavigationMenuList>


                        <NavigationMenuItem>

                            <Link to="/" className={navigationMenuTriggerStyle()}>Home</Link>

                        </NavigationMenuItem>


                            <NavigationMenuItem>

                                <NavigationMenuTrigger>Projects</NavigationMenuTrigger>

                                <NavigationMenuContent>

                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">

                                        { projectComponents.map( (component, key) => (

                                            <li key={key} className="flex">
                                                <NavigationMenuLink asChild>
                                                    <Link to={component.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                        
                                                        <h3 className="font-semibold flex items-center gap-2">{component.icon}{component.title}</h3>
                                                        <p className="text-slate-500 text-sm">{component.description}</p>

                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>

                                        ))}

                                        <li className="col-span-full bg-[#9c5f3d] text-white p-4 rounded-md">

                                            <NavigationMenuLink asChild>

                                                <Link to="/all-categories">
                                                    <h3 className="font-semibold">Other Projects</h3>
                                                    <p className="text-slate-100 text-sm">See all other projects here</p>
                                                </Link>

                                            </NavigationMenuLink>

                                        </li>

                                    </ul>

                                </NavigationMenuContent>

                            </NavigationMenuItem>


                             <NavigationMenuItem>

                                <NavigationMenuTrigger>Website Development</NavigationMenuTrigger>

                                <NavigationMenuContent>

                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            
                                        <li className="row-span-4">

                                            <NavigationMenuLink asChild>

                                                <Link to="/webdev-getting-started" className="flex h-full w-full select-none flex-col justify-center rounded-md bg-[#9c5f3d] text-white p-6 no-underline outline-none focus:shadow-md">

                                                    <FaCircleNodes className="text-3xl" />
                                                    <h3 className="font-semibold mt-2 text-xl">Getting Started</h3>
                                                    <p className="text-slate-100 text-sm">Start here if you are brand new to web development</p>

                                                </Link>

                                            </NavigationMenuLink>

                                        </li>

                                        { websiteDevelopmentComponents.map( (component, key) => (

                                            <li key={key} className="">
                                                <NavigationMenuLink asChild>
                                                    <Link to={component.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                        
                                                        <h3 className="font-semibold flex items-center gap-2">{component.icon}{component.title}</h3>
                                                        <p className="text-slate-500 text-sm">{component.description}</p>

                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>

                                        ))}

                                    </ul>

                                </NavigationMenuContent>

                            </NavigationMenuItem>


                            <NavigationMenuItem>

                                <NavigationMenuTrigger>Programming Langauges</NavigationMenuTrigger>

                                <NavigationMenuContent>

                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">

                                        { programmingComponents.map( (component, key) => (

                                            <li key={key} className="flex">
                                                <NavigationMenuLink asChild>
                                                    <Link to={component.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                        
                                                        <h3 className="font-semibold flex items-center gap-2">{component.icon}{component.title}</h3>
                                                        <p className="text-slate-500 text-sm">{component.description}</p>

                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>

                                        ))}

                                    </ul>

                                </NavigationMenuContent>

                            </NavigationMenuItem>
                            
                            <NavigationMenuItem>

                                <Link to="/all-categories" className={navigationMenuTriggerStyle()}>All Categories</Link>

                            </NavigationMenuItem>

                            <NavigationMenuItem>

                                <Link to="/about" className={navigationMenuTriggerStyle()}>
                                    About
                                </Link>

                            </NavigationMenuItem>


                        </NavigationMenuList>

                    </NavigationMenu>

    );

}