import {Elm} from './App.elm'

const app = Elm.App.init({
  flags: {
    initialCounter: 0
  }
})

app.ports.respondIncrement.subscribe(console.log)

setInterval(() => app.ports.requestIncrement.send(1), 1000)
