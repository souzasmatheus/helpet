import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import Save from './src/components/Save';

import { sizes, colors } from './config/theme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Movies" component={HomeScreen} />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={({ route }) => ({
              title: route.params.title,
              headerTintColor: colors.yellow,
              headerTitleStyle: {
                color: '#000000',
              },
              headerBackTitle: ' ',
              headerBackTitleStyle: {
                color: colors.yellow,
              },
              headerRight: () => (
                <Save style={{ marginRight: sizes.margin / 2 }} />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
