import ThreeJs from "../ThreeJs";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Pulzion() {

    return (
        <div id="pulzion" className="flex items-center w-[100vw] p-4 flex-row transition-opacity duration-300 ease-in-out rounded-md shadow-md opacity-100">
            <div className="flex flex-col gap-3 p-4 basis-1/2">
                <span>EMS Web App</span>
                <span className="text-5xl">Pulzion</span>
                <span className="text-xl">Online platform for handling Pulzion Events.</span>
                <span className="text-xl font-bold">Built with :<span className="font-normal"> Next, Tailwind, ThreeJS, Node and Express</span></span>
                <a className="flex items-center gap-2 mt-8 text-xl font-bold" href="https://pulzion.co.in/">Visit the app <MdKeyboardArrowRight /></a>
            </div>
            <ThreeJs />
            {/* <img src="/pulzion.png" className="absolute w-[25vw] left-[54%] h-[52vh] p-2"/> */}
        </div>
    )
}