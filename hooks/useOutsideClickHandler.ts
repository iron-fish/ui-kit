import { MutableRefObject, useEffect } from 'react'

export const useOutsideClickHandler = (
  refs: MutableRefObject<HTMLElement>[],
  callback: () => void
) => {
  useEffect(() => {
    /**
     * Calls callback if clicked on outside of elements
     */
    function handleClickOutside(event: MouseEvent) {
      if (
        refs.findIndex(
          ref => ref.current && ref.current.contains(event.target as Node)
        ) === -1
      ) {
        callback()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [refs, callback])
}

export default useOutsideClickHandler
