/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

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
    let resizeObserver: ResizeObserver
    if (isOpen) {
      checkPosition()

      window.addEventListener('scroll', checkPosition)
      window.addEventListener('resize', checkPosition)
      resizeObserver = new ResizeObserver(() => checkPosition())
      resizeObserver.observe(containerRef.current as Element)
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
