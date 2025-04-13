// HomePage.jsx
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import './HomePage.scss'

function SpinningCube() {
  const meshRef = useRef()
  useFrame(() => {
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#4a90e2"
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  )
}

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm [Your Name]</h1>
        <h2 className="hero-subtitle">Full Stack Developer</h2>
        <p className="hero-description">
          Passionate about creating innovative solutions and learning new technologies.
          Let's build something amazing together.
        </p>
        <div className="cta-buttons">
          <button className="primary-button">View My Work</button>
          <button className="secondary-button">Contact Me</button>
        </div>
      </div>
      <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <SpinningCube />
      </Canvas>
    </div>
  )
}
