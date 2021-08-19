import React from 'react';
import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from './components/screens/HomeScreen';
import {ProfileScreen} from './components/screens/ProfileScreen';
import {LiveScreen} from './components/screens/LiveScreen';
import {GameScreen} from './components/screens/GameScreen';

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#343434',
          borderTopColor: '#343434',
          paddingBottom: 12,
        },
        tabBarIcon: ({focused}) => {
          let iconName;

          switch (route.name) {
            case 'HomeScreen':
              iconName = 'home';
              break;
            case 'ProfileScreen':
              iconName = 'user';
              break;
            case 'LiveScreen':
              iconName = 'game-controller';
              break;
            default:
              iconName = 'home';
              break;
          }

          return (
            <TabBarIconContainer focused={focused}>
              <Entypo name={iconName} size={24} color="#ffffff" />
            </TabBarIconContainer>
          );
        },
      })}>
      <TabNav.Screen name="HomeScreen" component={HomeScreen} />
      <TabNav.Screen name="LiveScreen" component={LiveScreen} />
      <TabNav.Screen name="ProfileScreen" component={ProfileScreen} />
    </TabNav.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
        }}>
        <AppStack.Screen name="App" component={TabNavScreen} />
        <AppStack.Screen name="GameScreen" component={GameScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const TabBarIconContainer = styled.View`
  background-color: ${props => (props.focused ? '#819ee5' : '#343434')};
  padding: 2px 16px;
  border-radius: 32px;
`;
