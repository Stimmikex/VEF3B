var camera, scene, renderer;
var geometry, material, mesh;
var mouse = new THREE.Vector2(), INTERSECTED;

init();
animate();

function init() {
    /*This is the scene*/
	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 0.2, 0.9, 0.2);
	material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );

    /*This is the camera*/
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;

    // controls = new THREE.TrackballControls( camera );
    
    // controls = new THREE.OrbitControls( camera, renderer.domElement );
    // controls.target.set( 0, radius, 0 );
    // controls.update();

    document.addEventListener( 'mousedown', onDocumentMouseMove, false );

    document.body.appendChild( renderer.domElement );


}

var cube_speed = 0.02;
/*This is where screen is rendered*/


function onDocumentMouseMove(event) {
    event.preventDefault()
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    cube_speed *= -1.5;
}


function animate() {

	requestAnimationFrame( animate );
    /*This is where the animaton happens*/
    /*This is the rotation of the mesh*/
    mesh.rotation.x += 0.0;
    mesh.rotation.y = cube_speed + 0.02;
    /*This is the size of the mesh*/
    mesh.scale.set(2,2,2);

    console.log(cube_speed);

	render();


}
function render() {
    renderer.render( scene, camera );
}