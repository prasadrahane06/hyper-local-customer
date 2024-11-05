import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageSourcePropType,
} from "react-native";
import FormField from "@/components/ui/FormField";
import Header from "@/components/ui/headerComponent";

import CustomButton from "@/components/ui/CustomButton";
import { router } from "expo-router";
import images from "@/constants/images";

interface FormState {
  newPass: string;
  conformPass: string;
}

const changepass: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    newPass: "",
    conformPass: "",
  });

  const save = () => {
    // Implement save logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header title="Change Password" />

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.innerContainer}>
            <Image
              source={images.reset as ImageSourcePropType}
              style={styles.image}
              resizeMode="contain"
              tintColor="#0fd180"
            />
            <FormField
              title="Old Password"
              value={form.newPass}
              handleChangeText={(e) => setForm({ ...form, newPass: e })}
              placeholder="Enter Old Password"
              otherStyles={styles.Formtext}
            />
            <FormField
              title="New Password"
              value={form.newPass}
              handleChangeText={(e) => setForm({ ...form, newPass: e })}
              placeholder="Enter New Password"
              otherStyles={styles.Formtext}
            />
            <FormField
              title="Confirm Password"
              value={form.conformPass}
              handleChangeText={(e) => setForm({ ...form, conformPass: e })}
              placeholder="Enter Confirm Password"
              otherStyles={styles.Formtext}
            />
          </View>
        </ScrollView>
        <View style={styles.continue}>
          <CustomButton
            title="Change Password"
            containerStyles={styles.button}
            textStyles={styles.textStyle}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1D6",
  },
  continue: {
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  textStyle: {
    fontSize: 25,
  },
  button: {
    width: "100%",
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: "#0fd180",
    borderColor: "transparent",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 16,
    width: "100%",
    marginTop: 10,
  },
  Formtext: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
    letterSpacing: 0.5,
    marginLeft: 3,
  },
  image: {
    maxWidth: 340,
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFFFFF",
    marginTop: 32,
    fontFamily: "System", // replace "System" with the font family used in your project, e.g., "psemibold" if it's a custom font.
  },
  buttonContainer: {
    marginTop: 20,
    minHeight: 50,
    borderRadius: 999, // to make it rounded
  },
});

export default changepass;
