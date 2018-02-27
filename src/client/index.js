import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import combineReducers from './reducers/index';
import App from './App';

// create redux store with reducers.
const store = createStore(combineReducers);

// setup client-side rendering method.
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) module.hot.accept('./App', () => render(App));
