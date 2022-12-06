import React, { useState } from "react";
import {Text,StyleSheet,TouchableOpacity,Image, ScrollView,
Pressable,TouchableHighlight,View,} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useTogglePasswordVisibility } from "../../../hooks/TogglePassword.js";
import axios from "axios";
import link from "../../../Link.js";

const WelcomeLoginHouseOwner = ({ navigation}) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [onLogin, setOnLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (value, name) => {
    setOnLogin({
      ...onLogin,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    axios
      .post(`${link}/owner/login`, onLogin)
      .then((response) => {
        console.log(onLogin);
        setOnLogin(response.data)
        navigation.navigate("HomePageStudent")
      })
      .catch((error)=> console.log(error.message))
  };

  return (
    <View style={styles.welcomeLoginHouseOwner}>
      <Text style={styles.welcomeBackText1}>
        <Text style={styles.welcomeBackText}>Welcome back</Text>
        <Text style={styles.text}>{` `}</Text>
      </Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../../../assets/homeOwner/Login/ellipse112.png")}
      />
      <Image
        style={styles.undrawSelectHouseReS1j91Icon}
        resizeMode="cover"
        source={require("../../../assets/homeOwner/Login/undrawSelect.png")}
      />
      
     
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../../assets/homeOwner/Login/vector2.png")}
        />
      </Pressable>
      <Text style={styles.forgetPasswordText}>Forget Password?</Text>
      <RNPTextInput
        style={styles.rectangleRNPTextInput}
        placeholder="Enter Your Password"
        mode="outlined"
        keyboardType="default"
        minLength={8}
        enablesReturnKeyAutomatically={true}
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        theme={{ colors: { background: "#d9d9d9" } }}
        onChangeText={(text) => handleChange(text, "password")}
      />
      <Pressable style={styles.eye} onPress={handlePasswordVisibility}>
        <MaterialCommunityIcons name={rightIcon} size={30} color="#44b3cc" />
      </Pressable>
     
      <RNPTextInput
        style={styles.rectangleRNPTextInput1}
        placeholder="Enter Your Email"
        mode="outlined"
        keyboardType="default"
        theme={{ colors: { background: "#d9d9d9" } }}
        onChangeText={(text) => handleChange(text, "email")}
      />
      <TouchableHighlight
        style={styles.rectangleTouchableHighlight}
        underlayColor="#fff"
        onPress={() => handleSubmit()}
      >
        
        <View />
      </TouchableHighlight>
      <Text style={styles.buttonLoginText}>Login</Text>
      <View style={styles.groupView}>
        <Pressable
          style={styles.signupPressable}
          onPress={() => navigation.navigate("HouseOwnerRegister")}
        >
          <Text style={styles.signupText}>Signup</Text>

        </Pressable>
        <Text
          style={styles.dontHaveAnAccount}
        >{`Don’t have an account? `}</Text>
      </View>
      
     
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeBackText: {
    fontSize: 24,
  },
  text: {
    fontSize: 20,
  },
  welcomeBackText1: {
    position: "absolute",
    top: 239,
    left: 120,
    fontWeight: "700",
    color: "#696969",
    textAlign: "left",
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 119,
    height: 119,
    opacity: 0.3,
  },
  undrawSelectHouseReS1j91Icon: {
    position: "absolute",
    top: 97,
    left: 94,
    width: 179,
    height: 115,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "2.8%",
    top: "5.81%",
    right: "92.62%",
    bottom: "92.86%",
    width: "4.58%",
    height: "3.33%",
  },
  forgetPasswordText: {
    position: "absolute",
    top: 443,
    left: 242,
    fontSize: 14,
    color: "#0092bf",
    textAlign: "left",
  },
  rectangleRNPTextInput: {
    position: "absolute",
    top: 380.5,
    left: 38,
    borderRadius: 13,
    borderStyle: "solid",
    width: 312,
    height: 48,
  },
  // eyePasswordIcon: {
  //   position: "absolute",
  //   top: 395,
  //   left: 310,
  //   width: 24,
  //   height: 24,
  // },
  rectangleRNPTextInput1: {
    position: "absolute",
    top: 300.5,
    left: 37.5,
    borderRadius: 13,
    borderStyle: "solid",
    width: 313,
    height: 49,
  },
  rectangleTouchableHighlight: {
    position: "absolute",
    top: 491,
    left: 42.5,
    borderRadius: 5,
    backgroundColor: "#3f424a",
    width: 290,
    height: 48,
  },
  buttonLoginText: {
    position: "absolute",
    top: 506,
    left: 170,
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "left",
  },
  signupText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2f89fc",
    textAlign: "left",
  },
  signupPressable: {
    position: "absolute",
    left: 89,
    top: 60,
  },
  dontHaveAnAccount: {
    position: "absolute",
    top: 30,
    left: 30,
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 536,
    left: 74,
    width: 229,
    height: 21,
  },
 
  
  welcomeLoginHouseOwner: {
    position: "relative",
    backgroundColor: "#dfe8ea",
    flex: 1,
    width: "100%",
    height: 840,
  },
  eye: {
    left: "73%",
    top: 395,
  },
});

export default WelcomeLoginHouseOwner;
