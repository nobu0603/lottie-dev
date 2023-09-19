"use client"
import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Animation04 } from '../../../public/lottieParams/LottieParams.js'
import { AnimationConfig, LottiePlayer } from 'lottie-web'

const LottieAnimationNum4 = () => {
  // lottieインスタンスを定義する
  const [lottie, setLottie] = useState<LottiePlayer | null>(null)
  // lottieを表示する要素を定義する
  const AnimationNum04 = useRef(null)
  // マウント時にlottieインスタンスを作成し、stateに格納する
  useEffect(() => {
      import('lottie-web').then((lottie) => setLottie(lottie.default))
  }, [])
    // lottieインスタンスの作成時にパラメータを引数に入れてアニメーションを読み込む
    useEffect(() => {
      if (lottie && AnimationNum04.current) {
        Animation04.container = AnimationNum04.current      
        const animationLoop = lottie.loadAnimation(Animation04 as unknown as AnimationConfig)
        return () => {
          animationLoop.destroy()
        }
      }
    }, [lottie])
      return (
      <div className='w-full md:w-[40%] mx-auto min-h-700px'>
        <div ref={AnimationNum04}/>
      </div>
    )
  }
  export default LottieAnimationNum4

