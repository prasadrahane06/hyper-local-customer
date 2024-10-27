import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInputProps,
  ImageSourcePropType,
} from "react-native";
import images from "../../constants/images";
interface FormFieldProps extends TextInputProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: object; // Changed to object
  iseditable?: boolean;
  multiline?: boolean;
  extraStyles?: object; // Changed to object
  moreStyles?: object; // Changed to object
  numberOfLines?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  iseditable = true,
  multiline = false,
  extraStyles,
  numberOfLines,
  moreStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container]}>
      <Text style={(styles.title, otherStyles)}>{title}</Text>

      <View style={[styles.inputContainer, extraStyles]}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#808080"
          onChangeText={handleChangeText}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={100}
          secureTextEntry={
            (title === "Password" ||
              title === "Enter New Password" ||
              title === "Confirm Password") &&
            !showPassword
          }
          editable={iseditable}
          {...props}
        />

        {(title === "Password" ||
          title === "Enter New Password" ||
          title === "Confirm Password") && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={
                !showPassword
                  ? (images.eye as ImageSourcePropType)
                  : (images.eyeHide as ImageSourcePropType)
              }
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    letterSpacing: 1,
  },
  inputContainer: {
    width: "100%",
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "#000",
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default FormField;
