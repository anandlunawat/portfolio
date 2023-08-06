'use client';

import 'styles/styles.css';
import { useEffect, useState, useRef } from "react";
import Navbar from "./Components/Navbar";
import SideNav from "./Components/SideNav";
import Skills from "./Components/Skills";
import Project from "./Components/Projects";
import Pulzion from './Components/projects/Pulzion';
import Travendo from './Components/projects/Travendo';
import Experience from './Components/Experience';
import {BiArrowToBottom} from "react-icons/bi"

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
          window.history.pushState({key:"projects"},'','#projects')    
          setDisableScroll(true)         
          container?.removeEventListener("wheel",handleScroll)                
        } else if(state === "projects" && !disableScroll) {
          setState("pulzion")
          window.history.pushState({key:"pulzion"},'','#pulzion')    
          setDisableScroll(true)     
        } else if(state === "pulzion" && !disableScroll) {
          setState("travendo")
          window.history.pushState({key:"travendo"},'','#travendo')    
          setDisableScroll(true)     
        } else if(state === "travendo") {
          setState("experience")
          window.history.pushState({key:"experience"},'','#experience')    
          setDisableScroll(true)     
        }
      } else if (deltaY < 0) {
        if(state === "experience") {
          setState("travendo")
          setDisableScroll(true)
        } else if(state === "travendo") {
          setState("pulzion")
          setDisableScroll(true)
        } else if(state === "pulzion") {
          setState("projects")
          setDisableScroll(true)
        } else if (state === "projects" && !disableScroll) {
          setState("skills");
          setDisableScroll(true)
        } else if (state === "skills" && !disableScroll) {
          setState("page");
          setDisableScroll(true)
        }
      }

      setDisableScroll(true)
      
      setInterval(() => {
        setDisableScroll(false);               
      }, 1000);
    };

    // const handlePopState = (event: PopStateEvent) => {
    //   console.log("state", event.state);
    // };

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
    <div className="h-[100vh]">
      <div className="">
        <Navbar />
        <SideNav />        
        <div ref={pageRef}>
          {state === "page" ? (
            <div>              
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
          ) : state === "projects" ? <Project /> : state === "pulzion" ? <Pulzion /> : state === "travendo" ? <Travendo /> : state === "experience" ? <Experience /> : (
            <></>
          )}
        </div>        
      </div>
      <div className='fixed p-2 text-4xl bottom-4 left-4 border-[2px] border-[#09099f] rounded-full'>
        <BiArrowToBottom />
      </div>
    </div>
  );
}
