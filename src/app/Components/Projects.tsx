import { useEffect, useState } from "react";
import Pulzion from "./projects/Pulzion";
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineRight } from 'react-icons/ai'
import Travendo from "./projects/Travendo";

export default function Project({ projectTop }: { projectTop: number }) {
    const [pulzion, setPulzion] = useState(false)
    const [travendo, setTravendo] = useState(false)
    
    useEffect(()=> {        
        // document.addEventListener("scroll",onScroll) 
        const id = document.querySelector("body")
        
        if(window.pageYOffset >= projectTop) {            
            console.log("id",id)
            if(id) {
                id.style.overflow = "hidden"
            }
        } else {
            if(id) {
                id.style.overflow = "auto"
            }
        }                   
    })

    function onTravendo() {
        setPulzion(false)
        if(window.pageYOffset > projectTop && pulzion === false) {
            setTravendo(true)   
        }        
    }

    function offTravendo() {
        setTravendo(false)
    }

    return (
        <div id="projects">
            <div className={`${!pulzion && !travendo ? " flex items-center flex-col h-[100vh] text-5xl" : "hidden"}`}>
                <div className="basis-[80%] flex-col gap-6 flex justify-center items-center">
                    <span>Projects</span>
                    <span className="text-lg w-[50vw]">I have been developing web apps for last one year and have contributed to projects built with ReactJs NextJs JavaScript Typescript Tailwind and NodeJs.</span>
                    <a href="" className="text-lg text-[#00b381]">See Projects <AiOutlineRight className="inline" /></a>
                </div>
                <div className="flex flex-row h-full gap-8 mb-0 text-[#00b381] basis-[10%] text-xl">
                    <button className="hover:bg-gradient-to-b from-[#00b381] to-[#00b381] hover:blur-2xl after:left-0 after:absolute"><AiOutlineArrowLeft /></button>
                    <button onClick={()=>{setPulzion(true)}}><AiOutlineArrowRight /></button>
                </div>
            </div>
            <Pulzion
                projectTop={projectTop}
                pulzion={pulzion}
                travendo={travendo}
                onTravendo={onTravendo}
            />
            <Travendo 
                projectTop={projectTop}
                travendo = {travendo}
                pulzion = {pulzion}
                offTravendo={offTravendo}
            />
        </div>

    )
}
