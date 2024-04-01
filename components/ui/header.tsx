'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left side content */}
          <div className="flex items-center">
           </div>
          
          {/* Right side content */}
          <div className="flex items-center">
          <img src="/images/campuslogo.jpeg" alt="Campus Logo" className="h-20 w-auto md:h-20 md:w-auto object-contain" />
          </div>
        </div>
      </div>
    </header>
  )
}
