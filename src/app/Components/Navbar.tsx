import 'styles/navbar.css'

export default function Navbar() {
    return (
        <div className="lg:fixed lg:top-0 z-20 flex flex-row p-6 w-[100vw] bg-transparent">
            <a href='/' className="z-20 text-5xl whitespace-pre">Anand <span className="text-[#09099f]"> _ </span></a>
            <button className="px-6 ml-auto mr-4 text-base border-0 animated"><span>Contact</span></button>
        </div>
    )
}