"use client"

import React from 'react'
import { Link as Scroll } from 'react-scroll'

interface Props {
    prevTarget: string;
    mvTarget: string;
}

const AnchorPrevTop = (props: Props) => {
    const { prevTarget, mvTarget } = props
    
  return (
      <div className='flex items-center justify-between mt-[20px] md:mt-[30px] mb-[300px] sticky bottom-0 left-0 right-0'>
        <Scroll to={`${prevTarget}`} className="arrow-left relative cursor-pointer text-[20px] md:text-[30px] font-bold transition-opacity hover:opacity-70 block bg-[rgba(255,255,255,0.1)] backdrop-blur-sm w-[30px] md:w-[45px] h-[30px] md:h-[45px] text-center rounded-full" aria-label="前のスライドへ" smooth={true}></Scroll>
        <Scroll to={`${mvTarget}`} className="arrow-top relative cursor-pointer text-[20px] md:text-[30px] font-bold transition-opacity hover:opacity-70 block bg-[rgba(255,255,255,0.1)] backdrop-blur-sm w-[30px] md:w-[45px] h-[30px] md:h-[45px] text-center rounded-full" aria-label="トップへ戻る" smooth={true}></Scroll>
      </div>
  )
}

export default AnchorPrevTop