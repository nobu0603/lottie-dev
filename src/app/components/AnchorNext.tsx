"use client"

import React from 'react'
import { Link as Scroll } from 'react-scroll'

interface Props {
    nextTarget: string;
}

const AnchorNext = (props: Props) => {
    const { nextTarget } = props
    
  return (
      <div className='flex items-center justify-end mt-[20px] md:mt-[30px] mb-[300px]'>
        <Scroll to={`${nextTarget}`} className="relative cursor-pointer text-[20px] md:text-[30px] font-bold transition-opacity hover:opacity-70 text-right block" smooth={true}>Next</Scroll>
      </div>
  )
}

export default AnchorNext