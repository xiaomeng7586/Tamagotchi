import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Stage, OrbitControls, Grid, Environment, KeyboardControlsEntry, KeyboardControls, useKeyboardControls } from '@react-three/drei'
import { Player } from './Player'

enum Controls {
  forward = 'forward',
  back = 'back',
  left = 'left',
  right = 'right',
  jump = 'jump',
}

function App() {
  const map = useMemo<KeyboardControlsEntry<Controls>[]>(() => [
    {name: Controls.forward, keys: ['ArrowUp', 'KeyW']},
    {name: Controls.back, keys: ['ArrowDown', 'KeyS']},
    {name: Controls.left, keys: ['ArrowLeft', 'KeyA']},
    {name: Controls.right, keys: ['ArrowRight', 'KeyD']},
    {name: Controls.jump, keys: ['Space']},
  ], [])


  return (
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
        position: [0, 5, 5],
      }}
    >

        <KeyboardControls map={ map }>
          <Player></Player>
        </KeyboardControls>

        

        <Grid 
          cellSize={ 1.5}
          cellThickness={ 0.5 }
          sectionSize={ 3 }
          sectionThickness={ 1 }
          infiniteGrid={ true }
          position={[0, -0.01, 0]}
          sectionColor="#00ffff"
          fadeDistance={ 50 }
          fadeStrength={ 1 }
        />

      <Environment preset="city" />
      <OrbitControls />
    </Canvas>
  )
}

export default App
