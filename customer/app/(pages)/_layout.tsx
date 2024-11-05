import React from "react";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

const PagesLayout: React.FC = () => {
  return (
    <View style={styles.container}>
      <Stack>
        <Stack.Screen
          name="subCategory"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="shoppingCart"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="delivery"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addAddress"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="selectPayment"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="chooseAddress"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="notifications"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="myInfo"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="manageAddress"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="managePayments"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="changepass"
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

export default PagesLayout;
