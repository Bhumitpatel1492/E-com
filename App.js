import React from 'react';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
// import Root from './Src/Navigation/Root';
// import store from './Src/redux/Store';
import colors from './Src/Utils/Colours';
import Root from './Src/Navigation/Root';

const App = () => {

  return (

    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.sky} barStyle="dark-content" />
      <Root />
    </View>

  );
};

export default App;
