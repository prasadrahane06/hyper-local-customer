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
  SafeAreaView,
} from "react-native";
import images from "../../constants/images";
import { router } from "expo-router";
import FormField from "@/components/ui/FormField";
import CustomButton from "@/components/ui/CustomButton";
import { Picker } from "@react-native-picker/picker";
import { State, City, IState, ICity } from "country-state-city";
import Header from "@/components/ui/headerComponent";
const Register: React.FC = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",

    address: "",
    password: "",
    confirmpassword: "",
  });
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  useEffect(() => {
    const indiaStates = State.getStatesOfCountry("IN");
    setStates(indiaStates);
  }, []);

  const handleStateChange = (stateCode: string) => {
    setSelectedState(stateCode);
    const citiesList = City.getCitiesOfState("IN", stateCode);
    setCities(citiesList);
    setSelectedCity(""); // Reset city selection on state change
  };
  const submit = () => {
    router.push("/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Sign up" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.content}>
            <FormField
              title="Firstname"
              value={form.firstname}
              handleChangeText={(e) => setForm({ ...form, firstname: e })}
              otherStyles={styles.Formtext}
              placeholder="Enter First Name"
            />
            <FormField
              title="Lastname"
              value={form.lastname}
              handleChangeText={(e) => setForm({ ...form, lastname: e })}
              otherStyles={styles.Formtext}
              placeholder="Enter Last Name"
            />
            <Text style={styles.label}>State</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={selectedState}
                style={styles.picker}
                onValueChange={(itemValue) => handleStateChange(itemValue)}
              >
                <Picker.Item label="Select a state..." value="" />
                {states.map((state) => (
                  <Picker.Item
                    key={state.isoCode}
                    label={state.name}
                    value={state.isoCode}
                  />
                ))}
              </Picker>
            </View>
            <Text style={styles.label}>City</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={selectedCity}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedCity(itemValue)}
                enabled={selectedState !== ""} // Enable only if a state is selected
              >
                <Picker.Item label="Select a city..." value="" />
                {cities.map((city) => (
                  <Picker.Item
                    key={city.name}
                    label={city.name}
                    value={city.name}
                  />
                ))}
              </Picker>
            </View>
            <FormField
              title="Address"
              value={form.address}
              numberOfLines={4}
              multiline={true}
              handleChangeText={(e) => setForm({ ...form, address: e })}
              otherStyles={styles.Formtext}
              extraStyles={styles.addressInput}
              placeholder="Enter address "
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
              value={form.confirmpassword}
              handleChangeText={(e) => setForm({ ...form, confirmpassword: e })}
              otherStyles={styles.Formtext}
              placeholder="Confirm Password"
            />
            <View style={styles.buttonContainer}>
              <CustomButton
                title="SIGNUP"
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
    paddingVertical: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  backImage: {
    width: 24,
    height: 24,
    tintColor: "black",
  },
  title: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 20,
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
  label: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
    letterSpacing: 0.5,
    marginLeft: 3,
    marginTop: 10,
  },
  image: {
    maxWidth: 40,
    width: "100%",
    height: 250,
  },
  pickerWrapper: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderColor: "#CCCCCC",
    borderWidth: 2,

    paddingHorizontal: 8,
  },
  picker: {
    height: 50,
    color: "#000000",
    width: "100%",
  },
  addressInput: {
    height: 100,
  },
});

export default Register;
