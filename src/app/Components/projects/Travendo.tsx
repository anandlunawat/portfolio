import ThreeJs from "../ThreeJs";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Travendo() {

    return (
        <div className="flex items-center p-4 h-screen flex-row w-[100vw] transition-opacity duration-150 ease-in-out rounded-md shadow-md opacity-100">
            <div className="flex flex-col gap-3 p-4 basis-1/2">
                <span>An E-commerce App</span>
                <span className="text-5xl">Travendo</span>
                <span className="text-xl">Online platform for ordering authenticate food products.</span>
                <span className="text-xl font-bold">Built with :<span className="font-normal"> Next, Tailwind, ThreeJS, Node and Express</span></span>
                <a className="flex items-center gap-2 mt-8 text-xl font-bold" href="https://pulzion.co.in/">Visit the app <MdKeyboardArrowRight /></a>
            </div>
            <ThreeJs />
        </div>
    )
}