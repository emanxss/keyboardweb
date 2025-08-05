import { useState, useEffect } from 'react'
import Header from './header'
import Features from './features'
// import Keyboard from './keyboard'
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
      smooth: 1.5,
      smoothTouch: 0.1
    })
  }, [])

  return (
    <>
      {showLoading && (
        <LoadingScreen onComplete={() => setShowLoading(false)} />
      )}
      <div id="smooth-wrapper" className="min-h-screen bg-[#1c1b2d]">
        <div id="smooth-content">
          <Nav />
          <Header />
          <Features />
          {/* Add Footer at the end of the content */}
          <Footer />
          {/* ...rest of your content... */}
        </div>
      </div>
    </>
  )
}

export default App
