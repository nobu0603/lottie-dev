"use client"
import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Animation01 } from '../../../public/lottieParams/LottieParams.js'
import { AnimationConfig, LottiePlayer } from 'lottie-web'
import { Link as Scroll } from 'react-scroll'

const LottieAnimationNum1 = () => {
  // lottieインスタンスを定義する
  const [lottie, setLottie] = useState<LottiePlayer | null>(null)
  // lottieを表示する要素を定義する
  const AnimationNum01 = useRef(null)
  // マウント時にlottieインスタンスを作成し、stateに格納する
  useEffect(() => {
      import('lottie-web').then((lottie) => setLottie(lottie.default))
  }, [])
    // lottieインスタンスの作成時にパラメータを引数に入れてアニメーションを読み込む
    useEffect(() => {
      if (lottie && AnimationNum01.current) {
        Animation01.container = AnimationNum01.current      
        const animationLoop = lottie.loadAnimation(Animation01 as unknown as AnimationConfig)
        return () => {
          animationLoop.destroy()
        }
      }
    }, [lottie])
      return (
      <div className='w-[100px] md:w-[120px] ml-auto'>
        <Scroll to='mv' smooth={true} duration={1000} className="cursor-pointer block w-full h-full hover:opacity-70 transition-opacity">
          <div ref={AnimationNum01}/>
          <p className='text-center font-bold text-[14px] md:text-[16px]'>TOP</p>
        </Scroll>
      </div>
    )
  }
  export default LottieAnimationNum1

