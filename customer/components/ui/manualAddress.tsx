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
import images from "../../constants/images";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/ui/FormField";
import CustomButton from "@/components/ui/CustomButton";
import { Picker } from "@react-native-picker/picker";
import { State, City, IState, ICity } from "country-state-city";
const manualAddress: React.FC = () => {
  const [form, setForm] = useState({
    fullname: "",
    phone: "",

    address: "",
    pincode: "",
    city: "",
    state: "",
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

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Text style={styles.title}>Add Address</Text>

          <View style={styles.content}>
            <FormField
              title="fullname"
              value={form.fullname}
              handleChangeText={(e) => setForm({ ...form, fullname: e })}
              otherStyles={styles.Formtext}
              placeholder="fullname"
            />
            <FormField
              title="Phone Number"
              value={form.phone}
              handleChangeText={(e) => setForm({ ...form, phone: e })}
              otherStyles={styles.Formtext}
              placeholder="Phone Number"
            />

            <FormField
              title="House / Flat no. / Society"
              value={form.address}
              numberOfLines={4}
              multiline={true}
              handleChangeText={(e) => setForm({ ...form, address: e })}
              otherStyles={styles.Formtext}
              extraStyles={styles.addressInput}
              placeholder="House / Flat no. / Society"
            />
            <FormField
              title="Landmark"
              value={form.address}
              numberOfLines={4}
              multiline={true}
              handleChangeText={(e) => setForm({ ...form, address: e })}
              otherStyles={styles.Formtext}
              extraStyles={styles.addressInput}
              placeholder="Landmark"
            />
            <FormField
              title="Pincode"
              value={form.pincode}
              numberOfLines={4}
              multiline={true}
              handleChangeText={(e) => setForm({ ...form, pincode: e })}
              otherStyles={styles.Formtext}
              extraStyles={styles.addressInput}
              placeholder="Pincode"
            />
            <FormField
              title="City"
              value={form.city}
              numberOfLines={4}
              multiline={true}
              handleChangeText={(e) => setForm({ ...form, city: e })}
              otherStyles={styles.Formtext}
              extraStyles={styles.addressInput}
              placeholder="City"
            />
            <FormField
              title="State"
              value={form.state}
              numberOfLines={4}
              multiline={true}
              handleChangeText={(e) => setForm({ ...form, state: e })}
              otherStyles={styles.Formtext}
              extraStyles={styles.addressInput}
              placeholder="State"
            />
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
    paddingHorizontal: 16,
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
    width: "100%",
    height: 56,

    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default manualAddress;