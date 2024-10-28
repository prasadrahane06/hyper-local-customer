import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import Card from "@/components/ui/card"; // Ensure this path is correct
import images from "@/constants/images";

const viewAll = () => {
  const categories = [
    { id: "1", image: images.img1, name: "Item 1" },
    { id: "2", image: images.img2, name: "Item 2" },
    // Add more items as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Highlights</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item) => (
          <View key={item.id} style={styles.cardContainer}>
            <Card
              image={item.image}
              name={item.name}
              offer=""
              cardStyles={styles.cardStyle}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 16,
    letterSpacing: 0.5,
    color: "#000",
  },
  cardContainer: {
    marginRight: 16,
  },
  cardStyle: {
    width: 200,
    height: 100,
  },
});

export default viewAll;
