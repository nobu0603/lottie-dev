"use client"
import LottieHeart from "./components/LottieHeart";
import LottieWakuwaku from "./components/LottieWakuwaku";
import { use, useEffect } from "react";
import Image from 'next/image';
import mvImage from '../../public/images/text_mv.svg';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';
import { Link as Scroll } from 'react-scroll'
import AnchorSection from "./components/AnchorSection";
import AnchorNext from "./components/AnchorNext";
import AnchorPrevTop from "./components/AnchorPrevTop";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    const ids = ['sec-01', 'sec-02', 'sec-03', 'sec-04'];
    
    ids.forEach((id) => {
      gsap.from(`#${id}`, {
        x: "-100%",
        duration: 2,
        autoAlpha: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `#${id}`,
          start: "top 100%",
          end: "bottom 20%",
          scrub: 1,
        }
      });
    });
  }, []);

  useEffect(() => {
      const cards = document.querySelectorAll<HTMLElement>(".js-card");
      //windowのサイズを取得
      const windowWidth = window.innerWidth;
      if (cards.length > 0 && windowWidth > 768) {
        VanillaTilt.init(Array.from(cards), {
          max: 25,
          speed: 400,
          easing: "cubic-bezier(.03,.98,.52,.99)",
        });
      }
    }, []);
  return (
    <main className="flex min-h-screen flex-col items-center">

      <article id="mv" className="h-screen w-full p-3 md:p-6">
        <section className="w-full h-full">
          <div className="w-full h-full flex items-center justify-center flex-col">
            <h1 className='w-[90%] md:w-[60%]'>
              <Image src={mvImage} alt="モーショングラフィックス" priority />
            </h1>
            <div className="mt-[10%]">
              <Scroll to="anch-01" className="z-10 relative cursor-pointer text-white text-[30px] md:text-[60px] font-bold transition-opacity hover:opacity-70" aria-label="最初のスライドへ" smooth={true}>Scroll</Scroll>
              <div className="arrow-container">
                <div className="arrow"></div>
                <div className="arrow"></div>
                <div className="arrow"></div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <article className="relative flex justify-between max-w-7xl w-full h-full mx-auto pb-[100px]">
        <section className="toc-area w-full md:pt-[100px]">
            <section className="w-full min-h-screen px-3 md:px-8 py-12 md:py-24">
              <div id="sec-01" className="w-hull h-full p-[20px] md:p-[40px] bg-white backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[10px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="anch-01" className='font-bold text-[24px] md:text-[45px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[20px] md:mb-[40px]'>モーショングラフィックスとは？</h2>
                <p className="text-[16px] md:text-[20px] font-bold">「モーション」・・・動きのこと</p>
                <p className="text-[16px] md:text-[20px] font-bold">「グラフィックス」・・・画像やテキストを使った視覚表現</p>
                <br/>
                <p className="text-[16px] md:text-[20px] font-bold">→ その二つの単語を組み合わせた「モーショングラフィックス」</p>
                <br/>
                <p className="text-[16px] md:text-[24px] font-bold text-[#f9c737]">動きを加えたイラストや、実写やテキストを組み合わせた映像のこと</p>
                <br/>
                <br/>
              </div>
              <AnchorNext nextTarget="anch-02"/>
            </section>

            <section className="w-full min-h-screen px-3 md:px-8 py-12 md:py-24">
              <div id="sec-02" className="w-hull h-full p-[20px] md:p-[40px] bg-white backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[10px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="anch-02" className='font-bold text-[24px] md:text-[40px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[20px] md:mb-[40px]'>こんなWebサイトを見たことはありませんか？</h2>
                <p className="text-[16px] md:text-[20px] font-bold"><a href="https://www.yuridenki.co.jp/" className="underline text-[#f9c737] hover:no-underline" target="_blank">株式会社ユリ電気商会</a></p>
                <br/>
                <br/>
                <br/>
                <p className="text-[16px] md:text-[20px] font-bold">ユーザーのアクション（クリックなど）に応じて、アニメーションする場合も</p>
                <p className="text-[16px] md:text-[20px] font-bold">こんなUIよくありますよね！</p>
                <LottieHeart />
              </div>
              <AnchorSection prevTarget="anch-01" nextTarget="anch-03"/>
            </section>

            <section className="w-full min-h-screen px-3 md:px-8 py-12 md:py-24">
              <div id="sec-03" className="js-card w-hull h-full p-[20px] md:p-[40px] bg-[rgba(255,255,255,1)] backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[10px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="anch-03" className='font-bold text-[24px] md:text-[40px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[20px] md:mb-[40px]'>アニメーションを実装するために</h2>
                <ul className="text-[16px] md:text-[20px] font-bold">
                  <li className="pl-[16px] md:pl-[20px] indent-[-16px] md:indent-[-20px]">・CSSのkeyframeを使用して</li>
                  <li className="pl-[16px] md:pl-[20px] indent-[-16px] md:indent-[-20px]">・JavaScript・JavaScriptのアニメーションライブラリなどを使用して</li>
                  <li className="pl-[16px] md:pl-[20px] indent-[-16px] md:indent-[-20px]">・Adobe After Effectsなどのデザインツールを使用して</li>
                </ul>
              </div>
              <AnchorSection prevTarget="anch-02" nextTarget="anch-04"/>
            </section>

            <section className="w-full min-h-screen px-3 md:px-8 py-12 md:py-24">
              <div id="sec-04" className="w-hull h-full p-[20px] md:p-[40px] bg-[rgba(255,255,255,1)] backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[10px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="anch-04" className='font-bold text-[24px] md:text-[60px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[20px] md:mb-[40px]'>Section 4</h2>
                <LottieWakuwaku />
                <p className="text-[16px] md:text-[18px]">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
              </div>
              <AnchorPrevTop prevTarget="anch-03" mvTarget="mv"/>
            </section>
          
        </section>
      </article>

      <div className="fixed w-full h-screen z-[-1] bg-wrap">
        <div className="bg bg--1"></div>
        <div className="bg bg--2"></div>
      </div>

    </main>
  )
}
