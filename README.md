# Svelte starter kit

Svelte starter kit — router, state management and testing included.

### Development
Requires Node.js 8.4.0+ 

```bash
npx degit rob-balfre/svelte-starter-kit my-project
npm i
npm run dev
```

Open [http://localhost:9000](http://localhost:9000)

Run tests in a separate console
```bash
npm run test
```

### State Management
* [redux-zero](https://github.com/concretesolutions/redux-zero)
* [Svelte example](https://github.com/concretesolutions/redux-zero/tree/master/examples/svelte/counter)

### Router
* [abstract-state-router](https://github.com/TehShrike/abstract-state-router)
* [svelte-state-renderer](https://github.com/TehShrike/svelte-state-renderer)
* [Svelte example](https://github.com/TehShrike/state-router-example/tree/efa9f57c4bf436c2379d7aa562874699a6e82a8a/implementations/svelte)

### Testing
* [Tape](https://github.com/substack/tape)
* [Svelte example](https://github.com/saibotsivad/svelte-panel-click/blob/master/test.js)
 
### IDE Support
WebStorm IDE has some quirks with Svelte handlebar syntax. To fix update these settings:
* Preferences > Inspections > Disable all XML inspections
* Preferences > Inspections > Disable Unknown HTML tag attribute
* Preferences > Inspections >  Disable HTML file reference problems
