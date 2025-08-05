import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
//background-image: linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);

gsap.registerPlugin(ScrollTrigger)

function Nav() {
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (navRef.current) {
      ScrollTrigger.create({
        start: 500,
        end: 99999,
        onEnter: () => {
          gsap.to(navRef.current, {
            y: -40,
            opacity: 0,
            duration: 0.3,
            pointerEvents: 'none'
          })
        },
        onLeaveBack: () => {
          gsap.to(navRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            pointerEvents: 'auto'
          })
        }
      })
    }
  }, [])

  return (
    <div
      style={{
        backgroundColor: '#fdfbfb',
        backgroundBlendMode: 'multiply',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1caca' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")"
      }}
      ref={navRef}
      className="relative z-50 flex h-16 w-screen items-center rounded-none border-b border-black p-2"
    >
      <div className="flex w-full justify-between">
        <div className="flex gap-2">
          <button className="flex items-center justify-center bg-transparent px-4 py-2 font-bold transition-all duration-300 [font-size:clamp(0.5rem,2vw,2rem)]">
            Home
          </button>
          <button className="flex items-center justify-center bg-transparent px-4 py-2 font-bold transition-all duration-300 [font-size:clamp(0.5rem,2vw,2rem)]">
            About
          </button>
        </div>

        <button className="flex items-center justify-center bg-transparent px-4 py-2 pr-8 font-bold transition-all duration-300 [font-size:clamp(0.5rem,2vw,2rem)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 sm:size-7 md:size-8 lg:size-9 xl:size-10 2xl:size-12"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Nav
