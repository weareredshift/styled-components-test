import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

const attachStoreToWindowLocally = store => next => action => {
  const local = process.env.NODE_ENV === 'development'
    && window.location.href.slice(0, 21) === 'http://localhost:3000';

  if (local) { window.store = store; }

  return next(action);
};

const middleware = [thunk, routerMiddleware(history), attachStoreToWindowLocally];

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  process.env.NODE_ENV === 'development' && window.devToolsExtension ?
    window.devToolsExtension() :
    f => f
)(createStore);

function configureStore(preloadedState) {
  const store = finalCreateStore(rootReducer, preloadedState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}

export default configureStore();
