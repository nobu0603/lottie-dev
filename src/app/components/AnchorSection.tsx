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
      <div className='flex items-center justify-between mt-[20px] md:mt-[30px] mb-[300px] sticky bottom-[20px] left-0 right-0'>
        <Scroll to={`${prevTarget}`} className="arrow-left shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)] relative cursor-pointer text-[20px] md:text-[30px] font-bold transition-opacity hover:opacity-70 block bg-[rgba(255,255,255,1)] backdrop-blur-sm w-[30px] md:w-[45px] h-[30px] md:h-[45px] text-center rounded-full" aria-label="前のスライドへ" smooth={true}></Scroll>
        <Scroll to={`${nextTarget}`} className="arrow-right shadow-[10px_10px_50px_0_rgba(0,0,0,0.5)] relative cursor-pointer text-[20px] md:text-[30px] font-bold transition-opacity hover:opacity-70 block bg-[rgba(255,255,255,1)] backdrop-blur-sm w-[30px] md:w-[45px] h-[30px] md:h-[45px] text-center rounded-full" aria-label="次のスライドへ" smooth={true}></Scroll>
      </div>
  )
}

export default AnchorSection