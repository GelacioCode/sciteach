import React, { useState, useEffect } from "react";
import { Text, LogBox } from "react-native";
import { useAssets } from "expo-asset";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

import FirstWindow from "./screens/FirstWindow";
import ContextWrapper from "./context/ContextWrapper";

// LogBox.ignoreLogs([
//   "Setting a timer",
//   "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
// ]);

const Stack = createStackNavigator();

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setCurrUser(user);
      }
    });
    return () => unsubscribe();
  }, []);

  if(loading) {
    return <Text>Loading</Text>
  }
  return (
    <NavigationContainer>
        {!currUser ?(
          <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="FirstWindow" component={FirstWindow} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        ) : (
                <Text>Hi User!</Text>
        )}
    </NavigationContainer>
  );
}
function Main() {
  const [assets] = useAssets(
    require("./assets/icon-square.png"),
    require("./assets/chatbg.png"),
    require("./assets/user-icon.png"),
    require("./assets/welcome-img.png"),
    require("./assets/windowBg.png"),
    require("./assets/windowIcon.png")
  );
  if(!assets) {
    return <Text>Loading ..</Text>;
  }
  return (
    <ContextWrapper>
      <App />
    </ContextWrapper>
  );
}
export default Main;