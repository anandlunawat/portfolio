import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeJs = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            // Set up the scene, camera, and renderer
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(
                75,
                containerRef.current.clientWidth / containerRef.current.clientHeight,
                0.1,
                1000
            );

            camera.position.set(-0.6, 2.5, 10)

            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(
                containerRef.current.clientWidth,
                containerRef.current.clientHeight
            );
            containerRef.current.appendChild(renderer.domElement);

            const rightGeometry = new THREE.PlaneGeometry(2.5, 0.1)
            const rightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
            const rightMesh = new THREE.Mesh(rightGeometry, rightMaterial)
            rightMesh.position.set(-0.4, 1, 0)
            scene.add(rightMesh)

            const roundedRectShape = new THREE.Shape();
            const x = 0; // center x position
            const y = 0; // center y position
            const width = 3; // width of the rectangle
            const height = 2; // height of the rectangle
            const radius = 0.1; // radius of the corner curves
            roundedRectShape.moveTo(x - width / 2 + radius, y - height / 2);
            roundedRectShape.lineTo(x + width / 2 - radius, y - height / 2);
            roundedRectShape.quadraticCurveTo(x + width / 2, y - height / 2, x + width / 2, y - height / 2 + radius);
            roundedRectShape.lineTo(x + width / 2, y + height / 2 - radius);
            roundedRectShape.quadraticCurveTo(x + width / 2, y + height / 2, x + width / 2 - radius, y + height / 2);
            roundedRectShape.lineTo(x - width / 2 + radius, y + height / 2);
            roundedRectShape.quadraticCurveTo(x - width / 2, y + height / 2, x - width / 2, y + height / 2 - radius);
            roundedRectShape.lineTo(x - width / 2, y - height / 2 + radius);
            roundedRectShape.quadraticCurveTo(x - width / 2, y - height / 2, x - width / 2 + radius, y - height / 2);
            const extrudeSettings = { depth: 0.01, bevelEnabled: false };
            const geometry = new THREE.ExtrudeGeometry(roundedRectShape, extrudeSettings);
            const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
            const laptopScreen = new THREE.Mesh(geometry, material);
            laptopScreen.position.set(-0.1, 1.7, 2);
            rightMesh.add(laptopScreen);

            const rightStrip = new THREE.BoxGeometry(2.8, 1.65, 0.2)
            const textureMaterial = new THREE.TextureLoader().load("/pulzion.png")
            const rightStripMaterial = new THREE.MeshBasicMaterial({ map: textureMaterial })
            const stripMesh = new THREE.Mesh(rightStrip, rightStripMaterial)
            stripMesh.position.set(0, 0.05, 0)
            laptopScreen.add(stripMesh)

            const cone = new THREE.ConeGeometry(0.5,0.8,32,1,true)
            const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x09099f, side: THREE.DoubleSide })
            const object = new THREE.Mesh(cone,coneMaterial)
            object.position.set(-0.1,1,0)
            laptopScreen.add(object)
            
            // const cone1 = new THREE.ConeGeometry(1,2,32,1,true)
            // const coneMaterial1 = new THREE.MeshBasicMaterial({ color: 0x09099f, side: THREE.DoubleSide })
            // const object1 = new THREE.Mesh(cone1,coneMaterial1)
            // // object1.position.set(-10,-10,-2.2)
            // object.add(object1)

            const keyboardGeometry = new THREE.BoxGeometry(2.8, 0.05, 0.7);
            const keyboardMaterial = new THREE.MeshBasicMaterial({ color: 0xC0C0C0 });
            const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
            keyboard.position.set(-0.017, -0.9 , 0.5);
            laptopScreen.add(keyboard);

            const layer = new THREE.BoxGeometry(2.8,0.02,0.6)
            const layerMaterial = new THREE.MeshBasicMaterial({color : 0x0000000})
            const layerMesh = new THREE.Mesh(layer,layerMaterial)
            layerMesh.position.set(0,-0.87,0)
            laptopScreen.add(layerMesh)

            const touchpad = new THREE.BoxGeometry(0.4,0.008,0.2)
            const touchpadMaterial = new THREE.MeshBasicMaterial({color : 0x5A5A5A})
            const touchpadMesh = new THREE.Mesh(touchpad,touchpadMaterial)
            touchpadMesh.position.set(-0.09,0.24,0.95)
            keyboard.add(touchpadMesh)

            const buttonWidth = 0.1;
            const buttonHeight = 0.10;
            const buttonDepth = 0.01;
            const buttonCount = 11;
            
            // Create button geometry and material
            const buttonGeometry = new THREE.BoxGeometry(buttonWidth, buttonHeight, buttonDepth);
            const buttonMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Customize the color as needed
            
            // Create buttons and position them on the keyboard
            for (let i = 0; i < buttonCount; i++) {
              const button = new THREE.Mesh(buttonGeometry, buttonMaterial);
              button.position.set(-1 + i * 0.2, 0, 0);
              keyboard.add(button);
            }                
            // for (let i = 0; i < buttonCount; i++) {
            //   const button = new THREE.Mesh(buttonGeometry, buttonMaterial);
            //   button.position.set(-1 + i * 0.2, 0, 10);
            //   keyboard.add(button);
            // }             

            camera.position.z = 5;

            const animate = () => {
                requestAnimationFrame(animate);
                // rightMesh.rotation.z = 0.01            
                // rightMesh.rotation.y += 0.01            
                renderer.render(scene, camera);
            };
            animate();

            return () => {
                containerRef.current?.removeChild(renderer.domElement);
            };
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-[100vw] pointer-events-none h-screen"
        ></div>
    );
};

export default ThreeJs;


// const wireframeGeometry = new THREE.WireframeGeometry(circleGeometry);
// const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

// const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
// circle.add(wireframe);
// const transparentMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.5, color: 0xffffff });
