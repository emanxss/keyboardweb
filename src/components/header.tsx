import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Header() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        y: 200,
        opacity: '0',

        scrollTrigger: {
          trigger: textRef.current,
          start: 'top top', // starts when header hits top of viewport
          end: 'bottom 10%', // fade finishes after scrolling past header
          scrub: true
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      style={{
        backgroundColor: '#fdfbfb',
        backgroundBlendMode: 'multiply',

        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1caca' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")"
      }}
      className="relative z-30 overflow-hidden bg-[linear-gradient(to_top,#fdfbfb_0%,#ebedee_100%)] text-white"
    >
      <div className="flex h-screen min-h-screen items-center justify-center pt-16">
        <h1
          ref={textRef}
          style={{ fontSize: 'clamp(2rem,5vw,6rem)' }}
          className="m-0 mx-auto block select-none break-words bg-gradient-to-r from-pink-500/40 via-yellow-500/20 to-purple-500/40 bg-clip-text px-4 text-justify font-bold text-transparent"
        >
          Every Keystroke Matters Engineered for Precision Feel the Difference
          Where Performance Meets Craftsmanship Not Just a Keyboard An
          Experience Your Fingers Deserve Better Customize Your Every Move
          Crafted to Click Switches That Speak to You Type Like You Mean It
          Built for Coders Loved by Gamers Sound Feel Satisfaction From Desk to
          Battlefield The Board You’ve Been Waiting For Click with Confidence
          Made for the Makers Silky Smooth Razor Sharp You Control the Feel Not
        </h1>
        {/* Vertical Lines */}
        <div className="absolute inset-y-0 left-[16.66%] w-px bg-black/25"></div>
        <div className="absolute inset-y-0 left-[33.33%] w-px bg-black/25"></div>
        <div className="absolute inset-y-0 left-1/2 w-px bg-black/25"></div>
        <div className="absolute inset-y-0 left-[66.66%] w-px bg-black/25"></div>
        <div className="absolute inset-y-0 left-[83.33%] w-px bg-black/25"></div>
      </div>
    </div>
  )
}

export default Header
