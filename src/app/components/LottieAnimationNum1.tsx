"use client"
import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Animation01 } from '../../../public/lottieParams/LottieParams.js'
import { AnimationConfig, LottiePlayer } from 'lottie-web'

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
      <div className='w-full md:w-[40%] mx-auto min-h-700px'>
        <div ref={AnimationNum01}/>
      </div>
    )
  }
  export default LottieAnimationNum1

