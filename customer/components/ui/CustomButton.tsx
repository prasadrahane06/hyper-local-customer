import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
} from "react-native";

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.buttonContainer,
        containerStyles,
        isLoading && styles.disabledButton,
      ]}
      disabled={isLoading}
    >
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={styles.loadingIcon}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#1E40AF",
    borderRadius: 15,
    minHeight: 62,
    flexDirection: "row",
    borderColor: "#3B82F6",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 24,
    letterSpacing: 1,
  },
  icon: {
    width: 28,
    height: 28,
    marginLeft: 8,
    tintColor: "white",
  },
  iconLarge: {
    width: 48,
    height: 48,
    marginLeft: 8,
    tintColor: "white",
  },
  loadingIcon: {
    marginLeft: 8,
  },
});

export default CustomButton;
