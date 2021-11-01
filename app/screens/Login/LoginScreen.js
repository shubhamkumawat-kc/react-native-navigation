
import styles from "./styles";
import React, { Component } from "react";
import { Platform, Text,TextInput ,View,Button } from "react-native";
// import { Button, Icon } from "react-native-elements";

import Icon from 'react-native-vector-icons/Feather';
import { NavigationScreenProps } from "react-navigation";

class LoginScreen extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}> 
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
        <Text style={{color:'#FF6E01'}}>Login Screen.</Text>
        </View>
        <TextInput
            style={{color:'#FF6E01',backgroundColor:'#FFFFFF',width:320,alignSelf:'center',marginLeft:-50,marginTop:20}}
            placeholder="Enter user name"
            placeholderTextColor={"#FF6E01"}
            maxLength={25}
            
        /><TextInput
            style={{color:'#FF6E01',backgroundColor:'#FFFFFF',width:320,alignSelf:'center',marginLeft:-50,marginTop:20}}
            placeholder="Enter password"
            placeholderTextColor={"#FF6E01"}
            maxLength={25}
            
        />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',width:"100%",paddingBottom:60}}>
      <Button    title={'forgotten Password'}
          onPress={() => this.props.navigation.navigate("PasswordResetScreen")}
       />
      <Button title={'login'} onPress={() => this.props.navigation.navigate("HomeScreen")}
        />
      </View>
    </View>
      </View>
    );
  }
}

export default LoginScreen;
