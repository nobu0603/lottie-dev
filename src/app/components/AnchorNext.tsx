"use client"

import React from 'react'
import { Link as Scroll } from 'react-scroll'

interface Props {
    nextTarget: string;
}

const AnchorNext = (props: Props) => {
    const { nextTarget } = props
    
  return (
      <div className='flex items-end justify-end mt-[20px] md:mt-[30px] mb-[300px] sticky top-[100px] left-0 right-0 mr-[-8px] md:mr-0'>
        <Scroll to={`${nextTarget}`} className="arrow-right shadow-[10px_10px_50px_0_rgba(0,0,0,0.5)] relative cursor-pointer text-[20px] md:text-[30px] font-bold transition-opacity hover:opacity-70 block bg-[rgba(255,255,255,1)] backdrop-blur-sm w-[25px] md:w-[30px] h-[25px] md:h-[30px] text-center rounded-full" aria-label="次のスライドへ" smooth={true}></Scroll>
      </div>
  )
}

export default AnchorNext