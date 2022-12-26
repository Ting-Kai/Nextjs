import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree } from "@react-three/fiber";

extend({ OrbitControls });

export default () => {
    const { gl, camera } = useThree();
    return <orbitControls args={[camera, gl.domElement]} />;
}