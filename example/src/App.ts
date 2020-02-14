import * as Elm from 'elm-types'

export type App = Elm.Document<Flags, Ports>

export type Flags = {
  initialCounter: number
}

export type Ports = Elm.Ports<{
  requestIncrement: Elm.IncomingPort<number>
  respondIncrement: Elm.OutgoingPort<number>
}>