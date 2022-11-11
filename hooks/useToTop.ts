import { RefObject, useState, useRef, useEffect } from 'react'

export default function useToTop(
  containerRef: RefObject<HTMLDivElement>,
  triggerRef: RefObject<HTMLElement>,
  isOpen: boolean
) {
  const [isToTop, setIsToTop] = useState(false)
  const rafId = useRef<number>()

  useEffect(() => {
    function checkPosition() {
      rafId.current = requestAnimationFrame(() => {
        const containerRect = containerRef.current?.getBoundingClientRect()
        const targetRect = triggerRef.current?.getBoundingClientRect()
        setIsToTop((containerRect?.y || 0) < (targetRect?.y || 0))
      })
    }
    if (isOpen) {
      checkPosition()

      window.addEventListener('scroll', checkPosition)
      window.addEventListener('resize', checkPosition)
    }
    return () => {
      if (isOpen) {
        window.removeEventListener('scroll', checkPosition)
        window.removeEventListener('resize', checkPosition)
        if (rafId.current) {
          cancelAnimationFrame(rafId.current)
        }
      }
    }
  }, [isOpen])

  return isToTop
}