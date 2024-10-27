import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/ui/FormField";
import CustomButton from "@/components/ui/CustomButton";
import images from "../../constants/images";
const Login: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {};

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.content}>
            <Image
              source={images.enter as ImageSourcePropType}
              style={styles.image}
              resizeMode="contain"
              tintColor="black"
            />
            <Text style={styles.title}>LOGIN</Text>
            <FormField
              title="Phone"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles={styles.Formtext}
              placeholder="Enter your phone number"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles={styles.Formtext}
              placeholder="Enter Password"
            />
            <View style={styles.buttonContainer}>
              <CustomButton
                title="LOGIN"
                handlePress={submit}
                containerStyles={styles.button}
              />
              <TouchableOpacity onPress={() => router.push("/")}>
                <Text style={styles.loginText}>Not a member? Sign up here</Text>
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
    backgroundColor: "#fff",
  },
  content: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 28,
  },
  image: {
    maxWidth: 340,
    width: "100%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#000",
    letterSpacing: 1,
    textAlign: "center",
  },

  buttonContainer: {
    flex: 1,
    marginTop: 20,
  },
  button: {
    width: "100%",
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: "#0fd180",
    borderColor: "transparent",
  },
  Formtext: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    letterSpacing: 0.5,
    marginLeft: 3,
  },
  loginText: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    textDecorationLine: "underline",
  },
});

export default Login;
