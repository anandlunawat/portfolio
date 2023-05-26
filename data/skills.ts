import {SiCplusplus, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTypescript, SiCss3, SiBootstrap, SiChakraui, SiTailwindcss, SiNodedotjs, SiExpress, SiDjango, SiGithub, SiMysql, SiAdobephotoshop, SiFigma } from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { IconType } from 'react-icons';

interface mySkills {    
    component: IconType;
    name: string;
}

const icons: IconType[] = [SiCplusplus, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTypescript, SiCss3, SiBootstrap, SiChakraui, SiTailwindcss, SiNodedotjs, SiExpress, SiDjango, SiGithub, SiMysql, SiAdobephotoshop, SiFigma, DiJava];

const skills = [
    {                
        component : SiCplusplus,
        name : "C++"        
    },
    // {
    //     component : DiJava,
    //     name : "Java"
    // },
    {
        component : SiHtml5,
        name : "HTML5"
    },
    {
        component : SiCss3,
        name : "CSS3"
    },
    {
        component : SiTailwindcss,
        name : "Tailwind"
    },
    {
        component : SiBootstrap,
        name : "Bootstrap"
    },    
    // {
    //     component : SiChakraui,
    //     name : "ChakraUI"
    // },        
    {
        component : SiJavascript,
        name : "JavaScript"
    },        
    {
        component : SiTypescript,
        name : "TypeScript"
    },
    {
        component : SiNextdotjs,
        name : "NextJs"
    },   
    {
        component : SiReact,
        name : "ReactJs"
    },    
    {
        component : SiNodedotjs,
        name : "NodeJs"
    },           
    {
        component : SiExpress,
        name : "ExpressJs"
    }, 
    // {
    //     component : SiDjango,
    //     name : "Django"
    // },  
    // {
    //     component : SiMysql,
    //     name : "MySql"
    // },
    {
        component : SiGithub,
        name : "Github"
    },         
    {
        component : SiAdobephotoshop,
        name : "Adobe Photoshop"
    },         
    {
        component : SiFigma,
        name : "Figma"
    },         
]

export default skills