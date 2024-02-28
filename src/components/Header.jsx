import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaHome } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineLocalMovies } from "react-icons/md";
import { MdCameraRoll } from "react-icons/md";
import HeaderItem from './HeaderItem';
import { HiDotsVertical } from "react-icons/hi";
import User from '../assets/user.png'
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [    
    {
      name:'HOME',
      icon:FaHome
    },
    {
      name:'SEARCH',
      icon:IoIosSearch
    },
    {
      name:'STAR',
      icon:FaStarHalfAlt
    },
    {
      name:'MOVIES',
      icon:MdOutlineLocalMovies
    },
    {
      name:'PLUS',
      icon:CiCirclePlus
    },
    {
      name:'SERIES',
      icon:MdCameraRoll
    },
  ]
  return (
    <>
        <div className='flex gap-8 items-center justify-between p-5'> 
          <div className='flex flex-end gap-8 items-center'>
              <img src={logo} className='w-[30px] md:w-[115px] object-cover'/>

              <div className='md:flex hidden gap-8'>
                {menu.map((item=>(
                  <HeaderItem name={item.name} Icon={item.icon} />
                )))}
              </div>

              <div className='flex md:hidden gap-8'>
                {menu.map((item,index)=>index<3&&(
                  <HeaderItem name={''} Icon={item.icon} />
                ))}
                <div className='md:hidden' >
                    <HeaderItem  name='' Icon={HiDotsVertical} onClick={()=>setToggle(!toggle)}/>
                    {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 text-white rounded-xl'>
                    {menu.map((item,index)=>index>2&&(
                       <HeaderItem key={index} name={item.name} Icon={item.icon} />
                ))}
                    </div>:null}
                </div> 
              </div>
          </div>
        <img src={User} className='w-[30px] mr-3 rounded-full'/>  
        </div>
    </>
  )
}

export default Header