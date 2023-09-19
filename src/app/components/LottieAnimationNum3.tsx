"use client"
import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Animation03 } from '../../../public/lottieParams/LottieParams.js'
import { AnimationConfig, LottiePlayer } from 'lottie-web'

const LottieAnimationNum3 = () => {
  // lottieインスタンスを定義する
  const [lottie, setLottie] = useState<LottiePlayer | null>(null)
  // lottieを表示する要素を定義する
  const AnimationNum03 = useRef(null)
  // マウント時にlottieインスタンスを作成し、stateに格納する
  useEffect(() => {
      import('lottie-web').then((lottie) => setLottie(lottie.default))
  }, [])
    // lottieインスタンスの作成時にパラメータを引数に入れてアニメーションを読み込む
    useEffect(() => {
      if (lottie && AnimationNum03.current) {
        Animation03.container = AnimationNum03.current      
        const animationLoop = lottie.loadAnimation(Animation03 as unknown as AnimationConfig)
        return () => {
          animationLoop.destroy()
        }
      }
    }, [lottie])
      return (
      <div className='w-full md:w-[40%] mx-auto min-h-700px'>
        <div ref={AnimationNum03}/>
      </div>
    )
  }
  export default LottieAnimationNum3

