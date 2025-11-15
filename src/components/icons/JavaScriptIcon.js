import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function JsCube() {
  const mesh = useRef()
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01
      mesh.current.rotation.x += 0.005
    }
  })

  return (
    <mesh ref={mesh} castShadow receiveShadow>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial
        color="#f7df1e"       /* JavaScript yellow */
        emissive="#9b5de5"    /* purple neon accent */
        emissiveIntensity={1.2}
        metalness={0.55}
        roughness={0.35}
      />
    </mesh>
  )
}

export default function JavaScriptIcon({ size = 120, className }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 12, overflow: 'hidden', background: 'radial-gradient(circle at 30% 30%, #1a1a1a, #000)' }} className={className}>
      <Canvas
        shadows
        camera={{ position: [2.4, 1.8, 2.4], fov: 55 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.45} />
        <pointLight position={[5, 5, 5]} intensity={1.4} color="#ff00ff" />
        <pointLight position={[-4, -3, -2]} intensity={0.5} color="#0066ff" />
        <JsCube />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
