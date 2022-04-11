import React, { useEffect, useState } from "react";

const useOnScreen = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
    ref.current && observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [ref])

  return isIntersecting;
}

export default useOnScreen;
