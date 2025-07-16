function Header() {
  return (
    <div className="relative bg-[linear-gradient(to_top,#fdfbfb_0%,#ebedee_100%)] text-white">
      <div className="h-screen min-h-screen">
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
