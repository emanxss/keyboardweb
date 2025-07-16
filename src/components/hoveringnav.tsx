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
      gsap.from(navRef.current, {
        y: -40,
        delay: 2.5,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)'
      })

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
      ref={navRef}
      className="fixed left-1/2 top-4 z-50 grid h-16 w-64 -translate-x-1/2 grid-cols-3 rounded-none border-b border-black bg-transparent p-1"
    >
      <button className="flex size-full items-center justify-center bg-transparent transition-all duration-300">
        Home
      </button>
      <button className="flex size-full items-center justify-center bg-transparent transition-all duration-300">
        Buy
      </button>
      <button className="flex size-full items-center justify-center bg-transparent transition-all duration-300">
        About
      </button>
    </div>
  )
}

export default Nav
