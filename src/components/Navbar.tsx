import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";


import { FaCircleNodes } from "react-icons/fa6";

import logo from "../assets/logos/bear.png";
import clang from "../assets/icons/clang.png";
import cpp from "../assets/icons/cpp.png";
import java from "../assets/icons/java.png";
import python from "../assets/icons/python.jpg";
import javascript from "../assets/icons/javascript.png";

const programmingComponents:{title: string; href: string; description: string; icon: React.ReactElement}[] = [

    {
        title: "C",
        href: "/c",
        icon: <img src={clang} alt="C Lang" width={35} />,
        description: "How to code in the C programming language"
    },

    {
        title: "C++",
        href: "/cpp",
        icon: <img src={cpp} alt="C++" width={35} />,
        description: "How to code in the C++ prorgramming langauge"
    },

    {
        title: "Java",
        href: "/java",
        icon: <img src={java} alt="Java" width={35} />,
        description: "How to code in the Java programming langauge"
    },

    {
        title: "Python",
        href: "/python",
        icon: <img src={python} alt="Python" width={35} />,
        description: "How to code in the Python programming langauge"
    },

    {

        title: "JavaScript",
        href: "/javascript",
        icon: <img src={javascript} alt="JavaScript" width={35} />,
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

    return (

        <header className="shadow-xl px-8 py-2">

            <div className="flex flex-row justify-between items-center max-w-[1400px] mx-auto my-0 ">

                <div className="flex gap-8">
                    <Link to="/">
                        <img src={logo} alt="logo image" width={75} />
                    </Link>

                    <NavigationMenu>

                        <NavigationMenuList>


                            <NavigationMenuItem>

                                <NavigationMenuTrigger>Projects</NavigationMenuTrigger>

                                <NavigationMenuContent>

                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">

                                        { projectComponents.map( (component, key) => (

                                            <li key={key} className="flex">
                                                <NavigationMenuLink asChild>
                                                    <Link to={component.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                        
                                                        <h3 className="font-semibold">{component.title}</h3>
                                                        <p className="text-slate-500 text-sm">{component.description}</p>

                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>

                                        ))}

                                        <li className="col-span-full bg-gray-100 p-4 rounded-md">

                                            <NavigationMenuLink asChild>

                                                <Link to="/other-projects">
                                                    <h3 className="font-semibold">Other Projects</h3>
                                                    <p className="text-slate-500 text-sm">See all other projects here</p>
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

                                                <Link to="/webdev-getting-started" className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gray-100 p-6 no-underline outline-none focus:shadow-md">

                                                    <FaCircleNodes className="text-3xl" />
                                                    <h3 className="font-semibold mt-2 text-xl">Getting Started</h3>
                                                    <p className="text-slate-500 text-sm">Start here if you are brand new to web development</p>

                                                </Link>

                                            </NavigationMenuLink>

                                        </li>

                                        { websiteDevelopmentComponents.map( (component, key) => (

                                            <li key={key} className="">
                                                <NavigationMenuLink asChild>
                                                    <Link to={component.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                        
                                                        <h3 className="font-semibold">{component.title}</h3>
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
                                                        
                                                        <h3 className="font-semibold text-3xl">{component.icon}</h3>
                                                        <p className="text-slate-500 text-sm">{component.description}</p>

                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>

                                        ))}

                                    </ul>

                                </NavigationMenuContent>

                            </NavigationMenuItem>


                            <NavigationMenuItem>

                                <Link to="/about" className="">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        About
                                    </NavigationMenuLink>
                                </Link>

                            </NavigationMenuItem>


                        </NavigationMenuList>

                    </NavigationMenu>
                </div>

            </div>

        </header>

    );

}