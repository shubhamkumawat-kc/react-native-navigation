import styles from "./styles";
import React, { Component } from "react";
import { Text, View ,Button} from "react-native";

class OptionsScreen extends Component {
  static navigationOptions = {
    headerTitle: "Options"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>This is the Options Screen.</Text>


        <View style={{flexDirection:'row',justifyContent:'center',width:"100%"}}>
        <Button title={'Home'} onPress={() => navigate("HomeScreen")} />
        <Button title={'LOG OUT'} onPress={() => navigate("Login")} />
        </View>
      </View>
    );
  }
}

export default OptionsScreen;
