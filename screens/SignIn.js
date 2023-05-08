import { View, Text, Image, TextInput, Button, ImageBackground } from "react-native";
import React, { useContext } from 'react';
import Context from "../context/Context";
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SignIn() {
  
    const{
      theme: {colors},
    } = useContext(Context);

    const navigation = useNavigation();
    const handleBackPress = () => {
      navigation.goBack();
    };
    

    return (

      <ImageBackground
        source={require("../assets/windowBg.png")}
        style={{
          flex: 1,
          flexDirection: "column",
          height: "100%"
        }}
      >
      
        <Ionicons
          name="arrow-back-circle-outline"
          size={50}
          color= "black"
          style={{ top: 40, left: 30 }}
          onPress={handleBackPress}
        />

      <View style={{
        flex:1,
        justifyContent: "center",
        alignItems: "center"

      }}>
      <View style={{
          
          
        }}>

            <Text style={{
              color: colors.foreground,
              fontSize: 40,
              color: "black"
            }}>
              LOG IN
            </Text>
          </View>
          <View style={{ 
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}>
              <TextInput 
                placeholder="email"
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
                placeholder="Password"
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
                }}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      fontWeight: 700
                    }}>Log In</Text>
                </TouchableOpacity>

              {/* <Image source ={
                  require('../assets/signupin.png')
                }
                style={{ 
                  width: 377,
                  height: 252 ,
                  marginTop: 100
                }}
                resizeMode= "contain"
              /> */}

          </View>

      </View>
        
        
   
      
      </ImageBackground>
      
  )
}