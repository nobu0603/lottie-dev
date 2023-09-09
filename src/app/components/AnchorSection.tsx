"use client"

import React from 'react'
import { Link as Scroll } from 'react-scroll'

interface Props {
    target: string;
}

const AnchorSection = (props: Props) => {
    const { target } = props
    
  return (
    <Scroll to={`${target}`} className="relative cursor-pointer text-[30px] md:text-[60px] font-bold transition-opacity hover:opacity-70 text-right block" smooth={true}>Next</Scroll>
  )
}

export default AnchorSection