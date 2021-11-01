import Navigator from "./navigation/Navigator";
import React, { Component } from "react";
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import BurgerMenu from "./components/BurgerMenu";
import DetailScreen from "./screens/Detail";
import HomeScreen from "./screens/Home";
import OptionsScreen from "./screens/Options";
// import LoadingScreen from "./screens/Loading";
import LoginScreen from "./screens/Login";
import PasswordResetScreen from "./screens/PasswordReset";
import RegisterScreen from "./screens/Register";
import SettingsScreen from "./screens/Settings";

const MainStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,params:{BurgerMenu}
  }, 
  OptionsScreen : {
    screen: OptionsScreen
  },
   DetailScreen : {
    screen: DetailScreen
  },
});
const LoginStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen},
  PasswordResetScreen : {
    screen: PasswordResetScreen
  },
  
});

const BottomMainTab= createBottomTabNavigator({  
  AppNavigator:{screen:MainStack},
  SettingsScreen:{screen:SettingsScreen},
},
{
  initialRouteName: "AppNavigator"
})

const BottomPassTab= createStackNavigator({  
  Login:{screen:LoginStack},
  RegisterScreen:{screen:RegisterScreen},
},
 {
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
}
)
const AppSwitchNavigator = createStackNavigator({
  BottomMainNaviTab: {screen: BottomMainTab},
  BottomPassNaviTab: {screen: BottomPassTab},
 
},{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
},
{
  initialRouteName: "BottomPassNaviTab"
});
export default createAppContainer(AppSwitchNavigator);