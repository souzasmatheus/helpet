import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import Save from './src/components/Save';
import NavigateIcon from './src/components/NavigateIcon';

import { sizes, colors } from './config/theme';
import Star from './assets/images/star.png';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Movies"
            component={HomeScreen}
            options={({ route, navigation }) => ({
              headerRight: () => (
                <NavigateIcon
                  style={{ marginRight: sizes.margin / 2 }}
                  imgSource={Star}
                  goTo="Favorites"
                />
              ),
            })}
          />
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
          <Stack.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
              headerTintColor: colors.yellow,
              headerTitleStyle: {
                color: '#000000',
              },
              headerBackTitle: ' ',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
