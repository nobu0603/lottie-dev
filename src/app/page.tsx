"use client"
import LottieHeart from "./components/LottieHeart";
import LottieWakuwaku from "./components/LottieWakuwaku";
import Toc from "./components/Toc";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    const ids = ['sec-01', 'sec-02', 'sec-03', 'sec-04'];
    
    ids.forEach((id) => {
      gsap.from(`#${id}`, {
        scale: 0.8,
        autoAlpha: 0,
        duration: 1,
        scrollTrigger: {
          trigger: `#${id}`,
          start: "top 80%",
          end: "bottom 10%",
          scrub: 1,
        }
      });
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24">

      <article className="h-screen w-full">
        <section>
          <div>
            <h1 className='text-[60px]'>デザイン講座 〜アニメーション編〜</h1>
          </div>
        </section>
      </article>

      <article className="relative flex justify-between max-w-7xl w-full h-full mx-auto">
        <section className="toc-area w-[65%]">
            <section id="sec-01" className="min-h-screen">
              <h2 id="Lottie-Area" className='text-[60px] py-[100px]'>Lottie Area</h2>
              <LottieWakuwaku />
              <p className="text-[18px]">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
            </section>

            <section id="sec-02" className="min-h-screen">
              <h2 id="Section-2" className='text-[60px] py-[100px]'>Section 2</h2>
              <LottieHeart />
              <p className="text-[18px]">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
            </section>

            <section id="sec-03" className="min-h-screen">
              <h2 id="Section-3" className='text-[60px] py-[100px]'>Section 3</h2>
              <LottieWakuwaku />
              <p className="text-[18px]">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
            </section>

            <section id="sec-04" className="min-h-screen">
              <h2 id="Section-4" className='text-[60px] py-[100px]'>Section 4</h2>
              <LottieWakuwaku />
              <p className="text-[18px]">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
            </section>
          
        </section>

        <Toc />
      </article>

    </main>
  )
}
