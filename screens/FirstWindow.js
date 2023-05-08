import { View, Text, Image, TextInput, Button, ImageBackground, TouchableOpacity } from "react-native";
import React, { useContext } from 'react';
import Context from "../context/Context";
import { useNavigation } from '@react-navigation/native';

const FirstWindow = () => {
    const {
      theme: { colors },
    } = useContext(Context);

    const navigation = useNavigation();

    const handleSigninPress = () => {
      navigation.navigate('SignIn'); // Replace 'Signup' with the actual name of your signup screen component
    };

    const handleSignupPress = () => {
      navigation.navigate('SignUp'); // Replace 'Signup' with the actual name of your signup screen component
    };
  
    return (
      <ImageBackground
        source={require("../assets/windowBg.png")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}
      >
        <View style={{
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 20,
        }}>

          <View style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between", // Change to "space-between"
            width: "80%",
            paddingHorizontal: 50, // Add horizontal padding for space
          }}>
            <Image
              source={require('../assets/sciteach-text.png')}
              style={{
                width: '65%', // Reduce the width of the image to create space
                height: 80,
                resizeMode: "contain",
              }}
            />
            <Image
              source={require('../assets/windowIcon.png')}
              style={{
                width: '65%', // Reduce the width of the image to create space
                height: 128,
                resizeMode: "contain",
                marginTop: -45,
                marginLeft: 40
              }}
            />
          </View>

          <View style={{
              backgroundColor: "black",
              height: 3,
              width: 290,
              marginTop: 15, // Add margin top for spacing
            }}>
              <Text style={{
                marginTop: 50
              }}>Welcome back, ready to Learn?</Text>
          </View>

          <Text style={{
            fontWeight: '700',
            fontSize: 15,
            lineHeight: 15,
            color: '#000000',
            marginTop: 15,
          }}>
            Welcome back, ready to Learn?
          </Text>

          <TouchableOpacity
            style={{
              width: 293,
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
            onPress={handleSigninPress}
          >
            <Text style={{
              fontWeight: '700',
              fontSize: 11,
              lineHeight: 13,
              color: '#000000',
            }}>
              LOGIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 293,
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
            onPress={handleSignupPress}
          >
            <Text style={{
              fontWeight: '700',
              fontSize: 11,
              lineHeight: 13,
              color: '#000000',
            }}>
              SIGN UP
            </Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    );
  }

export default FirstWindow;
  