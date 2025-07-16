import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

const LoadingScreen = ({ onComplete }: { onComplete?: () => void }) => {
  const loadingRef = useRef<HTMLDivElement>(null)
  const loadingTextRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split the text into characters
      const split = new SplitText(loadingTextRef.current, { type: 'chars' })

      // Animate each character in
      gsap.from(split.chars, {
        y: -100,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: 'circ.inOut'
      })

      // Animate the loading screen out
      gsap.to(loadingRef.current, {
        y: '-100%',
        duration: 0.8,
        delay: 1.5,
        ease: 'circ.inOut',
        onComplete: () => {
          onComplete?.()
        }
      })
    }, loadingRef)

    return () => ctx.revert()
  }, [onComplete])

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-xl font-bold"
    >
      <h1
        ref={loadingTextRef}
        className="absolute left-5 top-5 text-7xl text-black"
      >
        Loading...
      </h1>
    </div>
  )
}

export default LoadingScreen
