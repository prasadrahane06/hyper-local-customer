import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import Card from "@/components/ui/card"; // Ensure this path is correct
import images from "@/constants/images";
import { router } from "expo-router";
interface viewAllProps {
  title: string;
}
const viewAll: React.FC<viewAllProps> = ({ title }) => {
  const categories = [
    {
      id: "1",
      image: images.demoitem,
      name: "sugar and honey",
      quantity: "1000gm",
      price: "200",
    },
    {
      id: "2",
      image: images.demoitem,
      name: "Bread",
      quantity: "2000gm",
      price: "300",
    },
    {
      id: "3",
      image: images.demoitem,
      name: "Meat",
      quantity: "3000gm",
      price: "250",
    },
    {
      id: "4",
      image: images.demoitem,
      name: "Chicken",
      quantity: "4000gm",
      price: "400",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => router.push("/subCategory")}>
          <Text style={styles.title2}>View All &gt;</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item) => (
          <View key={item.id} style={styles.cardContainer}>
            <Card
              image={item.image as ImageSourcePropType}
              name={item.name}
              offer=""
              quantity={item.quantity}
              price={item.price}
              cardStyles={styles.cardStyle}
              imageStyles={styles.imageStyle}
              nameStyles={styles.nameStyle}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "#000",
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  title2: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "#0fd180",
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  cardContainer: {
    marginRight: 16,
  },
  cardStyle: {
    width: 140,
    height: 190,
    padding: 0,
  },
  imageStyle: {
    resizeMode: "cover",
  },
  nameStyle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
    paddingHorizontal: 7,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default viewAll;
