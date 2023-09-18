"use client"
import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { WakuwakuBetaAnimation } from '../../../public/lottieParams/LottieParams.js'
import { AnimationConfig, LottiePlayer } from 'lottie-web'

const LottieWakuwakuBeta = () => {
  // lottieインスタンスを定義する
  const [lottie, setLottie] = useState<LottiePlayer | null>(null)
  // lottieを表示する要素を定義する
  const wakuwakuBetaLoop = useRef(null)
  // マウント時にlottieインスタンスを作成し、stateに格納する
  useEffect(() => {
      import('lottie-web').then((lottie) => setLottie(lottie.default))
  }, [])
    // lottieインスタンスの作成時にパラメータを引数に入れてアニメーションを読み込む
    useEffect(() => {
      if (lottie && wakuwakuBetaLoop.current) {
        WakuwakuBetaAnimation.container = wakuwakuBetaLoop.current      
        const animationLoop = lottie.loadAnimation(WakuwakuBetaAnimation as unknown as AnimationConfig)
        return () => {
          animationLoop.destroy()
        }
      }
    }, [lottie])
      return (
      <div className='w-full min-h-700px'>
        <div ref={wakuwakuBetaLoop}/>
      </div>
    )
  }
  export default LottieWakuwakuBeta

