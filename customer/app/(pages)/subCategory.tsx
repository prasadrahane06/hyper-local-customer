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
import { router } from "expo-router";

const subCategory: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItemCount, setCartItemCount] = useState(2);

  const onRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  const categories = [
    {
      id: "1",
      image: images.demoitem,
      mrp: "350",
      name: "sugar and honey ",
      quantity: "1000gm",
      price: "200",
    },
    {
      id: "2",
      image: images.demoitem,
      name: "Bread ",
      mrp: "350",

      quantity: "2000gm",
      price: "300",
    },
    {
      id: "3",
      image: images.demoitem,
      name: "Meat",
      mrp: "350",

      quantity: "3000gm",
      price: "250",
    },
    {
      id: "4",
      image: images.demoitem,
      name: "Chicken",
      mrp: "350",

      quantity: "4000gm",
      price: "400",
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
        <SearchInput
          placeholder="Search "
          value={""} // Make sure you have a state for the input value
          onChangeText={(text) => console.log(text)}
          searchStyles={styles.searchStyle}
        />

        <TouchableOpacity onPress={() => router.push("/shoppingCart")}>
          <Image
            source={images.checkout as ImageSourcePropType}
            resizeMode="contain"
            tintColor="black"
            style={styles.images}
          />
          {cartItemCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartItemCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <Header title={""} />
      <FlatList
        data={categories}
        keyExtractor={(item) => item?.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image as ImageSourcePropType}
            name={item.name}
            offer=""
            mrp={item.mrp}
            quantity={item.quantity}
            price={item.price}
            cardStyles={styles.cardStyle}
            imageStyles={styles.imageStyle}
            nameStyles={styles.nameStyle}
            priceStyles={styles.priceStyle}
            buttonStyle={styles.buttonStyles}
            quantitySelectorStyle={styles.quantitySelectorStyles}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No Events Found" subtitle="No Events available." />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDF1D6",
    flex: 1,
  },
  searchStyle: {
    flexDirection: "row",
    alignItems: "center",
    width: 250,
    height: 40,
    paddingHorizontal: 16,
    backgroundColor: "#fff",

    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#fff",
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
    marginVertical: 10,
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
    fontSize: 19,
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
  badge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "red",
    borderRadius: 10,
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  backImage: {
    width: 24,
    height: 24,
  },
});

export default subCategory;
