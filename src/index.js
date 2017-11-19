import StateRouter from 'abstract-state-router';
import SvelteRenderer from 'svelte-state-renderer';
import routes from './state/routes/';

const stateRouter = StateRouter(SvelteRenderer(), document.querySelector('body'));

stateRouter.setMaxListeners(20);

routes(stateRouter);

stateRouter.evaluateCurrentRoute('home');