import {
  ImageSourcePropType,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React from "react";
import images from "@/constants/images";
import Navbar from "@/components/ui/Navbar";
import Card from "@/components/ui/card";
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View>
            <Navbar />
          </View>
          <View style={styles.section}>
            <Text style={styles.category}>Shop By Category</Text>
            <View style={styles.row}>
              <Card
                image={images.demoitem}
                name="Foodgrain, Oil & Masala"
                offer="Up to 70% OFF"
              />
              <Card
                image={images.demoitem}
                name="Beverages"
                offer="Up to 50% OFF"
              />
              <Card
                image={images.demoitem}
                name="Snacks"
                offer="Up to 30% OFF"
              />
            </View>
            <View style={styles.row}>
              <Card
                image={images.demoitem}
                name="Personal Care"
                offer="Up to 60% OFF"
              />
              <Card
                image={images.demoitem}
                name="Household Items"
                offer="Up to 40% OFF"
              />
              <Card
                image={images.demoitem}
                name="Bakery"
                offer="Up to 20% OFF"
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1D6",
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  category: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    marginLeft: 2,
    letterSpacing: 0.5,
    color: "#000",
  },
});
