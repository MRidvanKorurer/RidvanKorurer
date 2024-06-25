import React from 'react'
import logo from "../../assets/logo.png";

const HeaderLeft: React.FC = () => {
  return (
    <div className=' flex justify-start items-center gap-x-5 select-none '>
        <img src={logo} alt="logo" className=' w-[90px] h-[90px] rounded-full'/>
        <h2 className=' font-extrabold font-serif tracking-widest text-2xl hover:text-orange-600 transition-all cursor-pointer'><span className=' text-4xl'>R</span>IDVAN KORURER</h2>
    </div>
  )
}

export default HeaderLeft