"use client"

import React from 'react'
import { Link as Scroll } from 'react-scroll'

interface Props {
    target: string;
}

const AnchorSection = (props: Props) => {
    const { target } = props
    
  return (
    <Scroll to={`${target}`} className="relative cursor-pointer text-[20px] md:text-[30px] font-bold transition-opacity hover:opacity-70 text-right block mt-[20px] md:mt-[30px] mb-[300px]" smooth={true}>Next</Scroll>
  )
}

export default AnchorSection