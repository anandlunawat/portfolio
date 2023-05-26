import { useEffect } from "react"

export default function Travendo({projectTop,travendo,pulzion,offTravendo} : {projectTop:number,travendo : boolean,pulzion:boolean,offTravendo : ()=> void}) {

    useEffect(()=> {

        // if(window.pageYOffset > projectTop) {
        //     window.scrollTo({
        //         top: projectTop,                
        //     })            
        // }

        // function onScroll() {            
        //     offTravendo()
        // }
        
        // document.removeEventListener("scroll",onScroll)

        // return ()=> {
        //     document.addEventListener("scroll",onScroll)
        // }

    })

    return (
        <div className={`${travendo && !pulzion ? "flex overflow-auto items-center p-4 flex-row h-[100vh] transition-opacity duration-150 ease-in-out rounded-md shadow-md opacity-100`}" : "opacity-0"}`}>
            <div className="flex flex-col gap-3 p-4 basis-1/2">
                <span>An Ecommerce App</span>
                <span className="text-5xl">Travendo</span>
                <span className="text-xl">Online platform for ordering authenticate food products.</span>
            </div>
        </div>
    )
}