import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineRight } from 'react-icons/ai';
import { useEffect, useRef, useState } from "react";
// import { useRouter } from 'next/router';

export default function Project({ projectTop }: { projectTop: number }) {
    
    return (
        <div id="carousel" className="flex flex-col items-center justify-center h-screen">
            <div id="projects" className="w-full overflow-hidden">
                <div className="w-[300vw] flex">
                    <div className="flex flex-col p-4 items-center h-screen w-[100vw] text-5xl" id="container">
                        <div className="basis-[80%] flex-col gap-6 flex justify-center items-center">
                            <span>Projects</span>
                            <span className="text-lg w-[50vw]">I have been developing web apps for the last year and have contributed to projects built with ReactJs, NextJs, JavaScript, TypeScript, Tailwind, and NodeJs.</span>
                            <a href="" className="text-lg text-[#00b381]">See Projects <AiOutlineRight className="inline" /></a>
                        </div>
                    </div>   
                </div>
            </div>
            <div className="flex self-center relative -top-[25%] justify-self-center h-[10%] flex-row gap-8 mb-0 text-[#00b381] text-xl">
                <button className="hover:bg-gradient-to-b from-[#00b381] to-[#00b381] hover:blur-2xl after:left-0 after:absolute">
                    <AiOutlineArrowLeft />
                </button>
                <button>
                    <AiOutlineArrowRight />
                </button>
            </div>
        </div>
    );
}

