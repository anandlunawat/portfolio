'use client';

import 'styles/styles.css';
import { useEffect, useState, useRef } from "react";
import Navbar from "./Components/Navbar";
import SideNav from "./Components/SideNav";
import Skills from "./Components/Skills";
import Project from "./Components/Projects";
import * as image from '.../public/background.jpg'

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState("page");
  const [disableScroll, setDisableScroll] = useState(false);

  useEffect(() => {
    const container = pageRef.current;    
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault()      

      window.history.pushState({},'','')    

      if (disableScroll) {
        return;
      }

      let deltaY = event.deltaY;      

      if (deltaY > 0) {
        if (state === "page" && !disableScroll) {
          setState("skills")    
          window.history.pushState({key:"skills"},'','#skills')              
          setDisableScroll(true)  
          container?.removeEventListener("wheel",handleScroll)                
        } else if (state === "skills" && !disableScroll) {
          setState("projects")  
          document.querySelector("body")!.style.overflow = "auto"        
          window.history.pushState({key:"projects"},'','#projects')    
          setDisableScroll(true)         
          container?.removeEventListener("wheel",handleScroll)                
        } 
      } else if (deltaY < 0) {
        if (state === "projects" && !disableScroll) {
          document.querySelector("body")!.style.overflow="hidden"
          setState("skills");
          setDisableScroll(true)
        } else if (state === "skills" && !disableScroll) {
          setState("page");
          setDisableScroll(true)
        }
      }

      setDisableScroll(true)

      setTimeout(() => {
        setDisableScroll(false);               
      }, 1000);
    };

    const handlePopState = (event: PopStateEvent) => {
      console.log("state", event.state);
    };

    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, [disableScroll]);

  return (
    <div className="h-[200vh]">
      <div className="">
        <Navbar />
        <SideNav />        
        <div ref={pageRef}>
          {state === "page" ? (
            <div>
              {/* <div className="flex lg:flex-row flex-col items-center justify-center before:absolute before:bg-gradient-to-br from-black max-lg:before:top-2 before:h-[100vh] before:z-10 before:inset-0 h-[85vh] gap-0 m-4"> */}
              <div className="flex lg:flex-row flex-col items-center justify-center h-[85vh] gap-0 m-4">
                <div className="z-20 flex flex-col items-center justify-center gap-8 basis-1/2">
                  <span className="text-2xl whitespace-pre max-lg:font-bold lg:text-7xl">ANAND LUNAWAT</span>
                  <span className="lg:text-xl max-sm:text-sm text-base text-[#09099f] font-semibold">SOFTWARE ENGINEER, FRONT END DEVELOPER</span>
                </div>
                <img src="avatar.png" className="z-20 h-[80vh] w-fit max-lg:h-[20vh] max-lg:-mt-20 basis-1/2" />
              </div>
            </div>
          ) : state === "skills" ? (
            <Skills />
          ) : (
            <></>
          )}
        </div>        
      </div>
      <Project />
    </div>
  );
}
