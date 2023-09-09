"use client"

import React from 'react'
import { Link as Scroll } from 'react-scroll'

interface Props {
    prevTarget: string;
    nextTarget: string;
}

const AnchorSection = (props: Props) => {
    const { prevTarget, nextTarget } = props
    
  return (
      <div className='flex items-center justify-between mt-[20px] md:mt-[30px] mb-[300px]'>
        <Scroll to={`${prevTarget}`} className="relative cursor-pointer text-[20px] md:text-[30px] font-bold transition-opacity hover:opacity-70 text-right block" smooth={true}>Prev</Scroll>
        <Scroll to={`${nextTarget}`} className="relative cursor-pointer text-[20px] md:text-[30px] font-bold transition-opacity hover:opacity-70 text-right block" smooth={true}>Next</Scroll>
      </div>
  )
}

export default AnchorSection