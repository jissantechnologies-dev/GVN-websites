import { useEffect, useRef, useState } from 'react'

function Reveal({ children, as: Tag = 'div', className = '', delay = 0, innerRef, ...rest }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const setRefs = (node) => {
    ref.current = node
    if (typeof innerRef === 'function') innerRef(node)
    else if (innerRef) innerRef.current = node
  }

  return (
    <Tag
      ref={setRefs}
      className={`reveal ${inView ? 'in-view' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
