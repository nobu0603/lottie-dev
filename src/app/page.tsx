"use client"
import LottieHeart from "./components/LottieHeart";
import LottieWakuwaku from "./components/LottieWakuwaku";
import Toc from "./components/Toc";
import { use, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    const ids = ['sec-01', 'sec-02', 'sec-03', 'sec-04'];
    
    ids.forEach((id) => {
      gsap.from(`#${id}`, {
        // scale: 0.8,
        // duration: 1,
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
      if (cards.length > 0) {
        VanillaTilt.init(Array.from(cards), {
          max: 25,
          speed: 400,
          easing: "cubic-bezier(.03,.98,.52,.99)",
        });
      }
    }, []);
  return (
    <main className="flex min-h-screen flex-col items-center">

      <article className="h-screen w-full p-3 md:p-6 bg-[#0f306d]">
        <section>
          <div>
            <h1 className='text-[24px] md:text-[60px]'>デザイン講座 〜アニメーション編〜</h1>
          </div>
        </section>
      </article>

      <article className="relative flex justify-between max-w-7xl w-full h-full mx-auto pb-[100px]">
        <section className="toc-area w-full md:w-[75%]">
            <section className="w-full md:min-h-screen px-3 md:px-0 py-12 md:py-24">
              <div id="sec-01" className="js-card w-hull h-full p-[20px] md:p-[40px] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[15px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="Lottie-Area" className='text-[24px] md:text-[60px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[20px] md:mb-[40px]'>Lottie Area</h2>
                <LottieWakuwaku />
                <p className="text-[16px] md:text-[18px]">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
              </div>
            </section>

            <section className="w-full md:min-h-screen px-3 md:px-0 py-12 md:py-24">
              <div id="sec-02" className="w-hull h-full p-[20px] md:p-[40px] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[15px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="Section-2" className='text-[24px] md:text-[60px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[20px] md:mb-[40px]'>Section 2</h2>
                <LottieHeart />
                <p className="text-[16px] md:text-[18px]">テキストが入ります。テキストが入ります。</p>
              </div>
            </section>

            <section className="w-full md:min-h-screen px-3 md:px-0 py-12 md:py-24">
              <div id="sec-03" className="js-card js-card w-hull h-full p-[20px] md:p-[40px] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[15px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="Section-3" className='text-[24px] md:text-[60px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[20px] md:mb-[40px]'>Section 3</h2>
                <LottieWakuwaku />
                <p className="text-[16px] md:text-[18px]">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
              </div>
            </section>

            <section className="w-full md:min-h-screen px-3 md:px-0 py-12 md:py-24">
              <div id="sec-04" className="js-card js-card w-hull h-full p-[20px] md:p-[40px] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[15px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="Section-4" className='text-[24px] md:text-[60px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[20px] md:mb-[40px]'>Section 4</h2>
                <LottieWakuwaku />
                <p className="text-[16px] md:text-[18px]">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
              </div>
            </section>
          
        </section>

        <Toc />
      </article>

      <div className="fixed w-full h-screen z-[-1] bg-wrap">
        <div className="bg bg--1"></div>
        <div className="bg bg--2"></div>
      </div>

    </main>
  )
}
