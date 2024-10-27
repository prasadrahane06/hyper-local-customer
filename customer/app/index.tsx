import React, { useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import PhoneInput from "react-native-phone-number-input";
import FormField from "@/components/ui/FormField";
import CustomButton from "@/components/ui/CustomButton";
import images from "../constants/images";

const Index: React.FC = () => {
  const [phone, setPhone] = useState("");
  const phoneInputRef = useRef<PhoneInput>(null);

  const submit = () => {
    // if (!phone) {
    //   alert("Please enter a valid phone number");
    //   return;
    // }
    router.replace("/Register");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.content}>
            <Text style={styles.title1}>Welcome to B2C App</Text>

            <Image
              source={images.phone as ImageSourcePropType}
              style={styles.image}
              resizeMode="contain"
              tintColor="white"
            />

            <Text style={styles.label}>Enter your Phone Number</Text>
            <PhoneInput
              ref={phoneInputRef}
              defaultValue={phone}
              defaultCode="IN"
              layout="first"
              onChangeFormattedText={setPhone}
              containerStyle={styles.phoneInputContainer}
              textContainerStyle={styles.phoneInputTextContainer}
              textInputStyle={styles.phoneInputText}
            />

            <View style={styles.buttonContainer}>
              <CustomButton
                title="Register"
                handlePress={submit}
                containerStyles={styles.button}
              />
              <TouchableOpacity onPress={() => router.push("/login")}>
                <Text style={styles.loginText}>
                  Already registered? Login here
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0fd180",
  },
  content: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 28,
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center items vertically
  },
  image: {
    maxWidth: 340,
    width: "100%",
    height: 200,
  },
  title1: {
    fontSize: 39,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
    textAlign: "center",
    marginBottom: 30,
  },
  label: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  phoneInputContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
  },
  phoneInputTextContainer: {
    backgroundColor: "#fff",
  },
  phoneInputText: {
    fontSize: 16,
  },
  buttonContainer: {
    width: "100%", // Ensures the button fills the width when centered
    alignItems: "center", // Center button horizontally
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    width: "100%",
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: "#059669",
    borderColor: "transparent",
  },
  loginText: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    textDecorationLine: "underline",
  },
});

export default Index;
