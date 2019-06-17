import React from 'react';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './src/controllers/ReduxManager'

import NavigationController from './src/controllers/NavigationController'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationController/>
        </PersistGate>
      </Provider>
    );
  }
}