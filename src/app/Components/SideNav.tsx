import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { BsDot } from 'react-icons/bs'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

export default function SideNav() {
    return (
        <div className='max-lg:hidden fixed top-[40%] right-2 m-4 z-30'>
            <div className="flex flex-col items-center justify-center text-[#09099f] gap-8 text-xl text-center">
                <a className="z-10 hover:bg-gradient-to-b from-[#09099f] to-[#09099f] hover:blur-xl"><BsLinkedin /></a>                
                <a className="z-10 hover:bg-gradient-to-b from-[#09099f] to-[#09099f] hover:blur-xl"><BsGithub /></a>
                <a href="/" className="z-10 hover:bg-gradient-to-b from-[#09099f] to-[#09099f] hover:blur-xl"><BsInstagram /></a>
                <a href="/" className="z-10 hover:bg-gradient-to-b from-[#09099f] to-[#09099f] hover:blur-xl"><MdEmail /></a>               
            </div>
        </div>
    )
}