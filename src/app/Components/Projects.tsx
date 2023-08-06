import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineRight } from 'react-icons/ai';
import { useEffect, useRef, useState } from "react";
import ThreeJs from './ThreeJs';
import Pulzion from './projects/Pulzion';
// import { useRouter } from 'next/router';

export default function Project() {

    const projectRef = useRef<HTMLDivElement>(null)
    
    return (
        <div id="carousel" className="flex flex-col items-center justify-center h-screen gap-16" ref={projectRef}>
            <div id="projects" className="w-full overflow-hidden">
                <div className="w-[300vw] flex">
                    <div className="flex flex-col p-4 items-center w-[100vw] text-5xl" id="container">
                        <div className="basis-[80%] flex-col gap-6 flex justify-center items-center">
                            <span>Projects</span>
                            <span className="text-lg font-semibold w-[50vw]">I have been developing web apps for the last year and have contributed to projects built with ReactJs, NextJs, JavaScript, TypeScript, Tailwind, and NodeJs.</span>
                            <a href="" className="text-lg font-semibold text-[#09099f]">See Projects <AiOutlineRight className="inline" /></a>
                        </div>
                    </div>   
                </div>
            </div>
            <div className="flex self-center justify-self-center flex-row gap-8 text-[#09099f] text-xl">
                <button className="hover:bg-gradient-to-b from-[#09099f] to-[#09099f] hover:blur-2xl after:left-0 after:absolute">
                    <AiOutlineArrowLeft />
                </button>
                <button>
                    <AiOutlineArrowRight />
                </button>
            </div>
        </div>
    );
}

