import { MutableRefObject, useEffect } from 'react'

const useOutsideClickHandler = (
  refs: MutableRefObject<HTMLElement>[],
  callback: () => void
) => {
  useEffect(() => {
    /**
     * Calls callback if clicked on outside of elements
     */
    function handleClickOutside(event) {
      if (
        refs.findIndex(
          ref => ref.current && ref.current.contains(event.target)
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
