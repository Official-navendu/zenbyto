import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function InteractiveDashboard3D() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    
    // Size settings
    let width = container.clientWidth
    let height = container.clientHeight
    if (width === 0) width = window.innerWidth
    if (height === 0) height = window.innerHeight

    // Scene
    const scene = new THREE.Scene()
    
    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 9)
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    
    // Lights for the Waving Background Mesh
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65)
    scene.add(ambientLight)
    
    // Primary Blue Light (#33387A)
    const primaryLight = new THREE.PointLight(0x33387A, 15, 30)
    primaryLight.position.set(6, 4, 2)
    scene.add(primaryLight)

    // Accent Orange Light (#FE8233)
    const accentLight = new THREE.PointLight(0xFE8233, 12, 30)
    accentLight.position.set(-6, -4, 2)
    scene.add(accentLight)

    // Subtle white directional light for crispness
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5)
    dirLight.position.set(0, 5, 5)
    scene.add(dirLight)
    
    // Waving Background Mesh (Plane)
    const planeWidth = 28
    const planeHeight = 18
    const planeSegments = 32
    const planeGeo = new THREE.PlaneGeometry(planeWidth, planeHeight, planeSegments, planeSegments)
    
    const planeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.6,
      metalness: 0.05,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide
    })
    
    const waveMesh = new THREE.Mesh(planeGeo, planeMat)
    waveMesh.position.set(0, 0, -3.5)
    waveMesh.rotation.x = -Math.PI / 4.5 // Tilted for organic flow
    scene.add(waveMesh)

    // Save initial coordinates to calculate vertex displacement
    const initialPositions = planeGeo.attributes.position.clone()

    // Main Interactive Dashboard Group
    const dashboardGroup = new THREE.Group()
    scene.add(dashboardGroup)

    // 1. Perspective Grid Helper
    const gridColor = new THREE.Color('#33387A')
    const gridHelper = new THREE.GridHelper(8, 12, gridColor, 0xFE8233)
    gridHelper.position.y = -1.6
    gridHelper.rotation.x = 0.05
    dashboardGroup.add(gridHelper)

    // 2. Box pillars (bar chart metrics)
    const barCount = 5
    const bars = []
    const barSpacing = 0.65
    const barGeo = new THREE.BoxGeometry(0.22, 1, 0.22)
    
    for (let i = 0; i < barCount; i++) {
      const isEven = i % 2 === 0
      const barMat = new THREE.MeshStandardMaterial({
        color: isEven ? 0x33387A : 0xFE8233,
        roughness: 0.15,
        metalness: 0.8,
      })
      const bar = new THREE.Mesh(barGeo, barMat)
      bar.position.x = (i - (barCount - 1) / 2) * barSpacing
      bar.position.y = -1.6
      bar.scale.y = 0.4 + Math.random() * 1.8
      dashboardGroup.add(bar)
      bars.push(bar)
    }

    // 3. Floating Cone Funnel
    const funnelGeo = new THREE.ConeGeometry(0.45, 0.9, 32, 1, true)
    const funnelMat = new THREE.MeshStandardMaterial({
      color: 0x33387A,
      roughness: 0.2,
      metalness: 0.75,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide
    })
    const funnel = new THREE.Mesh(funnelGeo, funnelMat)
    funnel.position.set(-1.8, 1.2, 0)
    funnel.rotation.x = Math.PI // Flip to represent marketing funnel
    dashboardGroup.add(funnel)

    // 4. Floating Torus Ring
    const torusGeo = new THREE.TorusGeometry(0.5, 0.12, 16, 100)
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0xFE8233,
      roughness: 0.1,
      metalness: 0.7,
    })
    const torus = new THREE.Mesh(torusGeo, torusMat)
    torus.position.set(1.8, 1.2, -0.3)
    dashboardGroup.add(torus)

    // 5. Dynamic spline line chart
    const curvePoints = [
      new THREE.Vector3(-2.0, -1.2, 0.3),
      new THREE.Vector3(-1.0, -0.6, 0.1),
      new THREE.Vector3(0, -0.8, 0),
      new THREE.Vector3(1.0, 0.4, 0.2),
      new THREE.Vector3(2.0, 1.5, 0.4),
    ]
    const spline = new THREE.CatmullRomCurve3(curvePoints)
    const tubeGeo = new THREE.TubeGeometry(spline, 64, 0.045, 8, false)
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0xFE8233,
      roughness: 0.1,
      metalness: 0.9,
    })
    const tube = new THREE.Mesh(tubeGeo, tubeMat)
    dashboardGroup.add(tube)

    // 6. Floating Data Sphere
    const sphereGeo = new THREE.SphereGeometry(0.24, 32, 32)
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x33387A,
      roughness: 0.15,
      metalness: 0.85,
    })
    const sphere = new THREE.Mesh(sphereGeo, sphereMat)
    sphere.position.set(0, 1.4, 0.2)
    dashboardGroup.add(sphere)

    // 7. Subtle floating traffic particles
    const particleCount = 120
    const particleGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12
      positions[i + 1] = (Math.random() - 0.5) * 8
      positions[i + 2] = (Math.random() - 0.5) * 6
    }
    
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0xFE8233,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
    })
    
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // Mouse coordinates tracking
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (event) => {
      // Map to values between -1 and 1
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Resize observer & layout updates
    const handleResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)

      // Reposition dashboardGroup responsively based on container size
      const isMobile = window.innerWidth < 1024
      if (isMobile) {
        dashboardGroup.position.set(0, -1.8, 0)
        dashboardGroup.scale.set(0.8, 0.8, 0.8)
      } else {
        dashboardGroup.position.set(3.0, 0.2, 0)
        dashboardGroup.scale.set(1.1, 1.1, 1.1)
      }
    }

    const resizeObserver = new ResizeObserver(() => handleResize())
    resizeObserver.observe(container)
    handleResize() // Initial positioning

    // Animation Loop
    let animationFrameId
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Smooth mouse coordinate tracking (lerp)
      targetX += (mouseX - targetX) * 0.06
      targetY += (mouseY - targetY) * 0.06

      // Rotate dashboard elements based on target mouse coordinate offsets
      dashboardGroup.rotation.y = targetX * 0.3
      dashboardGroup.rotation.x = -targetY * 0.2
      dashboardGroup.position.y = (window.innerWidth < 1024 ? -1.8 : 0.2) + Math.sin(elapsedTime * 1.2) * 0.08 // Floating motion

      // Animate background mesh plane to create a very subtle organic wave texture
      const posAttr = planeGeo.attributes.position
      const initAttr = initialPositions
      for (let i = 0; i < posAttr.count; i++) {
        const x = initAttr.getX(i)
        const y = initAttr.getY(i)
        
        const wave1 = Math.sin(x * 0.2 + elapsedTime * 0.8) * 0.3
        const wave2 = Math.cos(y * 0.25 + elapsedTime * 0.6) * 0.3
        const wave3 = Math.sin((x + y) * 0.1 + elapsedTime * 1.0) * 0.15
        const reactive = (Math.sin(x * 0.1 + targetX * 1.2) + Math.cos(y * 0.1 + targetY * 1.2)) * 0.1
        
        posAttr.setZ(i, wave1 + wave2 + wave3 + reactive)
      }
      posAttr.needsUpdate = true
      planeGeo.computeVertexNormals()

      // Animate charts (bar chart metrics scale and position)
      bars.forEach((bar, index) => {
        const heightScale = 0.4 + (Math.sin(elapsedTime * 1.4 + index) * 0.5 + 0.5) * 1.6
        bar.scale.y = heightScale
        bar.position.y = -1.6 + heightScale / 2
      })

      // Torus rotation
      torus.rotation.x = elapsedTime * 0.25
      torus.rotation.y = elapsedTime * 0.35
      torus.position.y = 1.2 + Math.sin(elapsedTime * 0.7) * 0.12

      // Funnel rotation
      funnel.rotation.y = elapsedTime * 0.4
      funnel.position.y = 1.2 + Math.cos(elapsedTime * 1.0) * 0.1

      // Sphere floating
      sphere.position.y = 1.4 + Math.sin(elapsedTime * 1.8) * 0.06

      // Float data particles
      particles.rotation.y = elapsedTime * 0.015
      particles.rotation.x = elapsedTime * 0.008

      // Gentle lighting shifting to animate color gradients
      primaryLight.position.x = 6 + Math.sin(elapsedTime * 0.4) * 3
      accentLight.position.x = -6 + Math.cos(elapsedTime * 0.4) * 3

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      resizeObserver.disconnect()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      aria-hidden="true"
    />
  )
}
