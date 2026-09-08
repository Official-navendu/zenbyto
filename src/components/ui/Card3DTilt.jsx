import React, { useRef, useState } from 'react'

export default function Card3DTilt({ children, className = '', intensity = 12 }) {
  const cardRef = useRef(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    // Mouse position relative to card
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Normalize coordinates (-0.5 to 0.5)
    const xc = x / width - 0.5
    const yc = y / height - 0.5
    
    setRotate({
      x: -yc * intensity,
      y: xc * intensity,
    })

    setGlowPos({
      x: (x / width) * 100,
      y: (y / height) * 100,
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotate({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
      className={`relative rounded-2xl overflow-hidden glass-card transition-all duration-300 ${className}`}
    >
      {/* Dynamic hover glow effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 bg-radial from-accent/15 via-transparent to-transparent"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 200px at ${glowPos.x}% ${glowPos.y}%, rgba(254, 130, 51, 0.15), transparent 75%)`,
        }}
      />
      {children}
    </div>
  )
}
