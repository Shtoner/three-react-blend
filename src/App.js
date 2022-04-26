import React, { useEffect }  from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const App = () => {
  useEffect(() => {

    var sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    /**
 * Models
//  */
    var gltfLoader = new GLTFLoader()
    gltfLoader.load(
        './dupe.glb', gltf => {
          while(gltf.scene.children.length)
          {
              scene.add(gltf.scene.children[0])
          }
        console.log(gltf)
        })
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( sizes.width, sizes.height );
    document.body.appendChild( renderer.domElement );
    
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enabled=true

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x7e31eb } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( camera );
    var light = new THREE.AmbientLight( 0xffffbb, 0x080820, 1 );
    scene.add( light );
  camera.position.z = 5;
var animate = function () {
        requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.rotation.z += 0.01;
        renderer.render( scene, camera );
    };
    animate();
    console.log(scene)
  }, [])
  return (
    <div>

    </div>
  );
}


export default App;

// class Canvas extends React.Component {
//     componentDidMount() {
//       const canvas = this.refs.canvas
//       const ctx = canvas.getContext("2d")
//       const img = this.refs.image
//     }
//     render() {
//       return(
//         <div>
//           <canvas ref="canvas" width={640} height={425} />
//         </div>
//       )
//     }
//   }
//   export default Canvas