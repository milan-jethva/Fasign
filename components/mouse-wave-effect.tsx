"use client"

import { useEffect, useState } from "react"

interface Wave {
  id: number
  x: number
  y: number
  timestamp: number
}

export function MouseWaveEffect() {
  const [waves, setWaves] = useState<Wave[]>([])

  useEffect(() => {
    let waveId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const newWave: Wave = {
        id: waveId++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      }

      setWaves((prev) => [...prev, newWave])

      // Remove wave after animation completes
      setTimeout(() => {
        setWaves((prev) => prev.filter((wave) => wave.id !== newWave.id))
      }, 1500)
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-10">
        {waves.map((wave) => (
          <div
            key={wave.id}
            className="absolute"
            style={{
              left: wave.x - 50,
              top: wave.y - 50,
              width: "100px",
              height: "100px",
            }}
          >
            {/* Main water ripple */}
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background: `radial-gradient(ellipse 80% 60% at center, 
                  rgba(147, 51, 234, 0.4) 0%, 
                  rgba(147, 51, 234, 0.2) 30%, 
                  rgba(168, 85, 247, 0.1) 60%, 
                  transparent 100%)`,
                borderRadius: "50% 40% 60% 30%",
                animation: "waterWave1 1.5s ease-out forwards",
                transform: "rotate(0deg)",
              }}
            />

            {/* Secondary ripple */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background: `radial-gradient(ellipse 70% 50% at center, 
                  rgba(168, 85, 247, 0.3) 0%, 
                  rgba(168, 85, 247, 0.15) 40%, 
                  transparent 70%)`,
                borderRadius: "40% 60% 30% 50%",
                animation: "waterWave2 1.5s ease-out 0.1s forwards",
                transform: "rotate(45deg)",
              }}
            />

            {/* Tertiary ripple */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(ellipse 60% 80% at center, 
                  rgba(196, 181, 253, 0.2) 0%, 
                  rgba(196, 181, 253, 0.1) 50%, 
                  transparent 80%)`,
                borderRadius: "30% 50% 40% 60%",
                animation: "waterWave3 1.5s ease-out 0.2s forwards",
                transform: "rotate(-30deg)",
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes waterWave1 {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0.6;
            border-radius: 50% 40% 60% 30%;
          }
          50% {
            opacity: 0.4;
            border-radius: 40% 60% 30% 50%;
          }
          100% {
            transform: scale(8) rotate(180deg);
            opacity: 0;
            border-radius: 30% 50% 40% 60%;
          }
        }
        
        @keyframes waterWave2 {
          0% {
            transform: scale(0) rotate(45deg);
            opacity: 0.4;
            border-radius: 40% 60% 30% 50%;
          }
          50% {
            opacity: 0.25;
            border-radius: 60% 30% 50% 40%;
          }
          100% {
            transform: scale(6) rotate(225deg);
            opacity: 0;
            border-radius: 50% 40% 60% 30%;
          }
        }
        
        @keyframes waterWave3 {
          0% {
            transform: scale(0) rotate(-30deg);
            opacity: 0.2;
            border-radius: 30% 50% 40% 60%;
          }
          50% {
            opacity: 0.15;
            border-radius: 50% 40% 60% 30%;
          }
          100% {
            transform: scale(4) rotate(150deg);
            opacity: 0;
            border-radius: 40% 60% 30% 50%;
          }
        }
      `}</style>
    </>
  )
}
