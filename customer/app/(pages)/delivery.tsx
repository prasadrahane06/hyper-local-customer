import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { router } from "expo-router";
import CustomButton from "@/components/ui/CustomButton";

const delivery: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // State for storing address
  const [address, setAddress] = useState({
    id: 1,
    place: "Home",
    details: "123 Main St, City, State, Zip",
  });

  const onRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  const Add = () => {
    router.push("/addAddress");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={images.back as ImageSourcePropType}
            style={styles.backImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text style={styles.title}>Delivery/Self Pickup</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={images.delivery as ImageSourcePropType}
          style={styles.images}
          resizeMode="contain"
        />
        <Text style={styles.title2}>Doorstep Delivery</Text>
      </View>

      <View style={styles.contentContainer}>
        {!address && (
          <CustomButton
            title=" + Add Address"
            handlePress={Add}
            containerStyles={styles.button}
            textStyles={styles.textStyle}
          />
        )}

        {address && (
          <View style={styles.addressCard}>
            <TouchableOpacity style={styles.addressInfo}>
              <Text style={styles.selectedText}>{address.place}</Text>
              <Text style={styles.addressText}>{address.details}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/chooseAddress")}
              style={styles.editIconContainer}
            >
              <Text style={styles.selectedText2}>Change</Text>
            </TouchableOpacity>
          </View>
        )}
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
    padding: 5,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  addressCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  addressInfo: {
    flex: 1,
  },
  selectedText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedText2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0fd180",
  },
  title: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    letterSpacing: 1,
    textAlign: "center",
  },
  addressText: {
    fontSize: 14,
    color: "#555",
  },
  editIconContainer: {
    padding: 5,
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
  textStyle: {
    fontSize: 25,
  },
  title2: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    letterSpacing: 1,
  },
  button: {
    width: "100%",
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: "#0fd180",
    borderColor: "transparent",
  },
  images: {
    width: 44,
    height: 44,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
    gap: 10,
  },
});

export default delivery;
