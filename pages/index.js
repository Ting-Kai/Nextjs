import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { useState, useRef } from "react";
import {Stats} from "../lib/Stats";


const Box = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default () => {
  const cameraSetting = {
    position: [0, 0, 3]
  }

  return (
    <>
      <div className='h-screen w-screen bg-white'>
        <Canvas
          shadows={true}
          camera={cameraSetting}
        >
          <Stats/>
          <OrbitControls/>

          <directionalLight position={[1, 2, 3]} intensity={1.5} />
          <ambientLight intensity={0.5}/>
          <Box position={[0, 0, 0]} />
        </Canvas>
      </div>
    </>
  )
}
