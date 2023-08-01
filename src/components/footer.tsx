import React from 'react'
import { AiFillFacebook, AiOutlineFacebook } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import {FaCcPaypal, FaCcVisa, FaCcMastercard, FaCcDiscover} from "react-icons/fa"

const footer = () => {
  return (
    <div className='w-[70%] mx-auto mt-auto text-xl pb-12 pt-24'>
        <h1 className='text-2xl'>EleShoply.</h1>
       
        <div className='flex w-full justify-between mt-2'>
        <h1>Copyright 2020. Powered by WPDEveloper</h1>
        <ul className='flex w-32 justify-around'>
        
            <li><BsFacebook/></li>
            <li><BsInstagram/></li>
            <li><BsTwitter/></li>
            <li><BsLinkedin/></li>
        </ul>
        <div className=' flex justify-between'>
        <ul className='flex justify-around w-32'>
            
            <li><FaCcPaypal/></li>
            <li><FaCcMastercard/></li>
            <li><FaCcDiscover/></li>
            <li><FaCcVisa/></li>
        </ul>
        </div>
        
        </div>
       
    </div>
  )
}

export default footer