
import styles from "./styles";
import React, { Component } from "react";
import { Platform, Text, View,Button } from "react-native";
// import { Button, Icon } from "react-native-elements";

import Icon from 'react-native-vector-icons/Feather';
import { NavigationScreenProps } from "react-navigation";

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }= NavigationScreenProps) => ({
    headerTitle:'Home Title',
    headerLeft: Platform.select({
      android: (
        <Icon
          name="menu"
          type="ionicon"
          size={35}
          Style={[styles.icon]}
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          backgroundColor:'#262626',
          paddingLeft:50,
          paddingTop:120
          
        }}><View style={{
          flex: 1,
          alignItems: "flex-start",
          backgroundColor:'#262626',
          paddingLeft:50
          
        }}>
        <Text style={{color:'#FF6E01'}}>hello there.</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{color:'#FFFFFF'}}>welcome to </Text>
          <Text style={{color:'#FF6E01'}}>Home Screen.</Text>
          </View></View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',width:"100%",paddingBottom:60}}>
        <Button title={'Detail'} onPress={() => navigate("DetailScreen")} />
        <Button title={'Options'} onPress={() => navigate("OptionsScreen")} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
