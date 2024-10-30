import React, { useEffect, useState } from "react";
import {
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Location from "../../components/ui/location";
import images from "../../constants/images";
import SearchInput from "@/components/ui/SearchInput";
import { router } from "expo-router";

const Navbar = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [cartItemCount, setCartItemCount] = useState(2);
  const [notificationCount, setNotificationCount] = useState(3);
  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.homeContainer}>
          <View style={styles.imageContainer}>
            <View style={styles.locationContainer}>
              <Image
                source={images.location as ImageSourcePropType}
                resizeMode="contain"
                tintColor="black"
                style={styles.locationImages}
              />
              <Location />
            </View>
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => router.push("/shoppingCart")}>
                <View style={styles.checkoutContainer}>
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
                </View>
              </TouchableOpacity>
              <Image
                source={images.notification as ImageSourcePropType}
                resizeMode="contain"
                tintColor="black"
                style={styles.images}
              />
              {notificationCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{notificationCount}</Text>
                </View>
              )}
            </View>
          </View>
          <SearchInput
            placeholder="Search by product name or category"
            value={""} // Make sure you have a state for the input value
            onChangeText={(text) => console.log(text)}
          />
          <Text style={styles.dateText}>{currentDate}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flex: 0, // Set flex to 0 or a specific height
  },
  homeContainer: {
    paddingHorizontal: 16,
    paddingVertical: 25,
    width: "100%",
    backgroundColor: "#9DC08B",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  images: {
    width: 24,
    height: 24,
  },
  locationImages: {
    width: 24,
    height: 24,
  },
  locationContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  icons: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  checkoutContainer: {
    position: "relative",
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
  dateText: {
    fontSize: 16,
    fontWeight: "400",
    color: "black",
    marginTop: 10,
    textAlign: "center",
  },
});
