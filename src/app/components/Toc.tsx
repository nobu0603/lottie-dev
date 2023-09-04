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
    <div className='relative w-[30%]'>
      {/* <p className=""></p> */}
      <nav className="toc sticky top-[100px] right-0" />
      <style jsx global>{`
        .toc {
          border-radius: 0.25rem;
          padding: 1rem;
          font-size: 1rem;
        }

        .toc-list .toc-list {
          padding-left: 1rem;
          padding-top: 0.5rem;
        }

        .toc-list-item {
          padding-bottom: 0.5rem;
        }

        .toc-list-item:last-child {
          padding-bottom: 0;
        }

        .toc-link {
          color: rgba(156, 163, 175, 0.7);
        }

        .is-active-link {
          color: #282828;
          font-weight: 700;
        }
      `}</style>
    </div>
  )
}

export default Toc