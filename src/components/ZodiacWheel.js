"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Environment, PresentationControls } from "@react-three/drei"
import { Vector3 } from "three"

const RADIUS = 4
const SIGNS = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
]

function ZodiacSign({ name, position }) {
    return (
        <group position={position}>
            {/* Placeholder for your icon */}
            <mesh>
                <sphereGeometry args={[0.6, 32, 32]} />
                <meshStandardMaterial
                    color="#e67e22"
                    roughness={0.3}
                    metalness={0.8}
                    emissive="#ff9f45"
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* You'll replace this with your own image element */}
            <Text
                position={[0, -0.9, 0]}
                fontSize={0.2}
                color="#d35400"
                font="/fonts/Geist_Bold.json"
                anchorX="center"
                anchorY="middle"
            >
                {name}
            </Text>
        </group>
    )
}

function RotatingWheel() {
    const wheelRef = useRef(null)

    // Animate the wheel rotation
    useFrame((_state, delta) => {
        if (wheelRef.current) {
            wheelRef.current.rotation.y += delta * 0.2 // Adjust speed here
        }
    })

    // Position signs in a circle
    const positionOnCircle = (index, total) => {
        const angle = (index / total) * Math.PI * 2
        const x = Math.sin(angle) * RADIUS
        const z = Math.cos(angle) * RADIUS
        return new Vector3(x, 0, z)
    }

    return (
        <group ref={wheelRef}>
            {SIGNS.map((sign, i) => (
                <ZodiacSign key={sign} name={sign} position={positionOnCircle(i, SIGNS.length)} />
            ))}
        </group>
    )
}

export default function ZodiacWheel() {
    return (
        <div className="w-full h-screen">
            <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
                <color attach="background" args={["#f8f0e8"]} />
                <fog attach="fog" args={["#f8f0e8", 8, 20]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Environment preset="sunset" />

                <PresentationControls
                    global
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI / 4, Math.PI / 4]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                    config={{ mass: 2, tension: 400 }}
                    snap={{ mass: 4, tension: 300 }}
                >
                    <RotatingWheel />

                    {/* Central title */}
                    <Text
                        position={[0, 0, 0]}
                        fontSize={0.5}
                        color="#a83200"
                        font="/fonts/Geist_Bold.json"
                        anchorX="center"
                        anchorY="middle"
                    >
                        ZODIAC
                    </Text>
                </PresentationControls>
            </Canvas>
        </div>
    )
}
