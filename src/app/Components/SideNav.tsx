import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { BsDot } from 'react-icons/bs'

export default function SideNav() {
    return (
        <div className='max-lg:hidden fixed top-[20%] right-0 m-4 z-30'>
            <div className="flex flex-col text-[#09099f] gap-4 text-4xl text-center">
                <button onClick={()=>{window.scrollTo({top: 0})}} className="z-10 hover:bg-gradient-to-b from-[#09099f] to-[#09099f] hover:blur-2xl"><BsDot /></button>
                {/* <a href="/" className=""><BsDot /></a> */}
                {/* <button onClick={()=>{window.scrollTo({top: skillsTop})}} className="z-10 hover:bg-gradient-to-b from-[#09099f] to-[#09099f] hover:blur-2xl"><BsDot /></button> */}
                <button className="z-10 hover:bg-gradient-to-b from-[#09099f] to-[#09099f] hover:blur-2xl"><BsDot /></button>
                <a href="/" className="z-10 hover:bg-gradient-to-b from-[#09099f] to-[#09099f] hover:blur-2xl"><BsDot /></a>
                <a href="/" className="z-10 hover:bg-gradient-to-b from-[#09099f] to-[#09099f] hover:blur-2xl"><BsDot /></a>
                <a className='flex flex-col mt-6 text-center gap-14'>
                    <span className='px-1 text-2xl text-[#09099f]'><MdOutlineKeyboardArrowUp /></span>
                    <span className='-ml-4 text-xs text-[#09099f] -rotate-90 h-fit'>Back to top</span>
                </a>                
            </div>
        </div>
    )
}