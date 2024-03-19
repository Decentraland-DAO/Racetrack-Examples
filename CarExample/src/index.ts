import { Color4, Quaternion, Vector3 } from "@dcl/sdk/math";
import { Car, CarFactory } from "@vegascity/racetrack/src/car";
import { GameMode, InputManager, TrackManager } from "@vegascity/racetrack/src/racetrack";
import { movePlayerTo, triggerSceneEmote } from "~system/RestrictedActions"
import { setup } from "@vegascity/racetrack/src/utils";
import { Material, MeshRenderer, Transform, engine } from "@dcl/sdk/ecs";

export function main() {
    // set up the racetrack npm library
    setup(movePlayerTo, triggerSceneEmote)

    // define an input manager
    new InputManager()

    // define a track manager
    new TrackManager({
        position: Vector3.Zero(),
        gameMode: GameMode.DRIVE
    })

    // create a car
    CarFactory.create(
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
        }, Vector3.create(16, 2, 16), 0, Vector3.Zero()
    )

    // Set active car index
    Car.activeCarIndex = 0

    // create a ground
    let groundEntity = engine.addEntity()
    Transform.create(groundEntity, {
        position: Vector3.create(24, 0, 24),
        rotation: Quaternion.fromEulerDegrees(90, 0, 0),
        scale: Vector3.create(48, 48, 1)
    })
    MeshRenderer.setPlane(groundEntity)
    Material.setPbrMaterial(groundEntity, {
        albedoColor: Color4.Black()
    })
}
