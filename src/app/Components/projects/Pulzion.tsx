import { useEffect } from "react"

export default function Pulzion({projectTop,pulzion,travendo,onTravendo} : {projectTop:number,pulzion:boolean,travendo:boolean,onTravendo : ()=> void }) {

    useEffect(()=>{
        // if(window.pageYOffset > projectTop) {
        //     window.scrollTo({
        //         top: projectTop,
        //     })            
        // }

        // function onScroll() {
        //     let id = document.querySelector("body")
        //     if(id) {
        //         id.style.overflow="hidden"
        //     }            
        // }

        // document.removeEventListener("scroll",onScroll)   

        // function offPulzion() {
        //     onTravendo()
        // }

        // return ()=> {
        //     document.addEventListener("scroll",offPulzion)
        // }
    })

    return (
        <div id="pulzion" className={`${pulzion ? "flex overflow-auto items-center p-4 flex-row h-[100vh] transition-opacity duration-300 ease-in-out rounded-md shadow-md opacity-100`}" : "opacity-0" }`}>
            <div className="flex flex-col gap-3 p-4 basis-1/2">
                <span>EMS Web App</span>
                <span className="text-5xl">Pulzion</span>
                <span className="text-xl">Online platform for handling Pulzion Events.</span>
            </div>
        </div>
    )
}