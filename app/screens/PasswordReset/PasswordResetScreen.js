
import styles from "./styles";
import React, { Component } from "react";
import { Text, View , Button } from "react-native";
// import { Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";

class PasswordResetScreen extends Component{
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ paddingBottom: 20 }}>This is the PasswordResetScreen.</Text>
        <Button
          title={'backToLogin'}
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        />
      </View>
    );
  }
}

export default PasswordResetScreen;
