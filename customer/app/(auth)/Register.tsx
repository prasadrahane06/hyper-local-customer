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
            <Text style={styles.title}>SIGN UP</Text>
            <FormField
              title="Firstname"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles={styles.Formtext}
              placeholder="Enter First Name"
            />
            <FormField
              title="Lastname"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles={styles.Formtext}
              placeholder="Enter Last Name"
            />
            <FormField
              title="City"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles={styles.Formtext}
              placeholder="Select a City..."
            />
            <FormField
              title="Address"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles={styles.Formtext}
              placeholder="Enter address"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles={styles.Formtext}
              placeholder="Enter Password"
            />
            <FormField
              title="Confirm Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles={styles.Formtext}
              placeholder="Confirm Password"
            />
            <View style={styles.buttonContainer}>
              <CustomButton
                title="LOGIN"
                handlePress={submit}
                containerStyles={styles.button}
              />
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
