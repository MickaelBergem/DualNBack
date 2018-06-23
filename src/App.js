import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';
import RootStack from './RootStack';

const store = createStore(rootReducer);

export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
