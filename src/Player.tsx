import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"

enum Controls {
    forward = 'forward',
    back = 'back',
    left = 'left',
    right = 'right',
    jump = 'jump',
  }

export function Player() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [z, setZ] = useState(0)
    const [, get] = useKeyboardControls<Controls>()
    
    useFrame((state) => {
        const { forward, back, left, right, jump } = get()

        if(forward) {
            setZ(z - 0.02)
        }
        if(back) {
            setZ(z + 0.02)
        }
        if(left) {
            setX(x - 0.02)
        }
        if(right) {
            setX(x + 0.02)
        }

        // if(y > 0) {
        //     setY(y - 0.01)
        // }

        // if(jump) {
        //     if(y < 1) {
        //         setY(y + 0.02)
        //     }
        // }

    })
      
    return (
        <>
            <mesh position={[x, 0.5 + y, z]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="hotpink" />
            </mesh>
        </>
    )
}