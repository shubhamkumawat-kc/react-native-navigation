
import styles from "./styles";
import React, { Component } from "react";
import { Platform, Text, View,Button } from "react-native";
// import { Button, Icon } from "react-native-elements";

import Icon from 'react-native-vector-icons/Feather';
import { TabScene } from "react-navigation";

class RegisterScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'registerTitle',
    tabBarIcon: ({ tintColor }= TabScene) => {
      let iconName = Platform.select({ ios: "ios-person-add", android: "md-person-add" });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the RegisterScreen.</Text>
      </View>
    );
  }
}

export default RegisterScreen;
