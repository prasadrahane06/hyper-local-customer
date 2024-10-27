import React, { useEffect, useState } from "react";
import {
  ImageSourcePropType,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Location from "../../components/ui/location";
import images from "../../constants/images";
import SearchInput from "@/components/ui/SearchInput";

const Navbar = () => {
  const [currentDate, setCurrentDate] = useState("");

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
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.homecontainer}>
            <View style={styles.imageContainer}>
              <View style={styles.locationConatiner}>
                <Image
                  source={images.location as ImageSourcePropType}
                  resizeMode="contain"
                  tintColor="black"
                  style={styles.locationImages}
                />
                <Location />
              </View>
              <View style={styles.Icons}>
                <Image
                  source={images.checkout as ImageSourcePropType}
                  resizeMode="contain"
                  tintColor="black"
                  style={styles.Images}
                />
                <Image
                  source={images.notification as ImageSourcePropType}
                  resizeMode="contain"
                  tintColor="black"
                  style={styles.Images}
                />
              </View>
            </View>
            <SearchInput
              placeholder="Search"
              value={""}
              onChangeText={(text) => console.log(text)}
            />
            <Text style={styles.dateText}>{currentDate}</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homecontainer: {
    flex: 1,
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
  Images: {
    width: 24,
    height: 24,
  },
  locationImages: {
    width: 24,
    height: 24,
  },
  locationConatiner: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  Icons: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "400",

    color: "black",
    marginTop: 10,
    textAlign: "center",
  },
});
