# **CARS - CREATION & IMPLEMENTATION**

## 1.  Blender

How the blender file is organised and why. Insights about the creation of the cars. [Video](https://drive.google.com/file/d/1NudqanMjWEJcDP0Q8aJ1CBFinV2fPFJa/view?usp=drive_link)
    
## 2.  Car viewer example
 
To install the Racetrack npm package:
 
 ```
 npm i @vegascity/racetrack
 ```
 
 Then you have to set it up by calling the setup function.
 
```ts
 setup(movePlayerTo, triggerSceneEmote)
```

To load a car into the scene you must first create an InputManager instance, which allows you to control the car.

```ts
new InputManager()
```

Next, create a TrackManager instance. You can do this by:  

```ts
new TrackManager({
	position: Vector3.Zero(),
	gameMode: GameMode.DRIVE
})
```
  
Make sure that gameMode is set to DRIVE if you just want a scene that allows you to create and drive a car. The other mode is RACE, and that allows you to create a playable race track.
Once the track manager has been initialised you can then create a car in the scene by using the CarFactory class:  
  
```ts
CarFactory.create(Vector3.create(16, 2, 16), 0,
{
	mass:  150,
	accelerationF:  12,
	accelerationB:  12,
	deceleration:  8,
	minSpeed:  -14,
	maxSpeed:  25,
	steerSpeed:  1.5,
	grip:  0.3,

	carGLB:  "models/car.glb",
	carColliderGLB:  "models/carCollider.glb",
	leftWheelGLB:  "models/wheel_left.glb",
	rightWheelGLB:  "models/wheel_right.glb",
	steeringWheelGLB:  "models/steering_wheel.glb",

	wheelX_L:  0.95,
	wheelX_R:  0.95,
	wheelZ_F:  1.34,
	wheelZ_B:  1.58,
	wheelY:  -0.29,
	carScale:  0.7,

	steeringWheelPosition:  Vector3.create(0.80, 0.17, 0.57),
	firstPersonCagePosition:  Vector3.create(-0.2, -1.2, 0),
	thirdPersonCagePosition:  Vector3.create(0, 0, -1.1)
})
```
  
When the car is created several important parameters are passed that affect the car's handling and look.

The first section of parameters from mass to grip affect how the car is moved, from how fast it travels to how well it can turn.
The 2nd set of parameters are the 3D models used to display the car in the game engine.
The 3rd set of parameters are used to describe the wheel positions and scale of the car in the game.
The 4th set of parameters are used to set the steering wheel up in the correct location relative to the car and to tell the engine where to teleport the user when switching between first and third person views.

The final step is to set Car.activeCarIndex to 0. If you create multiple cars, you can choose which car you want to be active. There can only be one active car at a time.

```ts
Car.activeCarIndex = 0
```