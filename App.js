import React from 'react';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import Root from './Src/Navigation/Root';
import store from './Src/redux/Store';
import colors from './Src/Utils/Colours';

const App = () => {

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={colors.sky} barStyle="dark-content" />
        <Root />
      </View>
    </Provider>
  );
};

export default App;
