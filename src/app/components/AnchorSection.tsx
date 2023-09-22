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
      <div className='flex flex-col items-end justify-end sticky top-[50px] md:top-[100px] left-0 right-0 mr-[-8px] md:mr-0'>
        <Scroll to={`${prevTarget}`} className="arrow-left shadow relative cursor-pointer text-[20px] md:text-[30px] font-bold transition-opacity hover:opacity-70 block bg-[rgba(255,255,255,1)] backdrop-blur-sm w-[25px] md:w-[30px] h-[25px] md:h-[30px] text-center rounded-md mb-[20px]" aria-label="前のスライドへ" smooth={true}></Scroll>
        <Scroll to={`${nextTarget}`} className="arrow-right shadow relative cursor-pointer text-[20px] md:text-[30px] font-bold transition-opacity hover:opacity-70 block bg-[rgba(255,255,255,1)] backdrop-blur-sm w-[25px] md:w-[30px] h-[25px] md:h-[30px] text-center rounded-md" aria-label="次のスライドへ" smooth={true}></Scroll>
      </div>
  )
}

export default AnchorSection