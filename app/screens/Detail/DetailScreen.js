import styles from "./styles";
import React, { Component } from "react";
import { Text, View,Button } from "react-native";

class DetailScreen extends Component {
 

  render() {

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{marginBottom:20}}>This is the Detail Screen.</Text>

        <View style={{flexDirection:'row',justifyContent:'space-evenly',width:"100%"}}>
        <Button title={'Home'} onPress={() => navigate("HomeScreen")} />
        <Button title={'options'} onPress={() => navigate("OptionsScreen")} />
        </View>
      </View>
    );
  }
}

export default DetailScreen;
