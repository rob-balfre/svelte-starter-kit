import store from './store';
import App from './components/App/App.html';
import routes from './routes';

const app = new App({
  target: document.querySelector('main'),
  store
});

routes();
