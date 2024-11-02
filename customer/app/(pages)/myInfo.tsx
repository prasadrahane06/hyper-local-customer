// ProfileEditScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FormField from "@/components/ui/FormField";
import Header from "@/components/ui/headerComponent";
import CustomButton from "@/components/ui/CustomButton";

const MyInfo: React.FC = () => {
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("prasadrahane06@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+91-9022200140");
  const [birthdate, setBirthdate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleConfirm = (date: Date) => {
    setBirthdate(date.toLocaleDateString());
    setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header title="" />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.profileInfo}>
            <View style={styles.avatar}>
              <FontAwesome name="user" size={50} color="#0fd180" />
            </View>
          </View>
          <FormField
            title="Full Name"
            otherStyles={styles.Formtext}
            placeholder="Enter your fullname"
          />

          <FormField
            title="Gender"
            otherStyles={styles.Formtext}
            placeholder="Select Gender"
          />
          <FormField
            title="Email Address"
            otherStyles={styles.Formtext}
            placeholder="Enter your Email Address"
          />
          <FormField
            title="Phone Number"
            otherStyles={styles.Formtext}
            placeholder="Enter your Phone Number"
          />
          {/* Date of Birth FormField with DatePicker */}
          <TouchableOpacity onPress={showDatePicker} style={styles.Formtext}>
            <FormField
              title="Date of Birth"
              otherStyles={styles.Formtext}
              placeholder={birthdate ? birthdate : "mm/dd/yyyy"}
              editable={false} // Make it non-editable since we're using a date picker
            />
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={() => setDatePickerVisibility(false)}
          />

          {/* Delete Account */}
          <TouchableOpacity style={styles.useLocationButton}>
            <Text style={styles.useLocationButtonText}>Delete Account</Text>
          </TouchableOpacity>

          {/* Save Details */}
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Save Details"
              containerStyles={styles.button}
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
    backgroundColor: "#EDF1D6",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
    width: "100%",
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
    width: "100%",

    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
    letterSpacing: 0.5,
    marginLeft: 3,
  },
  scrollViewContent: {
    alignItems: "center",
    padding: 16,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  useLocationButton: {
    marginTop: 15,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  useLocationButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default MyInfo;
