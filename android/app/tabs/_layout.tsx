import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Contact') {
          iconName = focused ? 'call' : 'call-outline';
        } else if (route.name === 'About') {
          iconName = focused ? 'information-circle' : 'information-circle-outline';
        }

        // Return the icon component
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#008FE7',
      tabBarInactiveTintColor: '#416074',
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};
