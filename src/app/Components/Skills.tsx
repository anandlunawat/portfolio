import { useEffect } from 'react';
import skills from '../../../data/skills'

export default function Skills({skillTop,projectTop}: {skillTop : number,projectTop : number} ) {

    // useEffect(()=> {
    //     let prevPos = window.pageYOffset
    //     window.addEventListener("scroll",function () {
    //       const currentScrollPos = this.window.pageYOffset
    //       if(currentScrollPos > prevPos) {            
    //         onScrollUp()
    //       } else if(currentScrollPos < prevPos) {
    //         console.log("In Scroll Down")            
    //         onScrollDown()
    //       }        
    //       prevPos = currentScrollPos
    //     })
    
    //     function onScrollUp() {
    //       if(window.pageYOffset < projectTop && window.pageYOffset > skillTop ) {
    //         window.scrollTo({
    //           top : projectTop,          
    //         })
    //       }
    //     }

    //     function onScrollDown() {
    //         if(window.pageYOffset === skillTop) {
    //             console.log("On top")
    //             window.scrollTo({
    //                 top : 0
    //             })
    //         }
    //     }

    // },[])

    return (        
        <div id='skills' className="flex flex-col text-center h-[100vh] items-center justify-center m-4 gap-6">            
            <span className="text-5xl">Skills</span>
            <span className="text-base">The main area of expertise is front end development (client side of the web).</span>
            <span className="text-base">HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts.</span>
            <span className="text-base">Visit my <a href="https://www.linkedin.com/in/anand-lunawat-aa220622b/" className="text-[#00b381]">LinkedIn</a> for more details.</span>
            <div className='grid grid-cols-7 gap-8 px-10 text-3xl max-lg:text-xl max-lg:grid-cols-4'>
                {
                    skills.map((skill,index) => {
                        const Component = skill.component;
                        return (
                            <div key={index} className='flex flex-col h-24 hover:h-24 items-center justify-center gap-3 py-2 hover:shadow-[#00b381] hover:border-transparent hover:border hover:shadow-[0px_0px_5px_2px] rounded-xl'>
                                <Component />
                                <span className='text-xl text-white max-lg:text-xs'>{skill.name}</span>                            
                            </div>
                        )
                    })
                }                
            </div>            
        </div>
    )
}