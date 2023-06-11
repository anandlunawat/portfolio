import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineRight } from 'react-icons/ai';
import { useEffect, useRef, useState } from "react";
import ThreeJs from './ThreeJs';
import Pulzion from './projects/Pulzion';
// import { useRouter } from 'next/router';

export default function Project() {

    const projectRef = useRef<HTMLDivElement>(null)
    const [state,setState] = useState("project")
    const [disableScroll, setDisableScroll] = useState(false);

    useEffect(() => {
      const container = projectRef.current;    
      const handleScroll = (event: WheelEvent) => {
        event.preventDefault();
  
        window.history.pushState({},'','')    
  
        if (disableScroll) {
          return;
        }
        if(state === "travendo") {
            document.querySelector("body")!.style.overflow = "auto"        
        }
  
        let deltaY = event.deltaY;      
  
        if (deltaY > 0) {
          if (state === "project" && !disableScroll) {
            setState("pulzion")    
            window.history.pushState({},'','#pulzion')              
            setDisableScroll(true)  
            container?.removeEventListener("wheel",handleScroll)                
          } else if (state === "pulzion" && !disableScroll) {
            setState("travendo")              
            window.history.pushState({},'','#travendo')    
            setDisableScroll(true)         
            container?.removeEventListener("wheel",handleScroll)                
          } 
        } else if (deltaY < 0) {
          if (state === "travendo" && !disableScroll) {            
            setState("pulzion");
            window.history.pushState({},'','#pulzion')
            setDisableScroll(true)
          } else if (state === "pulzion" && !disableScroll) {
            setState("project");
            document.querySelector("body")!.style.overflow = "auto"
            window.history.pushState({},'','#project')
            setDisableScroll(true)
          }
        }
  
        setDisableScroll(true)
  
        setTimeout(() => {
          setDisableScroll(false);               
        }, 1000);
      };
  
      if (container) {
        container.addEventListener("wheel", handleScroll, { passive: false });
      }
  
      return () => {
        if (container) {
          container.removeEventListener("wheel", handleScroll);
        }
      };
    }, [disableScroll]);
    
    return (
        <div id="carousel" className="flex flex-col items-center justify-center h-screen" ref={projectRef}>
            <div id="projects" className="w-full overflow-hidden">
                <div className="w-[300vw] flex">
                    {/* <div className="flex flex-col p-4 items-center h-screen w-[100vw] text-5xl" id="container">
                        <div className="basis-[80%] flex-col gap-6 flex justify-center items-center">
                            <span>Projects</span>
                            <span className="text-lg w-[50vw]">I have been developing web apps for the last year and have contributed to projects built with ReactJs, NextJs, JavaScript, TypeScript, Tailwind, and NodeJs.</span>
                            <a href="" className="text-lg text-[#09099f]">See Projects <AiOutlineRight className="inline" /></a>
                        </div>
                    </div>    */}
                    <Pulzion />
                </div>
            </div>
            <div className="flex self-center justify-self-center h-[10%] flex-row gap-8 mb-0 text-[#09099f] text-xl">
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

