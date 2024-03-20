# **HOW TO CREATE A TRACK**

## Track example
 
To install the Racetrack npm package:
 
 ```
 npm i @vegascity/racetrack
 ```
 
 Then you have to set it up by calling the setup function.
 
```ts
 setup(movePlayerTo, triggerSceneEmote)
```

To create a playable track you must first create an InputManager instance, which allows you to control the car.

```ts
new InputManager()
```

Next, create a TrackManager instance. You can do this by:  

```ts
new TrackManager({
	position: Vector3.Zero(),
	gameMode: GameMode.DRIVE,
	rotation: Quaternion.fromEulerDegrees(0, 180, 0),
    trackConfigs: [
        {
            index: 0,
            guid: trackGuid,
            data: trackData
        }
    ]
})
```
  
You can set gameMode to DRIVE if you want a free-form playable track, with a car that you can enter and exit at any time. Setting the gameMode to RACE is also a viable option, but that adheres to a typical racing stucture where the car can only be driven once the race starts, and the player exists the car when the race ends.
Make sure to pass the json file in data under trackConfigs (the json file that was exported via the Blender add-on). You can have multiple tracks under trackConfigs, but make sure to index them sequentially, starting at 0. Each track also needs a unique guid, this can be any string.

Next, load the track using the Load method, which expects the track guid as a parameter.

```ts
TrackManager.Load(trackGuid)
```

Once the track has been loaded you can then create a car in the scene by using the CarFactory class. For a reminder on how to create a car, please refer to [CARS - CREATION AND IMPLEMENTATION](../CarExample/README.md).

Don't forget to set Car.activeCarIndex to 0.