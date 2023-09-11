"use client"
import LottieHeart from "./components/LottieHeart";
import LottieWakuwaku from "./components/LottieWakuwaku";
import { use, useEffect } from "react";
import Image from 'next/image';
import mvImage from '../../public/images/text_mv.svg';
import linkNoImage from '../../public/images/image_notfound.jpg';
import wakuwakuImage from '../../public/images/wakuwaku.svg';
import flowImage01 from '../../public/images/img_flow_01.png';
import flowImage02 from '../../public/images/img_flow_02.png';
import flowImage03 from '../../public/images/img_flow_03.png';
import flowImage04 from '../../public/images/img_flow_04.png';
import flowImage05 from '../../public/images/img_flow_05.png';
import flowImage06 from '../../public/images/img_flow_06.png';
import flowImage07 from '../../public/images/img_flow_07.png';
import flowImage08 from '../../public/images/img_flow_08.png';
import flowImage09 from '../../public/images/img_flow_09.png';
import flowImage10 from '../../public/images/img_flow_10.png';
import flowImage11 from '../../public/images/img_flow_11.png';
import flowImage12 from '../../public/images/img_flow_12.png';
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
    const ids = ['sec-01', 'sec-02', 'sec-03', 'sec-04', 'sec-05', 'sec-06', 'sec-07', 'sec-08'];
    
    ids.forEach((id) => {
      gsap.from(`#${id}`, {
        x: "-100%",
        duration: 2,
        autoAlpha: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `#${id}`,
          start: "top 100%",
          end: "bottom 80%",
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
                <h2 id="anch-01" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px]'>モーショングラフィックスとは？</h2>
                <hr className="border-b border-[#1a4776] mb-[20px] md:mb-[40px]" />
                <p className="text-[20px] md:text-[30px] font-bold">「モーション」・・・動きのこと</p>
                <p className="text-[20px] md:text-[30px] font-bold">「グラフィックス」・・・画像やテキストを使った視覚表現</p>
                <br/>
                <p className="text-[20px] md:text-[30px] font-bold">その二つの単語を組み合わせたものが「モーショングラフィックス」</p>
                <br/>
                <p className="text-[20px] md:text-[30px] font-bold text-[#ed4141]">動きを加えたイラストや、実写やテキストを組み合わせた映像のこと</p>
                <br/>
                <br/>
              </div>
              <AnchorNext nextTarget="anch-02"/>
            </section>

            <section className="w-full min-h-screen px-3 md:px-8 py-12 md:py-24">
              <div id="sec-02" className="w-hull h-full p-[20px] md:p-[40px] bg-white backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[10px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="anch-02" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px]'>実例紹介</h2>
                <hr className="border-b border-[#1a4776] mb-[20px] md:mb-[40px]" />
                <p className="text-[20px] md:text-[30px] font-bold mb-[30px]">実際にモーショングラフィックスが使われているWebサイト</p>
                <a href="https://lottiefiles.com/jp/" target="_blank" rel="noreferrer" className="block mb-[20px] lg:mb-[40px] lg:hover:opacity-70 transition-opacity">
                  <div className="linkCard w-full h-[100px] lg:h-[150px] flex bg-white dark:bg-[#333] rounded-md border border-gray-200 dark:border-[#E5E8EC] overflow-hidden">
                    <img className="w-[30%] object-cover" src="https://stp-v4-cdn.lottiefiles.com/og_118_735d54b39c.png" alt="LottieFiles: ウェブサイト＆アプリ用の軽量アニメーションを無料でダウンロード。" />
                    <div className="w-[70%] py-4 px-3 border-l border-gray-200 dark:border-[#E5E8EC]">
                        <p className="font-bold text-[14px] md:text-[20px] mb-[5px] md:mb-[10px] line-clamp-2">LottieFiles: ウェブサイト＆アプリ用の軽量アニメーションを無料でダウンロード。</p>
                        <p className="line-clamp-1 md:line-clamp-2 text-[12px] md:text-[14px]">無料で最軽量の、すぐに使えるモーショングラフィックスを、ウェブやアプリ、ソーシャルメディアやデザイン向けに簡単に提供します。Lottieのアニメーションは、作成から編集、テスト、共同作業、そして配信ま</p>
                    </div>
                  </div>
                </a>
                <a href="https://www.yuridenki.co.jp/" target="_blank" rel="noreferrer" className="block mb-[40px] lg:mb-[60px] lg:hover:opacity-70 transition-opacity">
                  <div className="linkCard w-full h-[100px] lg:h-[150px] flex bg-white dark:bg-[#333] rounded-md border border-gray-200 dark:border-[#E5E8EC] overflow-hidden">
                    <Image src={linkNoImage} alt="株式会社ユリ電気商会" className="w-[30%] object-cover" priority />
                    <div className="w-[70%] py-4 px-3 border-l border-gray-200 dark:border-[#E5E8EC]">
                      <p className="font-bold text-[14px] md:text-[20px] mb-[5px] md:mb-[10px] line-clamp-2">株式会社ユリ電気商会</p>
                      <p className="line-clamp-1 md:line-clamp-2 text-[12px] md:text-[14px]">1951年創業。町の電気屋さんから始まったユリ電気商会は電気工事事業への進出、道路・プラント機器の商社と発展を遂げてまいりました。2023年にエンベデッド製品事業部・横浜営業所を開設しました。</p>
                    </div>
                  </div>
                </a>
                <p className="text-[20px] md:text-[30px] font-bold">ユーザーのアクション（クリックなど）に応じて、アニメーションする場合も</p>
                <LottieHeart />
              </div>
              <AnchorSection prevTarget="anch-01" nextTarget="anch-03"/>
            </section>
            

            {/* js-card  */}

            <section className="w-full min-h-screen px-3 md:px-8 py-12 md:py-24">
              <div id="sec-03" className="w-hull h-full p-[20px] md:p-[40px] bg-[rgba(255,255,255,1)] backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[10px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="anch-03" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px]'>モーショングラフィックスのメリット</h2>
                <hr className="border-b border-[#1a4776] mb-[20px] md:mb-[40px]" />
                <ul className="text-[20px] md:text-[30px] font-bold mb-[40px] md:mb-[60px]">
                  <li className="pl-[20px] md:pl-[30px] indent-[-20px] md:indent-[-30px] mb-[10px] md:mb-[20px]">・<span className="text-[#ed4141]">情報を正確に</span>伝えることができる。</li>
                  <li className="pl-[20px] md:pl-[30px] indent-[-20px] md:indent-[-30px] mb-[10px] md:mb-[20px]">・<span className="text-[#ed4141]">印象に残りやすい</span>。</li>
                  <li className="pl-[20px] md:pl-[30px] indent-[-20px] md:indent-[-30px] mb-[10px] md:mb-[20px]">・<span className="text-[#ed4141]">制作コストが比較的安い</span>。</li>
                  <li className="pl-[20px] md:pl-[30px] indent-[-20px] md:indent-[-30px] mb-[10px] md:mb-[20px]">・<span className="text-[#ed4141]">表現の幅が広がる</span>。</li>
                </ul>
              </div>
              <AnchorSection prevTarget="anch-02" nextTarget="anch-04"/>
            </section>

            <section className="w-full min-h-screen px-3 md:px-8 py-12 md:py-24">
              <div id="sec-04" className="w-hull h-full p-[20px] md:p-[40px] bg-[rgba(255,255,255,1)] backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[10px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="anch-04" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px]'>モーショングラフィックスを実装するために</h2>
                <hr className="border-b border-[#1a4776] mb-[20px] md:mb-[40px]" />
                <ul className="text-[20px] md:text-[30px] font-bold mb-[40px] md:mb-[60px]">
                  <li className="pl-[20px] md:pl-[30px] indent-[-20px] md:indent-[-30px] mb-[10px] md:mb-[20px]">・<span className="text-[#ed4141]">CSSのkeyframe</span>を使用して</li>
                  <li className="pl-[20px] md:pl-[30px] indent-[-20px] md:indent-[-30px] mb-[10px] md:mb-[20px]">・<span className="text-[#ed4141]">JavaScript・JavaScriptのアニメーションライブラリ</span>などを使用して</li>
                  <li className="pl-[20px] md:pl-[30px] indent-[-20px] md:indent-[-30px] mb-[10px] md:mb-[20px]">・<span className="text-[#ed4141]">Adobe After Effects・Figmaなどのデザインツール</span>を使用して</li>
                </ul>
                <p className="text-[20px] md:text-[30px] font-bold">今回は<span className="text-[#ed4141]">Adobe After Effects</span>にフォーカスして、アニメーションを作る部分を重点的に紹介します。</p>
              </div>
              <AnchorSection prevTarget="anch-03" nextTarget="anch-05"/>
            </section>

            <section className="w-full min-h-screen px-3 md:px-8 py-12 md:py-24">
              <div id="sec-05" className="w-hull h-full p-[20px] md:p-[40px] bg-[rgba(255,255,255,1)] backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[10px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="anch-05" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px]'>Adobe After Effectsを使用した実装フロー</h2>
                <hr className="border-b border-[#1a4776] mb-[20px] md:mb-[40px]" />
                <p className="text-[16px] md:text-[18px] w-full h-[400px] flex justify-center items-center">フロー図を作成します。</p>
              </div>
              <AnchorSection prevTarget="anch-04" nextTarget="anch-06"/>
            </section>

            <section className="w-full min-h-screen px-3 md:px-8 py-12 md:py-24">
              <div id="sec-06" className="w-hull h-full p-[20px] md:p-[40px] bg-[rgba(255,255,255,1)] backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[10px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="anch-06" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px]'>実際にアニメーションを作成してみよう</h2>
                <hr className="border-b border-[#1a4776] mb-[40px] md:mb-[80px]" />
                <Image src={wakuwakuImage} alt="ワクワク" className="w-[70%] mx-auto mb-[50px] md:mb-[80px]" priority />
                <p className="text-[20px] md:text-[30px] font-bold">上の画像に動きをつけて、より”わくわく感”を表現してみようと思います！</p>
              </div>
              <AnchorSection prevTarget="anch-05" nextTarget="anch-07"/>
            </section>

            <section className="w-full min-h-screen px-3 md:px-8 py-12 md:py-24">
              <div id="sec-07" className="w-hull h-full p-[20px] md:p-[40px] bg-[rgba(255,255,255,1)] backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[10px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="anch-07" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px]'>After Effectsで画像ファイルを開く</h2>
                <hr className="border-b border-[#1a4776] mb-[20px] md:mb-[40px]" />
                <Image src={flowImage01} alt="画像ファイルを開く" className="w-full mx-auto mb-[40px] md:mb-[60px]" priority />
                <p className="text-[20px] md:text-[30px] font-bold">実際にAfter Effects上でファイルを開くと上図のようになります。</p>
                <p className="text-[20px] md:text-[30px] font-bold"><span className="text-[#ed4141]">赤枠内</span>を操作してアニメーションを作っていきます。</p>
              </div>
              <AnchorSection prevTarget="anch-06" nextTarget="anch-08"/>
            </section>

            <section className="w-full min-h-screen px-3 md:px-8 py-12 md:py-24">
              <div id="sec-08" className="w-hull h-full p-[20px] md:p-[40px] bg-[rgba(255,255,255,1)] backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[10px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="anch-08" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px]'>アンカーポイントを設定する</h2>
                <hr className="border-b border-[#1a4776] mb-[20px] md:mb-[40px]" />
                <Image src={flowImage02} alt="アンカーポイントを設定する" className="w-[40%] mx-auto mb-[40px] md:mb-[60px]" priority />
                <p className="text-[20px] md:text-[30px] font-bold">対象物（ここでは「わ」）をどこを起点にアニメーションさせたいのかを決めます。</p>
                <p className="text-[20px] md:text-[30px] font-bold">今回は全ての文字に対して、アンカーポイントを中央下部に設定しました。</p>
              </div>
              <AnchorSection prevTarget="anch-07" nextTarget="anch-09"/>
            </section>

            <section className="w-full min-h-screen px-3 md:px-8 py-12 md:py-24">
              <div id="sec-09" className="w-hull h-full p-[20px] md:p-[40px] bg-[rgba(255,255,255,1)] backdrop-blur-sm border-t border-l border-[rgba(255,255,255,0.2)] rounded-[10px] shadow-[20px_20px_50px_0_rgba(0,0,0,0.5)]">
                <h2 id="anch-09" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px]'>Section 4</h2>
                <hr className="border-b border-[#1a4776] mb-[20px] md:mb-[40px]" />
                <LottieWakuwaku />
                <p className="text-[16px] md:text-[18px]">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
              </div>
              <AnchorPrevTop prevTarget="anch-08" mvTarget="mv"/>
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
