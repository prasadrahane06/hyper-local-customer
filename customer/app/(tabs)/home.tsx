import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import Horizontal from "@/components/ui/horzontalScroll"; // Ensure this path is correct
import React from "react";
import images from "@/constants/images";
import Navbar from "@/components/ui/Navbar";
import Card from "@/components/ui/card"; // Ensure this path is correct
import ViewAll from "@/components/ui/viewAll"; // Ensure this path is correct

const categories = [
  {
    name: "Foodgrain, Oil & Masala",
    offer: "Up to 70% OFF",
    image: images.demoitem,
  },
  { name: "Beverages", offer: "Up to 50% OFF", image: images.demoitem },
  { name: "Snacks", offer: "Up to 30% OFF", image: images.demoitem },
  { name: "Personal Care", offer: "Up to 60% OFF", image: images.demoitem },
  { name: "Household Items", offer: "Up to 40% OFF", image: images.demoitem },
  { name: "Bakery", offer: "Up to 20% OFF", image: images.demoitem },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Navbar />

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.section}>
            <Text style={styles.category}>Shop By Category</Text>
            <View style={styles.row}>
              {categories.slice(0, 3).map((item, index) => (
                <Card
                  key={index}
                  image={item.image}
                  name={item.name}
                  offer={item.offer}
                />
              ))}
            </View>
            <View style={styles.row}>
              {categories.slice(3, 6).map((item, index) => (
                <Card
                  key={index + 3}
                  image={item.image}
                  name={item.name}
                  offer={item.offer}
                />
              ))}
            </View>
          </View>
          <View style={styles.section2}>
            <Image
              source={images.img8 as ImageSourcePropType}
              resizeMode="cover"
              style={styles.locationImages}
            />
            <Horizontal />
          </View>
          <View style={styles.row}>
            <ViewAll title="Vegetables" />
          </View>
          <View style={styles.row}>
            <ViewAll title="Fruits" />
          </View>
          <View style={styles.row}>
            <ViewAll title="Non Veg" />
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

  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  section2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    gap: 16,
    marginTop: 20,
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
  locationImages: {
    width: "100%",
    height: 200,
  },
});
