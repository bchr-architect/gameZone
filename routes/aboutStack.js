import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';
import React from 'react';
import Header from '../shared/header';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({navigation}) => {
      return {
        header: () => <Header title="About GameZone" navigation={navigation} />,
      };
    },
  },
};
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      height: 60,
    },
  },
});

export default AboutStack;
