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
  const next = () => {
    router.push("/delivery");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.payable}>
            <Text style={styles.title}>Net Payable</Text>
            <Text style={styles.title2}>Rs 500</Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.savingsContainer}>
              <Text style={styles.savingsText}>You are saving</Text>
              <Text style={styles.savingsAmount}>₹ 53.00</Text>
            </View>
            <CustomButton
              title="Continue"
              containerStyles={styles.button}
              textStyles={styles.textStyle}
              handlePress={next}
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  payable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  textStyle: {
    fontSize: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "#000",
  },

  title2: {
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "#000",
  },
  savingsContainer: {
    width: 120,
    minHeight: 40,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#E0F7E7",
    gap: 5,
  },
  savingsText: {
    color: "#34A853",
    fontWeight: "600",
    fontSize: 16,
  },
  savingsAmount: {
    color: "#34A853",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default payable;
