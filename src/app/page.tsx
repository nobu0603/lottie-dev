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
        // scale: 0.8,
        // duration: 1,
        x: "-100%",
        duration: 1,
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

  return (
    <main className="flex min-h-screen flex-col items-center">

      <article className="h-screen w-full p-3 md:p-6">
        <section>
          <div>
            <h1 className='text-[60px]'>デザイン講座 〜アニメーション編〜</h1>
          </div>
        </section>
      </article>

      <article className="relative flex justify-between max-w-7xl w-full h-full mx-auto">
        <section className="toc-area w-full md:w-[75%]">
            <section className="w-full h-screen">
              <div id="sec-01" className="p-3 md:p-6">
                <h2 id="Lottie-Area" className='text-[60px] py-[40px]'>Lottie Area</h2>
                <LottieWakuwaku />
                <p className="text-[18px]">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
              </div>
            </section>

            <section className="w-full h-screen">
              <div id="sec-02" className="p-3 md:p-6">
                <h2 id="Section-2" className='text-[60px] py-[40px]'>Section 2</h2>
                <LottieHeart />
                <p className="text-[18px]">テキストが入ります。テキストが入ります。</p>
              </div>
            </section>

            <section className="w-full h-screen">
              <div id="sec-03" className="p-3 md:p-6">
                <h2 id="Section-3" className='text-[60px] py-[40px]'>Section 3</h2>
                <LottieWakuwaku />
                <p className="text-[18px]">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
              </div>
            </section>

            <section className="w-full h-screen">
              <div id="sec-04" className="p-3 md:p-6">
                <h2 id="Section-4" className='text-[60px] py-[40px]'>Section 4</h2>
                <LottieWakuwaku />
                <p className="text-[18px]">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
              </div>
            </section>
          
        </section>

        <Toc />
      </article>

    </main>
  )
}
