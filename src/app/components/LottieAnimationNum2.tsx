"use client"
import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Animation02 } from '../../../public/lottieParams/LottieParams.js'
import { AnimationConfig, LottiePlayer } from 'lottie-web'

const LottieAnimationNum2 = () => {
  // lottieインスタンスを定義する
  const [lottie, setLottie] = useState<LottiePlayer | null>(null)
  // lottieを表示する要素を定義する
  const AnimationNum02 = useRef(null)
  // マウント時にlottieインスタンスを作成し、stateに格納する
  useEffect(() => {
      import('lottie-web').then((lottie) => setLottie(lottie.default))
  }, [])
    // lottieインスタンスの作成時にパラメータを引数に入れてアニメーションを読み込む
    useEffect(() => {
      if (lottie && AnimationNum02.current) {
        Animation02.container = AnimationNum02.current      
        const animationLoop = lottie.loadAnimation(Animation02 as unknown as AnimationConfig)
        return () => {
          animationLoop.destroy()
        }
      }
    }, [lottie])
      return (
      <div className='w-full md:w-[40%] mx-auto min-h-700px'>
        <div ref={AnimationNum02}/>
      </div>
    )
  }
  export default LottieAnimationNum2

