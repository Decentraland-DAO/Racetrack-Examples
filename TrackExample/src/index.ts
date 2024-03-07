import { Quaternion, Vector3 } from "@dcl/sdk/math";
import { CarFactory } from "@vegascity/racetrack/src/car";
import { GameMode, TrackManager } from "@vegascity/racetrack/src/racetrack";
import { movePlayerTo, triggerSceneEmote } from "~system/RestrictedActions"
import { setup } from "@vegascity/racetrack/src/utils";
import * as trackData from "../data/track_01.json"

const trackGuid = "6B29FC40-CA47-1067-B31D-00DD010662DA"

export function main() {
    // set up the racetrack npm library
    setup(movePlayerTo, triggerSceneEmote)

    // define a track manager
    new TrackManager({
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

    // load the track
    TrackManager.Load(trackGuid)

    // create a car
    CarFactory.create(Vector3.create(30, 2, 8), 90,
        {
            mass: 150,
            accelerationF: 12,
            accelerationB: 12,
            deceleration: 8,
            minSpeed: -14,
            maxSpeed: 25,
            steerSpeed: 1.5,
            grip: 0.3,

            carGLB: "models/car.glb",
            carColliderGLB: "models/carCollider.glb",
            leftWheelGLB: "models/wheel_left.glb",
            rightWheelGLB: "models/wheel_right.glb",
            steeringWheelGLB: "models/steering_wheel.glb",

            wheelX_L: 0.95,
            wheelX_R: 0.95,
            wheelZ_F: 1.34,
            wheelZ_B: 1.58,
            wheelY: -0.29,
            carScale: 0.7,

            steeringWheelPosition: Vector3.create(0.80, 0.17, 0.57),
            firstPersonCagePosition: Vector3.create(-0.2, -1.2, 0),
            thirdPersonCagePosition: Vector3.create(0, 0, -1.1)
        }
    )
}
