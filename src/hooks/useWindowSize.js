import { useEffect, useState } from 'react'

export function useWindowSize () {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  const [isMobile, setIsMobile] = useState(windowSize.width !== undefined && windowSize.width < 768)

  useEffect(() => {
    function handleResize () {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (windowSize.width !== undefined && windowSize.width < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [windowSize.width])

  return { isMobile, windowSize }
}
