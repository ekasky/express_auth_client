
// Icons
import { FaDesktop, FaGamepad, FaHtml5, FaJava, FaLinux, FaMicrosoft, FaPython, FaReact, FaRobot } from "react-icons/fa6";
import { GiMicrochip } from "react-icons/gi";
import { LuBrackets } from "react-icons/lu";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { SiMongodb, SiNextdotjs } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

// Pages
import Clang from "./pages/programming/Clang";
import Cpp from "./pages/programming/Cpp";
import Java from "./pages/programming/Java";
import Python from "./pages/programming/Python";
import JavaScript from "./pages/programming/JavaScript";
import HtmlCssJs from "./pages/webdev/HtmlCssJs";
import MERN from "./pages/webdev/MERN";
import NextJS from "./pages/webdev/NextJS";
import DotNET from "./pages/webdev/DotNET";

type menuComponentType = {

    title: string;
    href: string;
    page?: React.ReactNode;
    icon: React.ReactNode;
    description: string;
    

};


export const programmingComponents:menuComponentType[] = [

    {
        title: "C",
        href: "/c",
        icon: <LuBrackets size={24} />,
        page: <Clang />,
        description: "How to code in the C programming language"
    },

    {
        title: "C++",
        href: "/cpp",
        icon: <PiBracketsCurlyBold size={24} />,
        page: <Cpp />,
        description: "How to code in the C++ prorgramming langauge"
    },

    {
        title: "Java",
        href: "/java",
        page: <Java />,
        icon: <FaJava size={24} />,
        description: "How to code in the Java programming langauge"
    },

    {
        title: "Python",
        href: "/python",
        icon: <FaPython size={24} />,
        page: <Python />,
        description: "How to code in the Python programming langauge"
    },

    {

        title: "JavaScript",
        href: "/javascript",
        icon: <TbBrandJavascript size={24} />,
        page: <JavaScript />,
        description: "How to code in the JavaScript programming langauge"

    }

];

export const websiteDevelopmentComponents:menuComponentType[] = [

    {
        title: "HTML/CSS/JS",
        href: "/html-css-js",
        icon: <FaHtml5 size={24} />,
        page: <HtmlCssJs />,
        description: "How to make websites with HTML/CSS/JS "
    },

    {
        title: "MERN",
        href: "/mern",
        icon: <SiMongodb size={24} />,
        page: <MERN />,
        description: "How to make full stack web apps using the mern stack"
    },

    {
        title: "NextJS",
        href: "/nextjs",
        icon: <SiNextdotjs size={24} />,
        page: <NextJS />,
        description: "How to make a full stack web app using NextJS"
    },

    {
        title: ".NET",
        href: "/dotnet",
        icon: <FaMicrosoft size={24} />,
        page: <DotNET />,
        description: "How to make a fullstack web app using MS .NET"
    },


];

export const projectComponents:menuComponentType[] = [

    {
        title: "Embedded Systems Projects",
        href: "/embedded-systems-projects",
        icon: <GiMicrochip size={30} />,
        description: "See a list of all my embedded systems projects"
    },

    {
        title: "Machine Learning",
        href: "/machine-learning-projects",
        icon: <FaRobot size={24} />,
        description: "See a list of all my machine learning projects"
    },

    {
        title: "Game Development",
        href: "/game-dev-projects",
        icon: <FaGamepad size={24} />,
        description: "See projects related to game development"
    },

    {
        title: "Web Apps",
        href: "/web-app-projects",
        icon: <FaReact size={24} />,
        description: "See projects deployed to the web"
    },

    {
        title: "Desktop Apps",
        href: "/desktop-app-projects",
        icon: <FaDesktop size={24} />,
        description: "See projects developed to run on desktops"
    },

    {
        title: "Systems Programming",
        href: "/systems-programming",
        icon: <FaLinux size={24} />,
        description: "See projects about Operating Systems and writing compilers"
    },

];