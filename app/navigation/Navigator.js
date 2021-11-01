import BurgerMenu from "../components/BurgerMenu";
import DetailScreen from "../screens/Detail";
import HomeScreen from "../screens/Home";
import OptionsScreen from "../screens/Options";
import LoadingScreen from "../screens/Loading";
import LoginScreen from "../screens/Login";
import PasswordResetScreen from "../screens/PasswordReset";
import RegisterScreen from "../screens/Register";
import SettingsScreen from "../screens/Settings";
import React from "react";
import { Platform } from "react-native";

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Feather';
import {
  NavigationScreenProps
} from "react-navigation";


const HomeStack = createBottomTabNavigator(
  {
    DetailScreen:{screen:DetailScreen},
    HomeScreen:{screen: HomeScreen},
    OptionsScreen:{screen:OptionsScreen} 
},
  { initialRouteName: "HomeScreen" }
);

HomeStack.navigationOptions = ({ navigation }= NavigationScreenProps) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  let drawerLockMode = "unlocked";
  if (navigation.state.index > 0) {
    drawerLockMode = "locked-closed";
  }

  return {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" type="ionicon" color={tintColor} />
    ),
    tabBarVisible,
    drawerLockMode,
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-home" type="ionicon" color={tintColor} />
    )
  };
};

const SettingsStack = createStackNavigator(
  {
    SettingsScreen:{screen:SettingsScreen} 
  });

SettingsStack.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="ios-cog" type="ionicon" color={tintColor} />,
  drawerIcon: ({ tintColor }) => <Icon name="md-cog" type="ionicon" color={tintColor} />
};

const MainNavigator = Platform.select({
  android: createDrawerNavigator(
    { 
      Home:{screen:HomeStack},
      Settings:{screen:SettingsStack} 
    },
    {
      contentComponent: BurgerMenu 
    }
  )
});

const LoginStack = createStackNavigator(
  { Login:{screen:LoginScreen},
    PasswordResetScreen:{screen:PasswordResetScreen}
  },
  {
      initialRouteName: 'Login',
  },
);
LoginStack.navigationOptions = ({ navigation }= NavigationScreenProps) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({ ios: "ios-log-in", android: "md-log-in" });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    },
    tabBarVisible
  };
};

const AuthTabs = createBottomTabNavigator({ LoginStack, RegisterScreen });

const RootSwitch = createSwitchNavigator({ LoadingScreen, AuthTabs, MainNavigator });

export default RootSwitch;
