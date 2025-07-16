import { useState, useEffect } from 'react'
import Header from './header'
import Features from './features'
import Footer from './footer'
import LoadingScreen from './loadscreen'
import Nav from './hoveringnav'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      smoothTouch: 0.1
    })
  }, [])

  return (
    <>
      {showLoading && (
        <LoadingScreen onComplete={() => setShowLoading(false)} />
      )}
      <Nav /> {/* Nav outside smooth-wrapper to ensure it sticks to webpage */}
      <div id="smooth-wrapper" className="min-h-screen bg-[#1c1b2d]">
        <div id="smooth-content">
          <Header />
          <Features />
          <Footer />
          {/* ...rest of your content... */}
        </div>
      </div>
    </>
  )
}

export default App
