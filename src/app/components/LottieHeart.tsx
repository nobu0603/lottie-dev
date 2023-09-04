"use client"
import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { HeartAnimation } from '../../../public/lottieParams/LottieParams.js'
import { AnimationConfig, LottiePlayer } from 'lottie-web'

const LottieHeart = () => {
  // lottieインスタンスを定義する
  const [lottie, setLottie] = useState<LottiePlayer | null>(null)
  // lottieを表示する要素を定義する
  const heartAnime = useRef(null)
  let isPlaying = false
  // 名前とイベントに応じてlottieを操作する  
  const lottieHandler = (name: string, event: string) => {
    if(lottie) {
      switch (event) {
        case 'click':
          if(isPlaying) {
            lottie.stop(name)
            isPlaying = false
          } else {
            lottie.play(name)
            isPlaying = true
          }
          break      
        case'mouseOver':
          lottie.play(name)
          break      
        case 'mouseOut':
          lottie.pause(name)
          break    
      }
    }
  }
  // マウント時にlottieインスタンスを作成し、stateに格納する
  useEffect(() => {
      import('lottie-web').then((lottie) => setLottie(lottie.default))
  }, [])
    // lottieインスタンスの作成時にパラメータを引数に入れてアニメーションを読み込む
    useEffect(() => {
      if (lottie && heartAnime.current) {
        HeartAnimation.container = heartAnime.current      
        const animationLoop = lottie.loadAnimation(HeartAnimation as unknown as AnimationConfig)
        return () => {
          animationLoop.destroy()
        }
      }
    }, [lottie])
      return (
      <div className='mx-auto w-[500px] h-[500px]'>
        <div ref={heartAnime} onClick={() => lottieHandler('heartAnime', 'click')} className='cursor-pointer'/>
      </div>
    )
  }
  export default LottieHeart

