// abstract library
import { DrawingCommon } from './common';
import * as THREE from 'three'

// A class for our application state and functionality
class Drawing extends DrawingCommon {

    constructor (canv: HTMLElement) {
        super (canv)
        this.camera.lookAt(new THREE.Vector3())

    }

    /*
	Set up the scene during class construction
	*/
	initializeScene(){
        const objects = [];

        const objectRoot = new THREE.Group();
        
        //upper body
        const upperBody = new THREE.Group();
        objectRoot.add(upperBody);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.7, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'black', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        upperBody.position.set(0,0,0);
        upperBody.add(mesh);
        objects.push(upperBody);

        //upper body lower

        const upperBodyLower = new THREE.Group();
        upperBody.add(upperBodyLower);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.6, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        upperBodyLower.position.set(0,0,0);
        upperBodyLower.translateY(-0.3);
        upperBodyLower.translateX(-0.1);
        upperBodyLower.add(mesh);
        objects.push(upperBodyLower);

        //middle body

        const middleBody = new THREE.Group();
        upperBodyLower.add(middleBody);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.5, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'black', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        middleBody.position.set(0,0,0);
        middleBody.translateY(-0.5);
        middleBody.translateX(-0.1);
        middleBody.add(mesh);
        objects.push(middleBody);

        //middle body lower

        const middleBodyLower = new THREE.Group();
        middleBody.add(middleBodyLower);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.48, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        middleBodyLower.position.set(0,0,0);
        middleBodyLower.translateY(-0.3);
        middleBodyLower.add(mesh);
        objects.push(middleBodyLower);

        //lower body 

        const lowerBody = new THREE.Group();
        middleBodyLower.add(lowerBody);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.4, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'black', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        lowerBody.position.set(0,0,0);
        lowerBody.translateY(-0.2);
        lowerBody.translateX(0.05);
        lowerBody.add(mesh);
        objects.push(lowerBody);

        //sting

        const sting = new THREE.Group();
        lowerBody.add(sting);

        var geometry: THREE.BufferGeometry = new THREE.CylinderGeometry(0.2, 0, 1, 49, 7, false, Math.PI * 1.44, Math.PI * 2.00);
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        sting.position.set(0,0,0);
        sting.translateY(-0.6);
        sting.translateX(0.3);
        sting.rotateZ(0.5);
        sting.add(mesh);
        objects.push(sting);

        //neck joint

        const neckJoint = new THREE.Group();
        upperBody.add(neckJoint);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.1, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        neckJoint.position.set(0,0,0);
        neckJoint.translateY(0.5);
        neckJoint.translateX(0.5);
        neckJoint.add(mesh);
        objects.push(neckJoint);

        //middle head

        const middleHead = new THREE.Group();
        neckJoint.add(middleHead);

        var geometry: THREE.BufferGeometry = new THREE.CylinderGeometry(0.6, 0.3, 1, 50);
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        middleHead.position.set(0,0,0);
        middleHead.translateY(0.2);
        middleHead.rotateZ(1);
        middleHead.add(mesh);
        objects.push(neckJoint);

        //front head

        const frontHead = new THREE.Group();
        middleHead.add(frontHead);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.3, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        frontHead.position.set(0,0,0);
        frontHead.translateY(-0.47);
        frontHead.add(mesh);
        objects.push(frontHead);

        //rear head

        const rearHead = new THREE.Group();
        middleHead.add(rearHead);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.61, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        rearHead.position.set(0,0,0);
        rearHead.translateY(0.6);
        rearHead.add(mesh);
        objects.push(rearHead);

        //left eye 

        const leftEye = new THREE.Group();
        rearHead.add(leftEye);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.2, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'black', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        leftEye.position.set(0,0,0);
        leftEye.translateY(-0.3);
        leftEye.translateX(0.3);
        leftEye.translateZ(0.4);
        leftEye.add(mesh);
        objects.push(leftEye);

        //right eye 

        const rightEye = new THREE.Group();
        rearHead.add(rightEye);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.2, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'black', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        rightEye.position.set(0,0,0);
        rightEye.translateY(-0.3);
        rightEye.translateX(0.3);
        rightEye.translateZ(-0.4);
        rightEye.add(mesh);
        objects.push(leftEye);

        //left whisker

        const leftWhisker = new THREE.Group();
        rearHead.add(leftWhisker);

        var geometry: THREE.BufferGeometry = new THREE.CylinderGeometry(0.03, 0.03, 1, 49, 7, false, Math.PI * 1.44, Math.PI * 2.00);
        var material = new THREE.MeshPhongMaterial({ color: 'black', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        leftWhisker.position.set(0,0,0);
        leftWhisker.translateX(0.8);
        leftWhisker.translateZ(-0.7);
        leftWhisker.rotateX(0.5);
        leftWhisker.rotateY(0.5);
        leftWhisker.rotateZ(-2);
        leftWhisker.add(mesh);
        objects.push(leftWhisker);

        //right whisker

        const rightWhisker = new THREE.Group();
        rearHead.add(rightWhisker);

        var geometry: THREE.BufferGeometry = new THREE.CylinderGeometry(0.03, 0.03, 1, 49, 7, false, Math.PI * 1.44, Math.PI * 2.00);
        var material = new THREE.MeshPhongMaterial({ color: 'black', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        rightWhisker.position.set(0,0,0);
        rightWhisker.translateX(0.8);
        rightWhisker.translateZ(0.7);
        rightWhisker.rotateX(-0.5);
        rightWhisker.rotateY(-0.5);
        rightWhisker.rotateZ(-2);
        rightWhisker.add(mesh);
        objects.push(rightWhisker);

        //left arm joint 

        const leftArmJoint = new THREE.Group();
        leftArmJoint.name = "left arm joint"
        upperBody.add(leftArmJoint);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.2, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        leftArmJoint.position.set(0,0,0);
        leftArmJoint.translateY(0.2);
        leftArmJoint.translateX(0.08);
        leftArmJoint.translateZ(-0.6);
        leftArmJoint.add(mesh);
        objects.push(leftArmJoint);

        //left upper arm 

        const leftUpperArm = new THREE.Group();
        leftArmJoint.add(leftUpperArm);

        var geometry: THREE.BufferGeometry = new THREE.CylinderGeometry(0.09, 0.09, 0.7, 49, 7, false, Math.PI * 1.44, Math.PI * 2.00);
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        leftUpperArm.position.set(0,0,0);
        leftUpperArm.rotateX(0.5);
        leftUpperArm.translateY(-0.4);
        leftUpperArm.translateX(-0.01);
        leftUpperArm.translateZ(-0.1);
        leftUpperArm.add(mesh);
        objects.push(leftUpperArm);


        //left lower arm joint 

        const leftLowerArmJoint  = new THREE.Group();
        leftUpperArm.add(leftLowerArmJoint);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.15, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        leftLowerArmJoint.position.set(0,0,0);
        leftLowerArmJoint.translateY(-0.3);
        leftLowerArmJoint.translateX(0);
        leftLowerArmJoint.translateZ(0);
        leftLowerArmJoint.add(mesh);
        objects.push(leftLowerArmJoint);

        //left lower arm 

        const leftLowerArm = new THREE.Group();
        leftLowerArmJoint.add(leftLowerArm);

        var geometry: THREE.BufferGeometry = new THREE.CylinderGeometry(0.11, 0.11, 0.7, 49, 7, false, Math.PI * 1.44, Math.PI * 2.00);
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        leftLowerArm.position.set(0,0,0);
        leftLowerArm.rotateZ(0.3);
        leftLowerArm.translateY(-0.4);
        leftLowerArm.translateX(-0.01);
        leftLowerArm.translateZ(0);
        leftLowerArm.add(mesh);
        objects.push(leftLowerArm);

        //left hand

        const leftHand  = new THREE.Group();
        leftLowerArm.add(leftHand);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.15, 10);
        geometry.scale(1.2,1.2,1.2)
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );
        

        leftHand.position.set(0,0,0);
        leftHand.translateY(-0.3);
        leftHand.translateX(0);
        leftHand.translateZ(0);
        leftHand.add(mesh);
        objects.push(leftHand);

        //right arm joint 

        const rightArmJoint = new THREE.Group();
        upperBody.add(rightArmJoint);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.2, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        rightArmJoint.position.set(0,0,0);
        rightArmJoint.translateY(0.2);
        rightArmJoint.translateX(0.08);
        rightArmJoint.translateZ(0.6);
        rightArmJoint.add(mesh);
        objects.push(rightArmJoint);

        //right upper arm 

        const rightUpperArm = new THREE.Group();
        rightArmJoint.add(rightUpperArm);

        var geometry: THREE.BufferGeometry = new THREE.CylinderGeometry(0.09, 0.09, 0.7, 49, 7, false, Math.PI * 1.44, Math.PI * 2.00);
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        rightUpperArm.position.set(0,0,0);
        rightUpperArm.rotateX(-0.5);
        rightUpperArm.translateY(-0.4);
        rightUpperArm.translateX(-0.01);
        rightUpperArm.translateZ(0.1);
        rightUpperArm.add(mesh);
        objects.push(rightUpperArm);


        //right lower arm joint 

        const rightLowerArmJoint  = new THREE.Group();
        rightUpperArm.add(rightLowerArmJoint);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.15, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        rightLowerArmJoint.position.set(0,0,0);
        rightLowerArmJoint.translateY(-0.3);
        rightLowerArmJoint.translateX(0);
        rightLowerArmJoint.translateZ(0);
        rightLowerArmJoint.add(mesh);
        objects.push(rightLowerArmJoint);

        //right lower arm 

        const rightLowerArm = new THREE.Group();
        rightLowerArmJoint.add(rightLowerArm);

        var geometry: THREE.BufferGeometry = new THREE.CylinderGeometry(0.11, 0.11, 0.7, 49, 7, false, Math.PI * 1.44, Math.PI * 2.00);
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        rightLowerArm.position.set(0,0,0);
        rightLowerArm.rotateZ(0.3);
        rightLowerArm.translateY(-0.4);
        rightLowerArm.translateX(-0.01);
        rightLowerArm.translateZ(0);
        rightLowerArm.add(mesh);
        objects.push(rightLowerArm);

        //right hand

        const rightHand  = new THREE.Group();
        rightLowerArm.add(rightHand);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.15, 10);
        geometry.scale(1.2,1.2,1.2)
        var material = new THREE.MeshPhongMaterial({ color: 'gold', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        rightHand.position.set(0,0,0);
        rightHand.translateY(-0.3);
        rightHand.translateX(0);
        rightHand.translateZ(0);
        rightHand.add(mesh);
        
        objects.push(rightHand);

        //right wing joint 

        const rightWingJoint = new THREE.Group();
        rightWingJoint.name = "right wing joint";
        upperBody.add(rightWingJoint);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.1, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'white', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        rightWingJoint.position.set(0,0,0);
        rightWingJoint.translateY(0.2);
        rightWingJoint.translateX(-0.6);
        rightWingJoint.translateZ(0.2);
        rightWingJoint.add(mesh);
        objects.push(rightWingJoint);

        //right wing  

        const rightWing = new THREE.Group();
        rightWingJoint.add(rightWing);

        var geometry1: THREE.BufferGeometry = new THREE.CircleGeometry(1, 46, Math.PI * 1.28, Math.PI * 1.04);
        var geometry2: THREE.BufferGeometry = new THREE.CircleGeometry(1, 46, Math.PI * 1.28, Math.PI * 1.04);
        geometry1.rotateX(0);
        geometry1.rotateZ(-1);
        geometry1.rotateY(-3.1);
        
        geometry2.rotateX(0);
        geometry2.rotateZ(-1);
        geometry2.rotateY(0);
        var material = new THREE.MeshPhongMaterial({ color: 'white', flatShading: true } );
        var mesh1 = new THREE.Mesh( geometry1, material );
        var mesh2 = new THREE.Mesh( geometry2, material );

        rightWing.position.set(0,0,0);
        rightWing.translateY(0.7);
        rightWing.translateX(-0.5);
        rightWing.translateZ(0.5);
        rightWing.rotateZ(-1);
        rightWing.rotateY(0.5);
        rightWing.add(mesh1);
        rightWing.add(mesh2);
        objects.push(rightWing);

        //left wing joint 

        const lefttWingJoint = new THREE.Group();
        lefttWingJoint.name = "left wing joint"
        upperBody.add(lefttWingJoint);

        var geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.1, 10);
        var material = new THREE.MeshPhongMaterial({ color: 'white', flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );

        lefttWingJoint.position.set(0,0,0);
        lefttWingJoint.translateY(0.2);
        lefttWingJoint.translateX(-0.6);
        lefttWingJoint.translateZ(-0.2);
        lefttWingJoint.add(mesh);
        objects.push(lefttWingJoint);

        //left wing  

        const leftWing = new THREE.Group();
        lefttWingJoint.add(leftWing);

        var geometry1: THREE.BufferGeometry = new THREE.CircleGeometry(1, 46, Math.PI * 1.28, Math.PI * 1.04);
        var geometry2: THREE.BufferGeometry = new THREE.CircleGeometry(1, 46, Math.PI * 1.28, Math.PI * 1.04);
        geometry1.rotateX(0);
        geometry1.rotateZ(-1);
        geometry1.rotateY(-3.1);
        
        geometry2.rotateX(0);
        geometry2.rotateZ(-1);
        geometry2.rotateY(0);
        var material = new THREE.MeshPhongMaterial({ color: 'white', flatShading: true } );
        var mesh1 = new THREE.Mesh( geometry1, material );
        var mesh2 = new THREE.Mesh( geometry2, material );

        leftWing.position.set(0,0,0);
        leftWing.translateY(0.7);
        leftWing.translateX(-0.5);
        leftWing.translateZ(-0.5);
        leftWing.rotateZ(-1);
        leftWing.rotateY(-0.5);
        leftWing.add(mesh1);
        leftWing.add(mesh2);
        objects.push(leftWing);

        const dirLight1 = new THREE.DirectionalLight( 0xffffff );
		dirLight1.position.set( 1, 1, 1 );
		this.scene.add( dirLight1 );

		const dirLight2 = new THREE.DirectionalLight( 0x002288 );
		dirLight2.position.set( - 1, - 1, - 1 );
		this.scene.add( dirLight2 );

		const ambientLight = new THREE.AmbientLight( 0x222222 );
		this.scene.add( ambientLight );


        this.scene.add( objectRoot );

        objectRoot.rotateY(2)

    }

	/*
	Update the scene during requestAnimationFrame callback before rendering
    */
    delta: number = 0.05
    time1: number = 0

	updateScene(time: DOMHighResTimeStamp){
        if (this.time1 > 0.3) {
            this.delta = -this.delta
        } else if (this.time1 < 0) {
            this.delta = -this.delta
        }
        this.time1 = this.time1 + this.delta
        this.camera.translateZ(this.delta)
        this.camera.rotateY((-1) * this.delta / 10)
        this.scene.getObjectByName("left arm joint")?.rotateX(this.delta / 10)
        this.scene.getObjectByName("left wing joint")?.rotateX(-this.delta * 10)
        this.scene.getObjectByName("right wing joint")?.rotateX(this.delta * 10)
        

    }
}

// a global variable for our state.  We implement the drawing as a class, and 
// will have one instance
var myDrawing: Drawing;

// main function that we call below.
// This is done to keep things together and keep the variables created self contained.
// It is a common pattern on the web, since otherwise the variables below woudl be in 
// the global name space.  Not a huge deal here, of course.

function exec() {
    // find our container
    var div = document.getElementById("drawing");

    if (!div) {
        console.warn("Your HTML page needs a DIV with id='drawing'")
        return;
    }

    // create a Drawing object
    myDrawing = new Drawing(div);
}

exec()