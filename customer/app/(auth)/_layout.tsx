import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

const AuthLayout: React.FC = () => {
  return (
    <View style={styles.container}>
      <Stack>
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b82f6",
  },
});

export default AuthLayout;
