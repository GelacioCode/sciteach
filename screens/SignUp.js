import { View, Text, Image, TextInput, Button } from "react-native";
import React, { useContext } from 'react';
import Context from "../context/Context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";



export default function SignUp() {
  
  const{
    theme: {colors},
  } = useContext(Context);

  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  

  return (
    <View style={{
      flexDirection: "column",
      flex: 1,
      backgroundColor: colors.white}} >
      <Ionicons
      name="arrow-back-circle-outline"
      size={50}
      color= "black"
      style={{  top: 50, left: 20 }}
      onPress={handleBackPress}
    />
      <View style={{
        marginTop: 70,
        marginLeft: 35
      }}>

          <Text style={{
            color: colors.foreground,
            fontSize: 40,
            color: "black"
          }}>
            REGISTER
          </Text>
        </View>
        <View style={{ 
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}>
            <TextInput 
              placeholder="DepEd Email"
              style={{
                width: 323,
                height: 49,
                backgroundColor: '#FFFFFF',
                borderWidth: 2,
                borderColor: '#000000',
                borderRadius: 10,
                marginTop: 10,
                justifyContent: 'center',
                // alignItems: 'center',
                paddingHorizontal: 20, // Add paddingHorizontal property
              }}
            />
            <TextInput
              placeholder="Create Password"
              secureTextEntry={true}
              style={{
                width: 323,
                height: 49,
                backgroundColor: '#FFFFFF',
                borderWidth: 2,
                borderColor: '#000000',
                borderRadius: 10,
                marginTop: 10,
                marginBottom: 20,
                justifyContent: 'center',
                // alignItems: 'center',
                paddingHorizontal: 20, // Add paddingHorizontal property
              }}
          />

              <TouchableOpacity 
                style={{
                  backgroundColor: "black",
                  width: 104,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10
              }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: 700
                  }}>Sign Up</Text>
              </TouchableOpacity>

            <Image source ={
                require('../assets/signupin.png')
              }
              style={{ 
                width: 377,
                height: 252 ,
                marginTop: 100
              }}
              resizeMode= "contain"
            />

        </View>
 
    </View>
    
)
}