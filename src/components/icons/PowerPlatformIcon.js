import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

function Crystal() {
  const group = useRef()
  useFrame((_, dt) => {
    if (!group.current) return
    group.current.rotation.y += dt * 0.4
    group.current.rotation.x += dt * 0.15
  })
  return (
    <group ref={group}>
      {[1, 0.7, 0.42].map((scale, i) => (
        <mesh key={i} scale={scale} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={i === 0 ? '#742774' : i === 1 ? '#0078d4' : '#ffb900'}
            emissive={i === 0 ? '#3a133d' : i === 1 ? '#003a6b' : '#5a3d00'}
            emissiveIntensity={0.9 - i * 0.2}
            metalness={0.4}
            roughness={0.25}
            transparent
            opacity={0.85 - i * 0.15}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function PowerPlatformIcon({ size = 120 }) {
  const reduced = usePrefersReducedMotion()
  if (reduced) {
    return <div style={{ width: size, height: size, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg,#742774,#0078d4)', borderRadius: 12, fontSize: size * 0.35 }}>⚡</div>
  }
  return (
    <div style={{ width: size, height: size, borderRadius: 12, overflow: 'hidden', background: 'radial-gradient(circle at 40% 35%, #120016, #000)' }}>
      <Canvas camera={{ position: [0, 0, 4.2], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[6, 6, 6]} intensity={1.3} color="#ffffff" />
        <pointLight position={[-4, -3, -2]} intensity={0.6} color="#742774" />
        <Crystal />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
