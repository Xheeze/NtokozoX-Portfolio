import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

function Atom() {
  const group = useRef()
  useFrame((_, dt) => {
    if (!group.current) return
    group.current.rotation.y += dt * 0.6
    group.current.rotation.x += dt * 0.3
  })
  return (
    <group ref={group}>
      {Array.from({ length: 3 }).map((_, i) => (
        <mesh key={i} rotation={[i * Math.PI / 3, 0, i * Math.PI / 6]}>
          <torusGeometry args={[1, 0.05, 12, 64]} />
          <meshStandardMaterial color="#61dafb" emissive="#0a2e3f" emissiveIntensity={0.8} metalness={0.4} roughness={0.2} />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#ffffff" emissive="#61dafb" emissiveIntensity={1.2} />
      </mesh>
    </group>
  )
}

export default function ReactIcon({ size = 120 }) {
  const reduced = usePrefersReducedMotion()
  if (reduced) {
    return <div style={{ width: size, height: size, display: 'grid', placeItems: 'center', background: '#052029', borderRadius: 12, fontSize: size * 0.4 }}>⚛️</div>
  }
  return (
    <div style={{ width: size, height: size, borderRadius: 12, overflow: 'hidden', background: 'radial-gradient(circle at 30% 30%, #02161c, #000)' }}>
      <Canvas camera={{ position: [0, 0, 3.2], fov: 55 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 4, 4]} intensity={1.4} />
        <Atom />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
