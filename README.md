# drizzle-node

The package provides the performance of *drizzle* in the [Drizzle](https://github.com/trufflesuite/drizzle "Drizzle") environment.

Creates a window browser shell using the [window](https://github.com/lukechilds/window "Window") module.

## Getting Started
 - install module

``
npm i --save drizzle-node
``

 - Using
 
 ```js
  import { Drizzle } from 'drizzle-node' // es6 syntax
  var Drizzle = require('drizzle-node') // es5 syntax
  
  //...
  
  const drizzle = new Drizzle(options);
 ```
 
Learn more about using **drizzle** [here](https://truffleframework.com/docs/drizzle/overview). 
 
 ___
 
## Custom

Current version *drizzle* - **1.3.3**.

If the version you are using is different, you can use the **createDrizzleWrapper** function.

### Example:

```js
  import { Drizzle as DrizzleVersion } from 'drizzle' // Your module version
  import { createDrizzleWrapper } from 'drizzle-node'
  const Drizzle = createDrizzleWrapper(DrizzleVersion)
  // ...
```
