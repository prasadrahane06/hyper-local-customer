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