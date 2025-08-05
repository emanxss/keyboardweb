import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const linesRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const featuresContainerRef = useRef<HTMLDivElement>(null)
  const keyboardRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (linesRef.current) {
      gsap.to(linesRef.current.children, {
        backgroundColor: 'rgba(255,255,255,0.25)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 30%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse'
        }
      })
    }

    if (textRef.current) {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 30%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse'
        }
      })
    }
    if (keyboardRef.current) {
      gsap.from(keyboardRef.current, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 30%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse'
        }
      })
    }

    // Animate the features container (icons + text)
    if (featuresContainerRef.current) {
      gsap.from(featuresContainerRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 30%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse'
        }
      })
    }
  }, [])

  return (
    <div
      style={{
        backgroundColor: '#000000',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1caca' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")"
      }}
      ref={sectionRef}
      className="relative min-h-[140vh] bg-[#fcfcfc] pb-16 text-white"
    >
      <h1
        ref={textRef}
        className="mx-auto w-full max-w-screen-xl bg-white bg-[url('data:image/svg+xml,%3Csvg%20width%3D%276%27%20height%3D%276%27%20viewBox%3D%270%200%206%206%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27%23d1caca%27%20fill-opacity%3D%270.4%27%20fill-rule%3D%27evenodd%27%3E%3Cpath%20d%3D%27M5%200h1L0%206V5zM6%205v1H5z%27/%3E%3C/g%3E%3C/svg%3E')] bg-clip-text px-4 text-center font-bold text-transparent [font-size:clamp(2rem,8vw,8rem)]"
      >
        Features
      </h1>

      <div
        ref={featuresContainerRef}
        className="flex items-center justify-center gap-8 pt-16"
      >
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 size-8 sm:size-10 md:size-12 lg:size-14 xl:size-16 2xl:size-20"
          >
            <path
              fillRule="evenodd"
              d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15ZM4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H4.5Z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-center text-white [font-size:clamp(0.5rem,2vw,2rem)]">
            Up to 300 Hours of Battery Life
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mb-4 size-8 sm:size-10 md:size-12 lg:size-14 xl:size-16 2xl:size-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            />
          </svg>
          <h1 className="text-center text-white [font-size:clamp(0.5rem,2vw,2rem)]">
            1000hz Polling Rate
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mb-4 size-8 sm:size-10 md:size-12 lg:size-14 xl:size-16 2xl:size-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h1 className="text-center text-white [font-size:clamp(0.5rem,2vw,2rem)]">
            Fast Actuation Time of 0.2mm
          </h1>
        </div>
      </div>
      <div
        className="absolute inset-0 top-1/3 flex items-center justify-center"
        ref={keyboardRef}
      >
        <img src="/src/assets/keyboard.png" className="h-auto max-w-full" />
      </div>
      <div ref={linesRef} className="absolute inset-0">
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

export default Features

//   className="mx-auto w-full max-w-screen-xl bg-[url('data:image/svg+xml,%3Csvg%20width%3D%276%27%20height%3D%276%27%20viewBox%3D%270%200%206%206%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27%23d1caca%27%20fill-opacity%3D%270.4%27%20fill-rule%3D%27evenodd%27%3E%3Cpath%20d%3D%27M5%200h1L0%206V5zM6%205v1H5z%27/%3E%3C/g%3E%3C/svg%3E')] bg-clip-text px-4 text-center font-bold text-transparent [font-size:clamp(2rem,8vw,8rem)]"
//black text
