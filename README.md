# Svelte starter kit

Svelte starter kit — router, global state management with unit and end-to-end testing included.

### Gettting started
Requires Node.js 8.4.0+ 

```bash
npx degit rob-balfre/svelte-starter-kit my-project
cd my-project
npm i
npm run dev
```

Open [http://localhost:9000](http://localhost:9000)

To run unit tests open a separate console
```bash
npm run unit-test
```

End-to-end tests are powered by [cypress](https://www.cypress.io/) (remember to also run the dev server).
```bash
npm run e2e-test
```

### State Management
* [Svelte store](https://svelte.technology/guide#state-management)
* [Example](https://github.com/rob-balfre/svelte-starter-kit/tree/master/src/store/index.js)

### Router
* [Roadtrip](https://github.com/Rich-Harris/roadtrip)
* [Example](https://github.com/rob-balfre/svelte-starter-kit/tree/master/src/routes/index.js)

### Unit Testing
* [Tape](https://github.com/substack/tape)
* [Example](https://github.com/rob-balfre/svelte-starter-kit/tree/master/src/store/methods/methods.spec.js)
 
### End-to-end Testing
* [Cypress](https://www.cypress.io/)
* [Example](https://github.com/rob-balfre/svelte-starter-kit/tree/master/cypress/integration/Counter.spec.js)
 
### IDE Support
WebStorm IDE has some quirks with Svelte handlebar syntax. To fix update these settings:
* Preferences > Inspections > Disable all XML inspections
* Preferences > Inspections > Disable Unknown HTML tag attribute
* Preferences > Inspections >  Disable HTML file reference problems
