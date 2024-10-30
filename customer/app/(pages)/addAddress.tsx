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
  Modal,
  Animated,
} from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from "expo-location";
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
import Manual from "@/components/ui/manualAddress";
interface Address {
  name?: string;
  street?: string;
  city?: string;
  region?: string;
  postalCode?: string;
}
const addAddress: React.FC = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [address, setAddress] = useState<string>("Fetching address...");
  const [region, setRegion] = useState<Region>({
    latitude: 18.5194,
    longitude: 73.8567,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [translateY] = useState(new Animated.Value(600)); // Initial value off-screen
  const openModal = () => {
    setModalVisible(true);
    Animated.timing(translateY, {
      toValue: 0, // Move to the top (visible)
      duration: 300, // Duration of the animation
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  };
  const closeModal = () => {
    router.push("/chooseAddress");

    Animated.timing(translateY, {
      toValue: 600,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setAddress("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      setRegion({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      fetchAddress(
        currentLocation.coords.latitude,
        currentLocation.coords.longitude
      );
    })();
  }, []);

  const fetchAddress = async (latitude: number, longitude: number) => {
    const [address] = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    if (address) {
      setAddress(
        `${address.name}, ${address.street}, ${address.city}, ${address.region}, ${address.postalCode}`
      );
    }
  };

  const handleRegionChange = (region: Region) => {
    setRegion(region);
    fetchAddress(region.latitude, region.longitude);
  };

  const handleUseCurrentLocation = () => {
    if (location) {
      const { latitude, longitude } = location.coords;
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      fetchAddress(latitude, longitude);
    }
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

        <Text style={styles.title}>Add Address</Text>
      </View>

      <View style={styles.imageContainer}>
        <SearchInput
          placeholder=" Start typing to search... "
          value={""}
          onChangeText={(text) => console.log(text)}
          searchStyles={styles.searchStyle}
        />
      </View>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={handleRegionChange}
      >
        {/* Use the location state for the Marker */}
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
          />
        )}
      </MapView>

      <TouchableOpacity
        style={styles.useLocationButton}
        onPress={handleUseCurrentLocation}
      >
        <Text style={styles.useLocationButtonText}>Use current location</Text>
      </TouchableOpacity>

      <View style={styles.addressContainer}>
        <Image
          source={images.pin as ImageSourcePropType}
          style={styles.images}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.addressTitle}>Your Location</Text>
          <Text style={styles.addressText}>{address}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <CustomButton
          handlePress={openModal}
          title="Enter Complete Address"
          containerStyles={styles.button}
          textStyles={styles.textStyle}
        />
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalOverlay}>
            <Animated.View
              style={[styles.modalContainer, { transform: [{ translateY }] }]}
            >
              <Manual />
              <View style={styles.closeButton}>
                <CustomButton
                  title="Save & Continue"
                  handlePress={closeModal}
                  containerStyles={styles.button2}
                />
              </View>
            </Animated.View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDF1D6",
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    justifyContent: "flex-end", // Align to the bottom
  },
  modalContainer: {
    height: "50%", // Half the screen height
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#0fd180",
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  map: {
    flex: 1,
    marginTop: 10,
  },
  contentContainer: {
    padding: 5,
    marginTop: 5,
    paddingHorizontal: 16,
  },
  searchStyle: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 45,
    paddingHorizontal: 16,
    backgroundColor: "#fff",

    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#fff",
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
  useLocationButton: {
    margin: 15,
    backgroundColor: "#0fd180",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  useLocationButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  textStyle: {
    fontSize: 22,
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
    paddingHorizontal: 16,
  },
  button2: {
    width: "100%",
    minHeight: 30,
    borderRadius: 10,
    backgroundColor: "#0fd180",
    borderColor: "transparent",
    paddingHorizontal: 16,
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
  addressContainer: {
    flexDirection: "row",
    gap: 5,
    padding: 15,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addressText: {
    marginTop: 5,
    color: "#555",
  },
});

export default addAddress;
