"use client"
import LottieHeart from "./components/LottieHeart";
import LottieWakuwaku from "./components/LottieWakuwaku";
import LottieWakuwakuBeta from "./components/LottieWakuwakuBeta";
import LottieAnimationNum1 from "./components/LottieAnimationNum1";
import LottieAnimationNum2 from "./components/LottieAnimationNum2";
import LottieAnimationNum3 from "./components/LottieAnimationNum3";
import LottieAnimationNum4 from "./components/LottieAnimationNum4";
import LottieAnimationNum5 from "./components/LottieAnimationNum5";
import { use, useEffect } from "react";
import Image from 'next/image';
import mvImage from '../../public/images/text_mv.svg';
import linkNoImage from '../../public/images/image_notfound.jpg';
import wakuwakuImage from '../../public/images/wakuwaku.svg';
import flowImage from '../../public/images/img_flow.png';
import flowImage01 from '../../public/images/img_flow_01.png';
import flowImage02 from '../../public/images/img_flow_02.png';
import flowImage03 from '../../public/images/img_flow_03.png';
import flowImage04 from '../../public/images/img_flow_04.png';
import flowImage05 from '../../public/images/img_flow_05.png';
import flowImage06 from '../../public/images/img_flow_06.png';
import flowImage07 from '../../public/images/img_flow_07.png';
import flowImage08 from '../../public/images/img_flow_08.png';
import flowImage09 from '../../public/images/img_flow_09.png';
import VanillaTilt from 'vanilla-tilt';
import { Link as Scroll } from 'react-scroll'
import AnchorSection from "./components/AnchorSection";
import AnchorNext from "./components/AnchorNext";
import AnchorPrevTop from "./components/AnchorPrevTop";

export default function Home() {

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

      <article id="mv" className="h-screen w-full p-3 md:p-6 bg-[#0051e0]">
        <section className="w-full h-full">
          <div className="w-full h-full flex items-center justify-center flex-col">
            <h1 className='w-[90%] md:w-[60%]'>
              <Image src={mvImage} alt="モーショングラフィックス" priority />
            </h1>
            <div className="mt-[10%]">
              <Scroll to="anch-01" className="z-10 relative cursor-pointer text-white text-[20px] md:text-[40px] font-bold transition-opacity hover:opacity-70" aria-label="最初のスライドへ" smooth={true}>Scroll</Scroll>
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

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorNext nextTarget="anch-02"/>
              <div id="sec-01" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-01" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>モーショングラフィックスとは？</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <p className="text-[16px] md:text-[30px] font-bold">「モーション」・・・動きのこと</p>
                <p className="text-[16px] md:text-[30px] font-bold">「グラフィックス」・・・画像やテキストを使った視覚表現</p>
                <br/>
                <br/>
                <p className="text-[16px] md:text-[30px] font-bold text-[#ed4141]">動きを加えたイラストや、実写やテキストを組み合わせた映像のこと</p>
                <br/>
                <br/>
                <LottieAnimationNum2 />
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-01" nextTarget="anch-03"/>
              <div id="sec-02" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-02" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>実例紹介</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <p className="text-[16px] md:text-[30px] font-bold mb-[30px]">実際にモーショングラフィックスが使われているWebサイト</p>
                <a href="https://lottiefiles.com/jp/" target="_blank" rel="noreferrer" className="block mb-[20px] lg:mb-[40px] lg:hover:opacity-70 transition-opacity">
                  <div className="linkCard w-full h-[100px] lg:h-[150px] flex dark:bg-[#333] rounded-md border border-gray-200 dark:border-[#E5E8EC] overflow-hidden">
                    <img className="w-[30%] object-cover" src="https://stp-v4-cdn.lottiefiles.com/og_118_735d54b39c.png" alt="LottieFiles: ウェブサイト＆アプリ用の軽量アニメーションを無料でダウンロード。" />
                    <div className="w-[70%] py-4 px-3 border-l border-gray-200 dark:border-[#E5E8EC]">
                        <p className="font-bold text-[14px] md:text-[20px] mb-[5px] md:mb-[10px] line-clamp-2">LottieFiles: ウェブサイト＆アプリ用の軽量アニメーションを無料でダウンロード。</p>
                        <p className="line-clamp-1 md:line-clamp-2 text-[12px] md:text-[14px]">無料で最軽量の、すぐに使えるモーショングラフィックスを、ウェブやアプリ、ソーシャルメディアやデザイン向けに簡単に提供します。Lottieのアニメーションは、作成から編集、テスト、共同作業、そして配信ま</p>
                    </div>
                  </div>
                </a>
                <a href="https://www.yuridenki.co.jp/" target="_blank" rel="noreferrer" className="block mb-[40px] lg:mb-[60px] lg:hover:opacity-70 transition-opacity">
                  <div className="linkCard w-full h-[100px] lg:h-[150px] flex dark:bg-[#333] rounded-md border border-gray-200 dark:border-[#E5E8EC] overflow-hidden">
                    <Image src={linkNoImage} alt="株式会社ユリ電気商会" className="w-[30%] object-cover" priority />
                    <div className="w-[70%] py-4 px-3 border-l border-gray-200 dark:border-[#E5E8EC]">
                      <p className="font-bold text-[14px] md:text-[20px] mb-[5px] md:mb-[10px] line-clamp-2">株式会社ユリ電気商会</p>
                      <p className="line-clamp-1 md:line-clamp-2 text-[12px] md:text-[14px]">1951年創業。町の電気屋さんから始まったユリ電気商会は電気工事事業への進出、道路・プラント機器の商社と発展を遂げてまいりました。2023年にエンベデッド製品事業部・横浜営業所を開設しました。</p>
                    </div>
                  </div>
                </a>
                <p className="text-[16px] md:text-[30px] font-bold">ユーザーのアクション（クリックなど）に応じて、アニメーションする場合も</p>
                <LottieHeart />
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-02" nextTarget="anch-04"/>
              <div id="sec-03" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-03" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>モーショングラフィックスのメリット</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <ul className="text-[16px] md:text-[30px] font-bold mb-[40px] md:mb-[60px]">
                  <li className="pl-[16px] md:pl-[30px] indent-[-16px] md:indent-[-30px] mb-[10px] md:mb-[20px]">・<span className="text-[#ed4141]">情報を正確</span>に伝えることができる。</li>
                  <li className="pl-[16px] md:pl-[30px] indent-[-16px] md:indent-[-30px] mb-[10px] md:mb-[20px]">・<span className="text-[#ed4141]">印象</span>に残りやすい。</li>
                  <li className="pl-[16px] md:pl-[30px] indent-[-16px] md:indent-[-30px] mb-[10px] md:mb-[20px]">・<span className="text-[#ed4141]">表現の幅</span>が広がる。</li>
                  <li className="pl-[16px] md:pl-[30px] indent-[-16px] md:indent-[-30px] mb-[10px] md:mb-[20px]">・<span className="text-[#ed4141]">制作コスト</span>が比較的安い。</li>
                </ul>
                <LottieAnimationNum5 />
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-03" nextTarget="anch-05"/>
              <div id="sec-04" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-04" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>モーショングラフィックスを実装するために</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <ul className="text-[16px] md:text-[30px] font-bold mb-[40px] md:mb-[60px]">
                  <li className="pl-[16px] md:pl-[30px] indent-[-16px] md:indent-[-30px] mb-[10px] md:mb-[20px]">・<span className="text-[#ed4141]">CSS</span>のkeyframeを使用して</li>
                  <li className="pl-[16px] md:pl-[30px] indent-[-16px] md:indent-[-30px] mb-[10px] md:mb-[20px]">・<span className="text-[#ed4141]">JavaScript</span>・JavaScriptのアニメーションライブラリなどを使用して</li>
                  <li className="pl-[16px] md:pl-[30px] indent-[-16px] md:indent-[-30px] mb-[10px] md:mb-[20px]">・<span className="text-[#ed4141]">Adobe After Effects・Figma</span>などのデザインツールを使用して</li>
                </ul>
                <p className="text-[16px] md:text-[30px] font-bold">今回は<span className="text-[#ed4141]">Adobe After Effects</span>にフォーカスして、アニメーションを作る部分を重点的に紹介します。</p>
                <LottieAnimationNum3 />
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-04" nextTarget="anch-06"/>
              <div id="sec-05" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-05" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>Adobe After Effectsを使用した実装フロー</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <Image src={flowImage} alt="Adobe After Effectsを使用した実装フロー" className="w-full md:w-[60%] mx-auto mb-[40px] md:mb-[60px]" priority />
                <p className="text-[16px] md:text-[30px] font-bold"></p>
                <ol className="text-[16px] md:text-[30px] font-bold">
                  <li className="pl-[16px] md:pl-[30px] indent-[-16px] md:indent-[-30px] mb-[10px] md:mb-[20px]">
                    <span className="text-[#ed4141]">1.</span>Illustratorなどのデザインツールで、イラストを準備する。
                  </li>
                  <li className="pl-[16px] md:pl-[30px] indent-[-16px] md:indent-[-30px] mb-[10px] md:mb-[20px]">
                    <span className="text-[#ed4141]">2.</span>After Effectsを使用してイラストにアニメーションをつける。
                  </li>
                  <li className="pl-[16px] md:pl-[30px] indent-[-16px] md:indent-[-30px] mb-[10px] md:mb-[20px]">
                    <span className="text-[#ed4141]">3.</span>2.で作成したアニメーションをJSON形式で書き出して、JavaScriptのライブラリであるLottieを使用してWebサイトに実装する。
                  </li>
                </ol>
                <LottieAnimationNum4 />
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-05" nextTarget="anch-07"/>
              <div id="sec-06" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-06" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>実際にアニメーションを作成してみよう</h2>
                <hr className="border-b border-[#1A4776] mb-[40px] md:mb-[80px]" />
                <Image src={wakuwakuImage} alt="ワクワク" className="w-[70%] mx-auto mb-[50px] md:mb-[80px]" priority />
                <p className="text-[16px] md:text-[30px] font-bold">上の画像に動きをつけて、より”わくわく感”を表現してみようと思います！</p>
                <br/>
                <p className="text-[16px] md:text-[30px] font-bold mt-[20px] md:mt-[40px]">参考教材</p>
                <a href="https://youtu.be/ENaiD-U31mo?si=XZvCbQdqXmTBAkxk" target="_blank" rel="noreferrer" className="block mb-[20px] lg:mb-[40px] lg:hover:opacity-70 transition-opacity">
                  <div className="linkCard w-full h-[100px] lg:h-[150px] flex bg-white dark:bg-[#333] rounded-md border border-gray-200 dark:border-[#E5E8EC] overflow-hidden">
                    <img  className="w-[30%] object-cover" src="https://i.ytimg.com/vi/ENaiD-U31mo/maxresdefault.jpg" alt="09 楽【おもいをつたえるテキストアニメーション】" />
                      <div className="w-[70%] py-4 px-3 border-l border-gray-200 dark:border-[#E5E8EC]">
                        <p className="hdg-3 line-clamp-2">09 楽【おもいをつたえるテキストアニメーション】</p>
                        <p className="line-clamp-2">▶︎Video Salonhttps://videosalon.jp/▶︎リンクweb: http://mooograph.com/Twitter: https://twitter.com/mooog</p>
                      </div>
                  </div>
                </a>
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-06" nextTarget="anch-08"/>
              <div id="sec-07" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-07" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>完成形はこちら</h2>
                <hr className="border-b border-[#1A4776] mb-[40px] md:mb-[80px]" />
                <LottieWakuwaku />
                <p className="text-[16px] md:text-[30px] font-bold"><span className="text-[#ed4141]">回転</span>アニメーションと<span className="text-[#ed4141]">拡大縮小</span>アニメーションの組み合わせ</p>
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-07" nextTarget="anch-09"/>
              <div id="sec-08" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-08" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>After Effectsで画像ファイルを開く</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <Image src={flowImage01} alt="画像ファイルを開く" className="w-full md:w-[80%] mx-auto mb-[40px] md:mb-[60px]" priority />
                <p className="text-[16px] md:text-[30px] font-bold">実際にAfter Effects上でファイルを開くと上図のようになります。</p>
                <p className="text-[16px] md:text-[30px] font-bold"><span className="text-[#ed4141]">赤枠内</span>を操作してアニメーションを作っていきます。</p>
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-08" nextTarget="anch-10"/>
              <div id="sec-09" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-09" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>アンカーポイントを設定する</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <Image src={flowImage02} alt="アンカーポイントを設定する" className="w-[40%] mx-auto mb-[40px] md:mb-[60px]" priority />
                <p className="text-[16px] md:text-[30px] font-bold">対象物（ここでは「わ」）をどこを起点にアニメーションさせたいのかを決めます。</p>
                <p className="text-[16px] md:text-[30px] font-bold">今回は全ての文字に対して、アンカーポイントを中央下部に設定しました。</p>
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-09" nextTarget="anch-11"/>
              <div id="sec-10" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-10" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>①左右に回転するアニメーションを実装する</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <Image src={flowImage03} alt="アニメーションを実装する" className="w-full md:w-[80%] mx-auto mb-[40px] md:mb-[60px]" priority />
                <p className="text-[16px] md:text-[30px] font-bold">初期表示（0秒時点）として、アンカーポイントを起点に左に8度回転させます。</p>
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-10" nextTarget="anch-12"/>
              <div id="sec-11" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-11" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>②左右に回転するアニメーションを実装する</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <Image src={flowImage04} alt="アニメーションを実装する" className="w-full md:w-[80%] mx-auto mb-[40px] md:mb-[60px]" priority />
                <p className="text-[16px] md:text-[30px] font-bold">8フレーム後にアンカーポイントを起点に右に8度回転させます。<br/>ここでは1秒が30（29.97）フレーム）なので、1フレームは約0.03秒になります。</p>
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-11" nextTarget="anch-13"/>
              <div id="sec-12" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-12" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>③左右に回転するアニメーションを実装する</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <Image src={flowImage05} alt="アニメーションを実装する" className="w-full md:w-[80%] mx-auto mb-[40px] md:mb-[60px]" priority />
                <ol className="text-[16px] md:text-[30px] font-bold mb-[40px] md:mb-[60px]">
                  <li className="pl-[16px] md:pl-[30px] indent-[-16px] md:indent-[-30px] mb-[10px] md:mb-[20px]">
                  <span className="text-[#ed4141]">1.</span>0~8フレームの間に、左8度から右8度に回転
                  </li>
                  <li className="pl-[16px] md:pl-[30px] indent-[-16px] md:indent-[-30px] mb-[10px] md:mb-[20px]">
                  <span className="text-[#ed4141]">2.</span>8~18フレームの間は、右8度のまま
                  </li>
                  <li className="pl-[16px] md:pl-[30px] indent-[-16px] md:indent-[-30px] mb-[10px] md:mb-[20px]">
                  <span className="text-[#ed4141]">3.</span>18~26フレームの間に、右8度から左8度に回転
                  </li>
                  <li className="pl-[16px] md:pl-[30px] indent-[-16px] md:indent-[-30px] mb-[10px] md:mb-[20px]">
                  <span className="text-[#ed4141]">4.</span>26~36フレームの間は、左8度のまま
                  </li>
                </ol>
                <p className="text-[16px] md:text-[30px] font-bold">アニメーションにイージング（動きの加減速）をつけたため、アイコンが砂時計のマークになっている。</p>
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-12" nextTarget="anch-14"/>
              <div id="sec-13" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-13" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>④左右に回転するアニメーションを実装する</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <p className="text-[16px] md:text-[30px] font-bold">ここまでのアニメーションを確認する。</p>
                <LottieWakuwakuBeta />
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-13" nextTarget="anch-15"/>
              <div id="sec-14" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-14" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>①拡大縮小アニメーションを実装する</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <Image src={flowImage06} alt="アニメーションを実装する" className="w-full md:w-[80%] mx-auto mb-[40px] md:mb-[60px]" priority />
                <p className="text-[16px] md:text-[30px] font-bold">今回は「スケール」の項目を変化させて、アニメーションを実装していきます。</p>
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-14" nextTarget="anch-16"/>
              <div id="sec-15" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-15" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>②拡大縮小アニメーションを実装する</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <Image src={flowImage07} alt="アニメーションを実装する" className="w-full md:w-[80%] mx-auto mb-[40px] md:mb-[60px]" priority />
                <p className="text-[16px] md:text-[30px] font-bold">4フレーム・・・<br/>「わ」の幅（X軸）を90%、高さ（Y軸）を110%<br/>「わ」がちょうどまっすぐになるタイミングで細長くする。</p>
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-15" nextTarget="anch-17"/>
              <div id="sec-16" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-16" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>③拡大縮小アニメーションを実装する</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <Image src={flowImage08} alt="アニメーションを実装する" className="w-full md:w-[80%] mx-auto mb-[40px] md:mb-[60px]" priority />
                <p className="text-[16px] md:text-[30px] font-bold">8フレーム・・・<br/>「わ」の幅（X軸）を110%、高さ（Y軸）を90%<br/>「わ」が右に8度回転するタイミングで潰れたようにする。</p>
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-16" nextTarget="anch-18"/>
              <div id="sec-17" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-17" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>④拡大縮小アニメーションを実装する</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <Image src={flowImage09} alt="アニメーションを実装する" className="w-full md:w-[80%] mx-auto mb-[40px] md:mb-[60px]" priority />
                <p className="text-[16px] md:text-[30px] font-bold">8フレーム〜18フレームまでは、「わ」が右に8度回転している状態</p>
                <br/>
                <p className="text-[16px] md:text-[30px] font-bold">12フレーム・・・<br/>「わ」の幅（X軸）を95%、高さ（Y軸）を105%<br/>潰れた状態から細長くする。</p>
                <br/>
                <p className="text-[16px] md:text-[30px] font-bold">16フレーム・・・<br/>「わ」の幅（X軸）を105%、高さ（Y軸）を95%<br/>細長い状態から潰れたようにする。</p>
                <br/>
                <p className="text-[16px] md:text-[30px] font-bold">上記のアニメーションを左に傾いた時にも同様に繰り返す。</p>
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorSection prevTarget="anch-17" nextTarget="anch-19"/>
              <div id="sec-18" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-18" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>完成</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <p className="text-[16px] md:text-[30px] font-bold">回転と拡大縮小のアニメーションを合わせて完成です！</p>
                <LottieWakuwaku />
              </div>
            </section>

            <section className="w-full min-h-screen pl-0 pr-3 md:px-8 py-12 md:py-24 mb-[300px]">
              <AnchorPrevTop prevTarget="anch-18" mvTarget="mv"/>
              <div id="sec-19" className="w-hull h-full p-[20px] md:p-[40px]">
                <h2 id="anch-19" className='font-bold text-[24px] md:text-[50px] pt-[48px] md:pt-[96px] mt-[-48px] md:mt-[-96px] mb-[5px]'>まとめ</h2>
                <hr className="border-b border-[#1A4776] mb-[20px] md:mb-[40px]" />
                <p className="text-[16px] md:text-[30px] font-bold"></p>
                <LottieAnimationNum1 />
              </div>
            </section>
          
        </section>
      </article>

    </main>
  )
}
