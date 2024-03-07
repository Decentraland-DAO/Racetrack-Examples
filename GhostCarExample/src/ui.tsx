import { ReactEcsRenderer } from '@dcl/sdk/react-ecs'
import { Countdown } from '@vegascity/racetrack/src/ui'

import { UiCanvasInformation, engine } from '@dcl/sdk/ecs'
import * as  ui from 'dcl-ui-toolkit'


const uiComponent = () => (
  [
    Countdown.Render(),
    ui.render(),
  ]
)

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
  engine.addSystem(UIScaler)
}

function UIScaler() {
  let canvas = UiCanvasInformation.get(engine.RootEntity)
  UIDimensions.width = canvas.width
  UIDimensions.height = canvas.height
  UIDimensions.minScale = Math.min(canvas.width, canvas.height)
  UIDimensions.scaler = UIDimensions.minScale / 2000
}

export let UIDimensions: any = {
  width: 0,
  height: 0,
  minScale: 0,
  scaler: 0
} 