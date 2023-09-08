"use client"
import { useEffect } from 'react'
import tocbot from 'tocbot'

const Toc = () => {

  useEffect(() => {
    const item = document.querySelector('.toc') as HTMLElement
    if (!item) {
      return
    }
    item.style.display = 'block'
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.toc-area',
      headingSelector: 'h2',
      hasInnerContainers: true,
    })

    return () => tocbot.destroy()
  }, [])

  return (
    <div className='hidden md:block relative w-[25%] pt-[100px]'>
      {/* <p className=""></p> */}
      <nav className="toc sticky top-[100px] right-0" />
      <style jsx global>{`
        .toc {
          border-radius: 0.25rem;
          padding: 1rem;
          font-size: 2rem;
        }

        .toc-list .toc-list {
          padding-left: 1rem;
          padding-top: 0.5rem;
        }

        .toc-list-item {
          padding-bottom: 0.5rem;
          text-align: right;
        }

        .toc-list-item:last-child {
          padding-bottom: 0;
        }

        .toc-link {
          position: relative;
          color: #333;
          transition: .3s ease;
        }

        .is-active-link {
          color: #fff;
          font-weight: 700;
        }

        .toc-link::before {
          content: '';
          position: absolute;
          top: .8rem;
          left: -1.5rem;
          width: .8rem;
          height: .8rem;
          background-color: #333;
          border-radius: 50%;
          transform-origin: center;
        }

        .toc-link.is-active-link::before {
          transform: scale(1.5);
          background-color: #F9C737;
        }
      `}</style>
    </div>
  )
}

export default Toc