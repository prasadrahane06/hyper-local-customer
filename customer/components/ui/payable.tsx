import images from "@/constants/images";
import { router } from "expo-router";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const payable = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.payable}>
            <Text style={styles.title}>Net Payable</Text>
            <Text style={styles.title}>Rs 500</Text>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Continue"
              containerStyles={styles.button}
              textStyles={styles.textStyle}
              handlePress={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 100,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  button: {
    width: 120,
    minHeight: 40,
    borderRadius: 10,
    backgroundColor: "#0fd180",
    borderColor: "transparent",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  payable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  textStyle: {
    fontSize: 18,
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "#000",
  },
});

export default payable;
