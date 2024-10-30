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
import CustomButton from "@/components/ui/CustomButton";

const delivery: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
            tintColor="black"
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
        <CustomButton
          title=" + Add Address"
          handlePress={Add}
          containerStyles={styles.button}
          textStyles={styles.textStyle}
        />
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

  title: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    letterSpacing: 1,
    textAlign: "center",
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
