import { useEffect, useRef } from 'react';
import skills from '../../../data/skills'
import { usePathname } from 'next/navigation';

export default function Skills() {   
    const pathname = usePathname()
    const skillsRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const container = skillsRef.current

        function handleWheel(e:WheelEvent) {
            if(e.deltaY > 0) {
                localStorage.setItem("page","projects")
            }
        }

        if(container)  {
            container.addEventListener("wheel",handleWheel)
        }
    })

    return (        
        <div id='skills' ref={skillsRef} className="flex flex-col text-center h-[100vh] items-center justify-center m-4 gap-6">            
            <span className="text-5xl">Skills</span>
            <span className="text-base font-semibold">The main area of expertise is front end development (client side of the web).</span>
            <span className="text-base font-semibold">HTML, CSS, JS, building small and medium web applications with Next or React, custom plugins, features, animations, and coding interactive layouts.</span>
            <span className="text-base font-semibold">Visit my <a href="https://www.linkedin.com/in/anand-lunawat-aa220622b/" className="text-[#b93737] font-extrabold">LinkedIn</a> for more details.</span>
            <div className='grid grid-cols-7 gap-8 px-10 text-3xl max-lg:text-xl max-lg:grid-cols-4'>
                {
                    skills.map((skill,index) => {
                        const Component = skill.component;
                        return (
                            <div key={index} className='flex bg-[#f5f5f5] flex-col h-24 hover:h-24 items-center justify-center gap-3 py-2 hover:shadow-[#09099f] hover:border-transparent hover:border hover:shadow-[0px_0px_5px_2px] rounded-xl'>
                                <Component />
                                <span className='text-xl max-lg:text-xs'>{skill.name}</span>                            
                            </div>
                        )
                    })
                }                
            </div>            
        </div>
    )
}