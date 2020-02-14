export type Bundle<T> = {
  [TName in keyof T]: T[TName] extends Worker<infer TFlags, infer TPorts>
    ? Worker<TFlags, TPorts>
    : T[TName] extends Sandbox
    ? Sandbox
    : T[TName] extends Element<infer TFlags, infer TPorts>
    ? Element<TFlags, TPorts>
    : T[TName] extends Application<infer TFlags, infer TPorts>
    ? Application<TFlags, TPorts>
    : T[TName] extends Document<infer TFlags, infer TPorts>
    ? Document<TFlags, TPorts>
    : never
}

export type Worker<TFlags, TPorts> = {
  init: (config: {flags: TFlags}) => Instance<TPorts>
}

export type Sandbox = {
  init: (config: {node: HTMLElement}) => Instance<{}>
}

export type Element<TFlags, TPorts> = {
  init: (config: {node: HTMLElement, flags: TFlags}) => Instance<TPorts>
}

export type Application<TFlags, TPorts> = {
  init: (config: {node: HTMLElement, flags: TFlags}) => Instance<TPorts>
}

export type Document<TFlags, TPorts> = {
  init: (config: {flags: TFlags}) => Instance<TPorts>
}

export type Instance<TPorts> = {
  ports: Ports<TPorts>
}

export type Ports<T> = {
  [TPort in keyof T]: T[TPort] extends IncomingPort<infer TPayload>
    ? IncomingPort<TPayload>
    : T[TPort] extends OutgoingPort<infer TPayload>
    ? OutgoingPort<TPayload>
    : never
}

export type IncomingPort<TPayload> = {
  send: (payload: TPayload) => void
}

export type OutgoingPort<TPayload> = {
  subscribe: (callback: (payload: TPayload) => void) => void
}