// import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Keyboard() {
  return (
    <div
      style={{
        backgroundColor: '#000000',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1caca' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")"
      }}
      className="relative min-h-screen bg-[#fcfcfc] pb-16 text-white"
    >
      <div className="absolute inset-0">
        {/* Vertical Lines */}
        <div className="absolute inset-y-0 left-[16.66%] w-px bg-white/25"></div>
        <div className="absolute inset-y-0 left-[33.33%] w-px bg-white/25"></div>
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/25"></div>
        <div className="absolute inset-y-0 left-[66.66%] w-px bg-white/25"></div>
        <div className="absolute inset-y-0 left-[83.33%] w-px bg-white/25"></div>
      </div>
    </div>
  )
}

export default Keyboard
