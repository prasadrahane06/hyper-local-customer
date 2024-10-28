import images from "@/constants/images";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";

interface ViewAllProps {
  title: string;
}

const SubCatHead: React.FC<ViewAllProps> = ({ title }) => {
  const [activeCategory, setActiveCategory] = useState<string>("1");

  const categories = [
    { id: "1", name: "All" },
    { id: "2", name: "Foodgrains, Oil & Masala" },
    { id: "3", name: "Fruits & Vegetables" },
    { id: "4", name: "Branded Foods" },
    { id: "5", name: "Home & Kitchen" },
  ];

  const handlePress = (id: string) => {
    setActiveCategory(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handlePress(item.id)}
            style={[
              styles.cardContainer,
              activeCategory === item.id && styles.activeCardContainer,
            ]}
          >
            <Text
              style={[
                styles.title,
                activeCategory === item.id && styles.activeTitle,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0fd180",
    height: 50,
    marginTop: 10,
  },
  cardContainer: {
    marginRight: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  activeCardContainer: {
    borderBottomColor: "#FFFF",
    borderBottomWidth: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "#000",
  },
  activeTitle: {
    color: "#FFFFFF",
  },
});

export default SubCatHead;
