# elm-types
TypeScript type definitions for Elm bundled applications.

```
npm install -D elm-types
```

## Usage:

1. First create type definitions for your application:
```typescript
// App.ts
import * as Elm from 'elm-types'

export type App = Elm.Document<Flags, Ports>

export type Flags = {}

export type Ports = Elm.Ports<{
  sayHello: Elm.IncomingPort<string>
}>

```

2. Then type definitions for the .elm file. This only applies if you are using a bundler such as Parcel, Webpack, Rollup, etc, where you import the .elm file directly:
```typescript
// App.elm.d.ts (must be placed next to your App.elm file)
import {Bundle} from 'elm-types'
import {App} from './App.ts'

export const Elm: Bundle<{App: App}>
```

3. Finally import the .elm file. If everything worked correctly, all the code below will be correctly typed.
```typescript
// main.ts
import {Elm} from './App.elm'

const app = Elm.App.init({
  flags: {}
})

app.ports.sayHello.send('Hello from TypeScript!')
```

Check out `example/` for a complete setup using Parcel.