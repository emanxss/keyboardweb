import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

const LoadingScreen = ({ onComplete }: { onComplete?: () => void }) => {
  const loadingRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { width: '0%' },
        {
          width: '100%',
          duration: 1.5,
          ease: 'power4.inOut'
        }
      )
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
      style={{
        backgroundColor: '#000000',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1caca' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")"
      }}
      ref={loadingRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-xl font-bold"
    >
      <div
        ref={barRef}
        className="absolute left-0 top-0 h-4 bg-white bg-[url('data:image/svg+xml,%3Csvg%20width%3D%276%27%20height%3D%276%27%20viewBox%3D%270%200%206%206%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27%23d1caca%27%20fill-opacity%3D%270.4%27%20fill-rule%3D%27evenodd%27%3E%3Cpath%20d%3D%27M5%200h1L0%206V5zM6%205v1H5z%27/%3E%3C/g%3E%3C/svg%3E')]"
        style={{ width: '0%' }}
      />
    </div>
  )
}

export default LoadingScreen
