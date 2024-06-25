import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentIcon from '@mui/icons-material/Comment';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import RuleFolderIcon from '@mui/icons-material/RuleFolder';

interface IIcons {
    home: boolean,
    about: boolean,
    projects: boolean,
    commnents: boolean,
    contact: boolean,
}

const HeaderMidd: React.FC = () => {
    const [active, setActive] = useState<IIcons>({
        home: true,
        about: false,
        projects: false,
        commnents: false,
        contact: false
    })


    const handleClick = (name: string) => {
        if(name === "home") {
            setActive({
                home: true,
                about: false,
                projects: false,
                commnents: false,
                contact: false
            })
        }
        if(name === "about") {
            setActive({
                home: false,
                about: true,
                projects: false,
                commnents: false,
                contact: false
            })
        }
        if(name === "projects") {
            setActive({
                home: false,
                about: false,
                projects: true,
                commnents: false,
                contact: false
            })
        }
        if(name === "comments") {
            setActive({
                home: false,
                about: false,
                projects: false,
                commnents: true,
                contact: false
            })
        }
        if(name === "contact") {
            setActive({
                home: false,
                about: false,
                projects: false,
                commnents: false,
                contact: true
            })
        }
    }


  return (
    <div className=' flex justify-center items-center gap-x-5'>

            <a href="#" onClick={() => handleClick("home")} className={` flex flex-col justify-center items-center  p-2 rounded-lg  w-[80px] ${active.home ? "shadow-md shadow-white" : null}`}>
                <HomeIcon sx={{width: 30, height:30}}/>
                <span className=' font-semibold font-mono'>Home</span>
            </a>

            <a href="#" onClick={() => handleClick("about")} className={` flex flex-col justify-center items-center  p-2 rounded-lg w-[80px] ${active.about ? "shadow-md shadow-white" : null}`}>
                <InfoIcon sx={{width: 30, height:30}}/>
                <span className=' font-semibold font-mono'>About</span>
            </a>

            <a href="#" onClick={() => handleClick("projects")} className={` flex flex-col justify-center items-center  p-2 rounded-lg w-[80px] ${active.projects ? "shadow-md shadow-white" : null}`}>
                <RuleFolderIcon sx={{width: 30, height:30}}/>
                <span className=' font-semibold font-mono'>Projects</span>
            </a>

            <a href="#" onClick={() => handleClick("comments")} className={` flex flex-col justify-center items-center  p-2 rounded-lg w-[80px] ${active.commnents ? "shadow-md shadow-white" : null}`}>
                <CommentIcon sx={{width: 30, height:30}}/>
                <span className=' font-semibold font-mono'>Comments</span>
            </a>

            <a href="#" onClick={() => handleClick("contact")} className={` flex flex-col justify-center items-center  p-2 rounded-lg w-[80px] ${active.contact ? "shadow-md shadow-white" : null}`}>
                <ContactMailIcon sx={{width: 30, height:30}}/>
                <span className=' font-semibold font-mono'>Contact</span>
            </a>

            
    </div>
  )
}

export default HeaderMidd