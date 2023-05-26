import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { BsDot } from 'react-icons/bs'

export default function SideNav({ skillsTop }: { skillsTop: number }) {
    return (
        <div className='max-lg:hidden fixed top-[20%] right-0 m-4 z-30'>
            <div className="flex flex-col text-[#00b381] gap-4 text-4xl text-center">
                <button onClick={()=>{window.scrollTo({top: 0})}} className="z-10 hover:bg-gradient-to-b from-[#00b381] to-[#00b381] hover:blur-2xl"><BsDot /></button>
                {/* <a href="/" className=""><BsDot /></a> */}
                <button onClick={()=>{window.scrollTo({top: skillsTop})}} className="z-10 hover:bg-gradient-to-b from-[#00b381] to-[#00b381] hover:blur-2xl"><BsDot /></button>
                <a href="/" className="z-10 hover:bg-gradient-to-b from-[#00b381] to-[#00b381] hover:blur-2xl"><BsDot /></a>
                <a href="/" className="z-10 hover:bg-gradient-to-b from-[#00b381] to-[#00b381] hover:blur-2xl"><BsDot /></a>
                <a className='flex flex-col mt-6 text-center gap-14'>
                    <span className='px-1 text-2xl text-white'><MdOutlineKeyboardArrowUp /></span>
                    <span className='-ml-4 text-xs text-gray-400 -rotate-90 h-fit'>Back to top</span>
                </a>                
            </div>
        </div>
    )
}