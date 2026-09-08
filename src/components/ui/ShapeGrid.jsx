import React, { useRef, useEffect } from 'react'

export default function ShapeGrid({
  speed = 0.5,
  squareSize = 40,
  direction = 'diagonal',
  borderColor = '#33387A',
  hoverFillColor = '#FE8233',
  shape = 'square',
  hoverTrailAmount = 5,
  className = '',
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let isVisible = true

    const handleResize = () => {
      const parent = canvas.parentElement
      if (parent) {
        const rect = parent.getBoundingClientRect()
        canvas.width = rect.width
        canvas.height = rect.height
      }
    }

    handleResize()
    const resizeObserver = new ResizeObserver(handleResize)
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement)
    }

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    })
    intersectionObserver.observe(canvas)

    let start = performance.now()

    const render = (now) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      const elapsed = (now - start) / 1000
      const width = canvas.width
      const height = canvas.height

      if (width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, width, height)

      // Calculate shift based on direction
      let shiftX = 0
      let shiftY = 0
      const moveDistance = (elapsed * speed * 22) % squareSize

      if (direction === 'diagonal') {
        shiftX = moveDistance
        shiftY = moveDistance
      } else if (direction === 'right') {
        shiftX = moveDistance
      } else if (direction === 'down') {
        shiftY = moveDistance
      }

      ctx.strokeStyle = borderColor
      ctx.lineWidth = 1
      ctx.globalAlpha = 0.12

      // Draw vertical grid lines
      const startX = (shiftX % squareSize) - squareSize
      for (let x = startX; x < width + squareSize; x += squareSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Draw horizontal grid lines
      const startY = (shiftY % squareSize) - squareSize
      for (let y = startY; y < height + squareSize; y += squareSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Subtle animated pulse highlights along grid squares
      const cols = Math.ceil(width / squareSize) + 2
      const rows = Math.ceil(height / squareSize) + 2

      ctx.fillStyle = hoverFillColor

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const patternVal = Math.sin((c * 0.5 + r * 0.5) + elapsed * speed * 1.8)
          if (patternVal > 0.88) {
            ctx.globalAlpha = 0.08
            const px = startX + c * squareSize
            const py = startY + r * squareSize
            ctx.fillRect(px + 1, py + 1, squareSize - 2, squareSize - 2)
          }
        }
      }

      ctx.globalAlpha = 1.0
      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
    }
  }, [speed, squareSize, direction, borderColor, hoverFillColor, shape, hoverTrailAmount])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  )
}
