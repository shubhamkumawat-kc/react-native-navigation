import styles from "./styles";
import React, { PureComponent } from "react";
import { ScrollView } from "react-native";
import { Platform, Text, View,Button } from "react-native";
// import { Button, Icon } from "react-native-elements";

import Icon from 'react-native-vector-icons/Feather';
import {
  DrawerItems,
  NavigationInjectedProps,
  SafeAreaView,
  withNavigation
} from "react-navigation";

class BurgerMenu extends PureComponent {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
        <ScrollView>
          <DrawerItems {...this.props} />
        </ScrollView>
        <Button
          icon={{ name: "md-log-out", type: "ionicon" }}
          title={logOut}
          iconContainerStyle={styles.icon}
          buttonStyle={styles.button}
          titleStyle={styles.title}
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        />
      </SafeAreaView>
    );
  }
}

export default withNavigation(BurgerMenu);
