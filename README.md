<center >

<img src="./src/rabbit.png" width='200' >
</img>

# Rabbit.js

An extensible Text Editor library for javascript

Aimed to be small, simple, efficient and easy to extend.

</center>

Example Rabbit setup

```js
import { Rabbit } from "rabbit";

// creating a Rabbit instance

const BigFatRabbit = new Rabbit();

BigFatRabbit.installOn("pub");
```

Now you will get a working text editor, which comes with default actions and tools.

## Features of Rabbit

Rabbit big has ears, two big tooths, huh no sorry. i mean

- Strong Type system (typescript)
- Simple abstraction interface for
  - actions (event system)
  - tools (user input system)

which makes rabbit very easy to extend

- and other part of rabbits ...

next

extending Rabbit

```js
// synthetic actions

// actions are attach to their editor,the document object model or fired synthetically
BigFatRabbit.installAction("synthetic-grass", () => {
  console.log("grass");
});

// tool appears as a button on the toolbar
BigFatRabbit.installTool("custom", {
  text: "grass",
  tooling() {
    BigFatRabbit.fireSyntheticAction("synthetic-grass");
  },
});
```
# Rabbit
