import React from 'react';
import {HomeScreen} from './components/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileScreen} from './components/screens/ProfileScreen';
import {LiveScreen} from './components/screens/LiveScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import styled from 'styled-components/native';

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      screenOptions={route => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#343434',
          borderTopColor: '#343434',
          paddingBottom: 12,
        },
        tabBarIcon: ({focused}) => {
          let iconName;

          switch (route.map) {
            case 'HomeScreen':
              iconName = 'home';
              break;
            case 'ProfileScreen':
              iconName = 'home';
              break;
            case 'LiveScreen':
              iconName = 'home';
              break;
            default:
              break;
          }

          return (
            <TabBarIconContainer focused={focused}>
              <Entypo name={iconName} size={24} color="#ffffff" />
            </TabBarIconContainer>
          );
        },
      })}>
      <TabNav.Screen
        name="HomeScreen"
        tabBarShowLabel={false}
        component={HomeScreen}
      />
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
        }}>
        <AppStack.Screen name="App" component={TabNavScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const TabBarIconContainer = styled.View``;
