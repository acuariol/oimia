import React from 'react';
import { Root } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import todoApp from './src/store/reducers';

// pages
import MainScreen from './src/pages/Main';
import GuideScreen from './src/pages/Guide';
import LoginScreen from './src/pages/Login/index';
import WelcomeScreen from './src/pages/Welcome';



const store = createStore(todoApp, applyMiddleware(thunk));
const Stack = createStackNavigator();


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
              <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
              <Stack.Screen name="Guide" options={{ headerShown: false }} component={GuideScreen} />
              <Stack.Screen name="Main" options={{ headerShown: false }} component={MainScreen} />
              <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Root>
      </Provider>
    );
  }
}

export default App;
