# **HOW TO PROGRAM A GHOST CAR**

To record your best laps to replay again as a ghost car you will need to call the ghost recorder to start recording in the onStartEvent in the eventsCallbacks of the TrackManager.

This recording will automatically stop once the race is finished or abandoned if the user quits before finishing.

The start, end and quit call back can be used to replay the previous track's ghost car too. First we check to see if the ghostRecorder class has any data and if it does we start playing the ghost.

  
```ts
eventCallbacks: {
onStartEvent: () => {
	if (TrackManager.ghostRecorder.currentGhostData.points.length  >  0) {
		TrackManager.ghostCar.startGhost()
	}
	TrackManager.ghostRecorder.start(trackGuid)
},
onEndEvent: () => {
	TrackManager.ghostCar.endGhost()
},
onQuitEvent: () => {
	TrackManager.ghostCar.endGhost()
},
```
The ghost car model used is specified at the file path of **models/ghostCar.glb**