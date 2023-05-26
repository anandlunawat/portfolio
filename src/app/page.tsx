'use client';

import 'styles/styles.css';
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import SideNav from "./Components/SideNav";
import Skills from "./Components/Skills";
import Project from "./Components/Projects";
import Experience from "./Components/Experience";

export default function Home() {
  
  const [components,setComponentsTop] = useState([{name : "skills","top" : 0},{name : "projects","top" : 0}])

  useEffect(()=> {
    const ids = components.map((component)=> document.getElementById(component.name))    
    const updateComponents = components.map((component,index) => {
      const id = ids[index]      
      return {
        ...component,
        top : id?.offsetTop || 0
      }
    })    
    setComponentsTop(updateComponents)

    // let prevPos = window.pageYOffset
    // window.addEventListener("scroll",function () {
    //   const currentScrollPos = this.window.pageYOffset
    //   if(currentScrollPos > prevPos) {
    //     onScrollUp()
    //   }
    //   prevPos = currentScrollPos
    // })

    // function onScrollUp() {
    //   if(window.pageYOffset < components[0].top) {
    //     window.scrollTo({
    //       top : components[0].top,          
    //     })
    //   }
    // }
  })

  return (
    <div className="">
      <div className="h-[100vh]">
        <Navbar />
        <SideNav 
          skillsTop={components[0].top}
        />
        <div className="flex lg:flex-row flex-col items-center justify-center before:absolute before:bg-gradient-to-br from-black max-lg:before:top-2 before:h-[100vh] before:z-10 before:inset-0 h-[85vh] gap-0 m-4">
          <div className="z-20 flex flex-col items-center justify-center gap-8 basis-1/2">
            <span className="text-2xl whitespace-pre max-lg:font-bold lg:text-7xl">ANAND LUNAWAT</span>
            <span className="lg:text-xl max-sm:text-sm text-base text-[#00b381] font-semibold">SOFTWARE ENGINEER, FRONT END DEVELOPER</span>
          </div>
          <img src="avatar.png" className="z-20 h-[80vh] w-fit max-lg:h-[20vh] max-lg:-mt-20 basis-1/2" />
        </div>
      </div>
      <Skills 
        skillTop = {components[0].top}
        projectTop = {components[1].top}
      />
      <Project 
        projectTop = {components[1].top}
      />
      <Experience />
    </div>
  )
}

