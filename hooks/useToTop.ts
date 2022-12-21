import { RefObject, useState, useRef, useEffect, useCallback } from 'react'

export default function useToTop(
  containerRef: RefObject<HTMLDivElement>,
  triggerRef: RefObject<HTMLElement>,
  isOpen: boolean
) {
  const [isToTop, setIsToTop] = useState(false)
  const rafId = useRef<number>()

  const checkPosition = useCallback(() => {
    rafId.current = requestAnimationFrame(() => {
      const containerRect = containerRef.current?.getBoundingClientRect()
      const targetRect = triggerRef.current?.getBoundingClientRect()
      setIsToTop((containerRect?.y || 0) < (targetRect?.y || 0))
    })
  }, [])

  useEffect(() => {
    let resizeObserver
    if (isOpen) {
      checkPosition()

      window.addEventListener('scroll', checkPosition)
      window.addEventListener('resize', checkPosition)
      resizeObserver = new ResizeObserver(() => checkPosition())
      resizeObserver.observe(containerRef.current)
    }
    return () => {
      if (isOpen) {
        window.removeEventListener('scroll', checkPosition)
        window.removeEventListener('resize', checkPosition)
        if (resizeObserver && containerRef.current) {
          resizeObserver.unobserve(containerRef.current)
        }
        if (rafId.current) {
          cancelAnimationFrame(rafId.current)
        }
      }
    }
  }, [isOpen])

  return isToTop
}
