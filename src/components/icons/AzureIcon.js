import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

function Pyramid() {
  const ref = useRef()
  useFrame((_, dt) => {
    if (!ref.current) return
    ref.current.rotation.y += dt * 0.5
    ref.current.rotation.x = Math.sin(Date.now() * 0.0006) * 0.4
  })
  return (
    <mesh ref={ref} rotation={[Math.PI / 5, Math.PI / 4, 0]} castShadow receiveShadow>
      <coneGeometry args={[1, 1.2, 4]} />
      <meshStandardMaterial
        color="#0078d4"
        emissive="#003a6b"
        emissiveIntensity={1.0}
        metalness={0.55}
        roughness={0.3}
      />
    </mesh>
  )
}

export default function AzureIcon({ size = 120 }) {
  const reduced = usePrefersReducedMotion()
  if (reduced) {
    return <div style={{ width: size, height: size, display: 'grid', placeItems: 'center', background: '#003a6b', borderRadius: 12, fontSize: size * 0.38 }}>☁️</div>
  }
  return (
    <div style={{ width: size, height: size, borderRadius: 12, overflow: 'hidden', background: 'radial-gradient(circle at 30% 30%, #001a2e, #000)' }}>
      <Canvas camera={{ position: [0, 0, 3.2], fov: 55 }}>
        <ambientLight intensity={0.55} />
        <pointLight position={[4, 4, 4]} intensity={1.4} />
        <Pyramid />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
