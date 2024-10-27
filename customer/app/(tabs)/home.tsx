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
import React from "react";
import Location from "../../components/ui/location";
import images from "../../constants/images";
const home = () => {
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
                  tintColor="white"
                  style={styles.locationImages}
                />
                <Location />
              </View>
              <Image
                source={images.notification as ImageSourcePropType}
                resizeMode="contain"
                tintColor="black"
                style={styles.Images}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homecontainer: {
    flex: 1,
    marginTop: 40,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    width: "100%",
    backgroundColor: "#9DC08B",
  },
  Images: {
    width: 24,
    height: 24,
  },
  locationImages: {
    width: 20,
    height: 20,
  },
  locationConatiner: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
