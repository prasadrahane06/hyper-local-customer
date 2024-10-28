import React, { useEffect, useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageSourcePropType,
  Image,
} from "react-native";
import Card from "@/components/ui/card";
import images from "@/constants/images";

const screenWidth = Dimensions.get("window").width;

const categories = [
  {
    id: "1",
    image: images.img1,
    name: "",
    offer: "",
  },
  { id: "2", image: images.img2, name: "", offer: "" },
  { id: "3", image: images.img3, name: "", offer: "" },
  {
    id: "4",
    image: images.img4,
    name: "",
    offer: "",
  },
  {
    id: "5",
    image: images.img5,
    name: "",
    offer: "",
  },
  { id: "6", image: images.img6, name: "", offer: "" },
  { id: "7", image: images.img7, name: "", offer: "" },
];

const Home = () => {
  const scrollViewRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  let currentIndex = 0;

  useEffect(() => {
    // Set up auto-scrolling
    scrollIntervalRef.current = setInterval(() => {
      if (scrollViewRef.current) {
        currentIndex += 1;
        if (currentIndex >= categories.length) {
          currentIndex = 0; // Reset to the first item after reaching the end
        }
        scrollViewRef.current.scrollTo({
          x: currentIndex * screenWidth,
          animated: true,
        });
      }
    }, 3000); // Scroll every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(scrollIntervalRef.current);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>HighLights</Text>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {categories.map((item) => (
          <View key={item.id} style={styles.cardContainer}>
            <Card
              image={item.image as ImageSourcePropType}
              name={item.name}
              offer={item.offer}
              cardStyles={styles.cardStyle}
              imageStyles={styles.image}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1D6",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 16,
    letterSpacing: 0.5,
    color: "#000",
  },
  scrollViewContent: {},
  cardContainer: {
    width: screenWidth,
    paddingHorizontal: 16,
  },
  cardStyle: {
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
