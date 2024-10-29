import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  Alert,
  ImageSourcePropType,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/ui/SearchInput";
import EmptyState from "../../components/ui/EmptyState";
import Card from "@/components/ui/card";
import images from "@/constants/images";
import Header from "@/components/ui/subCatHead";
import Payable from "@/components/ui/payable";
import { router } from "expo-router";

const shopingCart: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const onRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  const categories = [
    {
      id: "1",
      category: "Foodgrains oil and Masala",
      image: images.demoitem,
      name: "sugar and honey ",
      quantity: "1000gm",
      price: "200",
    },
    {
      id: "2",
      category: "Home Care",

      image: images.demoitem,
      name: "Bread ",
      quantity: "2000gm",
      price: "300",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={images.back as ImageSourcePropType}
            style={styles.backImage}
            resizeMode="contain"
            tintColor="black"
          />
        </TouchableOpacity>
        <Text style={styles.title}>Shopping Cart</Text>
      </View>

      <View style={styles.contentContainer}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item?.id.toString()}
          renderItem={({ item }) => (
            <>
              <View style={styles.totals}>
                <Text style={styles.prices}>{item.category}</Text>
                <Text style={styles.prices}>
                  subTotal: {item.price} | 1 item(s)
                </Text>
              </View>
              <Card
                image={item.image as ImageSourcePropType}
                name={item.name}
                offer=""
                quantity={item.quantity}
                price={item.price}
                cardStyles={styles.cardStyle}
                imageStyles={styles.imageStyle}
                nameStyles={styles.nameStyle}
                priceStyles={styles.priceStyle}
                buttonStyle={styles.buttonStyles}
                quantitySelectorStyle={styles.quantitySelectorStyles}
              />
            </>
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="No Events Found"
              subtitle="No Events available."
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />

        <Payable />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDF1D6",
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  cardContainer: {
    marginRight: 16,
  },
  images: {
    width: 24,
    height: 24,
  },
  cardStyle: {
    flexDirection: "row", // Row layout for image and content columns
    width: "100%",
    height: 190,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 5,
    alignItems: "center",
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  title: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    letterSpacing: 1,
    textAlign: "center",
  },
  prices: {
    flex: 1,
    fontSize: 15,
    color: "#000",
    letterSpacing: 1,
    textAlign: "center",
  },
  imageStyle: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    marginRight: 16,
  },
  contentStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  nameStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
    paddingHorizontal: 0,
    letterSpacing: 0.5,
    flexShrink: 1,
    flexWrap: "wrap",
  },
  priceStyle: {
    fontSize: 18,
    fontWeight: "600",
    gap: 10,
    width: 200,
  },
  totals: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "lightgray",
    paddingVertical: 5,
  },
  buttonStyles: {
    width: 150,
    minHeight: 35,
    borderRadius: 7,
    backgroundColor: "#0fd180",
    borderColor: "transparent",
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  quantitySelectorStyles: {
    backgroundColor: "#0fd180",
    borderRadius: 5,
    width: 65,
    minHeight: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#0fd180",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  backImage: {
    width: 24,
    height: 24,
  },
});

export default shopingCart;
