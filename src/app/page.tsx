'use client';

import 'styles/styles.css';
import { useEffect, useState, useRef } from "react";
import Navbar from "./Components/Navbar";
import SideNav from "./Components/SideNav";
import Skills from "./Components/Skills";
import Project from "./Components/Projects";
import Experience from "./Components/Experience";

export default function Home() {

  const [components, setComponentsTop] = useState([{ name: "skills", "top": 0 }, { name: "projects", "top": 0 }])
  const pageRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0)  
  const scrollStep = screen.height;
  const [scrollFactor,setScrollFactor] = useState(1);

  useEffect(() => {
    const ids = components.map((component) => document.getElementById(component.name))
    const updateComponents = components.map((component, index) => {
      const id = ids[index]
      return {
        ...component,
        top: id?.offsetTop || 0
      }
    })
    const container = pageRef.current;

    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      const deltaY = event.deltaY;
      const scrollStep = screen.height; 

      if(deltaY > 0) {
        console.log("Math.abs(scrollPosition) ",Math.abs(scrollPosition))
        if(Math.abs(scrollPosition) === scrollStep) {
          console.log("In if")
          setScrollPosition(-2 * scrollStep)
        }
        setScrollPosition(container!.scrollTop - scrollStep)                 
      } else {        
        setScrollPosition(container!.scrollTop + 0)
      }  

      container?.classList.add("scroll-animation");
      container!.style.transform = `translateY(${scrollPosition}px)`;            

      container!.style.overflow = "hidden";
    };

    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
    }   
  })

  return (
    <div className="" ref={pageRef}>
      <div className="h-[100vh]">
        <Navbar />
        <SideNav />
        <div className="flex lg:flex-row flex-col items-center justify-center before:absolute before:bg-gradient-to-br from-black max-lg:before:top-2 before:h-[100vh] before:z-10 before:inset-0 h-[85vh] gap-0 m-4">
          <div className="z-20 flex flex-col items-center justify-center gap-8 basis-1/2">
            <span className="text-2xl whitespace-pre max-lg:font-bold lg:text-7xl">ANAND LUNAWAT</span>
            <span className="lg:text-xl max-sm:text-sm text-base text-[#00b381] font-semibold">SOFTWARE ENGINEER, FRONT END DEVELOPER</span>
          </div>
          <img src="avatar.png" className="z-20 h-[80vh] w-fit max-lg:h-[20vh] max-lg:-mt-20 basis-1/2" />
        </div>
      </div>
      <Skills
        skillTop={components[0].top}
        projectTop={components[1].top}
      />
      <Project
        projectTop={components[1].top}
      />
      <Experience />
    </div>
  )
}

