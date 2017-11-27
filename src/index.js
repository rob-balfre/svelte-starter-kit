import StateRouter from 'abstract-state-router';
import SvelteRenderer from 'svelte-state-renderer';
import routes from './routes/';
import store  from './store';

const stateRouter = StateRouter(SvelteRenderer({ store }), document.querySelector('body'));

stateRouter.setMaxListeners(20);

routes(stateRouter);

stateRouter.evaluateCurrentRoute('home');