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
        <Scroll to={`${prevTarget}`} className="relative cursor-pointer text-[20px] md:text-[30px] font-bold transition-opacity hover:opacity-70 text-right block" aria-label="前のスライドへ" smooth={true}>&lt;</Scroll>
        <Scroll to={`${mvTarget}`} className="relative cursor-pointer text-[20px] md:text-[30px] font-bold transition-opacity hover:opacity-70 text-right block" aria-label="トップへ戻る" smooth={true}>&gt;&gt;</Scroll>
      </div>
  )
}

export default AnchorPrevTop