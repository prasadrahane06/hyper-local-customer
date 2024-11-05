import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  ScrollView,
  Animated,
  Modal,
  SafeAreaView,
} from "react-native";
import images from "@/constants/images";
import { router } from "expo-router";
import CustomButton from "@/components/ui/CustomButton";
import TimeSlot from "@/components/ui/timeSlots";
import Header from "@/components/ui/headerComponent";

const delivery: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // State for storing address
  const [address, setAddress] = useState({
    id: 1,
    place: "Home",
    details: "123 Main St, City, State, Zip",
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
    router.push("/selectPayment");

    Animated.timing(translateY, {
      toValue: 600,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };
  const onRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
  };
  const selectPayment = () => {
    router.push("/selectPayment");
  };
  const Add = () => {
    router.push("/addAddress");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Delivery/Self Pickup" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
        <View style={styles.contentContainer2}>
          <View style={styles.slotCard}>
            <View>
              <TouchableOpacity>
                <Text style={styles.selectedText1}>Delivery Options</Text>
                <Text style={styles.addressText1}>
                  My preferred delivery slots
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.slot}>
              <Text style={styles.addressText2}>
                30 Mar ,Thu 11:00 AM to 2:00 PM
              </Text>
              <TouchableOpacity
                onPress={openModal}
                style={styles.editIconContainer}
              >
                <Text style={styles.selectedText2}>Change</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.continue}>
        <CustomButton
          title="Continue"
          containerStyles={styles.button}
          textStyles={styles.textStyle}
          handlePress={selectPayment}
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
              <TimeSlot />
              <View style={styles.closeButton}>
                <CustomButton
                  title="Continue"
                  handlePress={closeModal}
                  containerStyles={styles.button}
                  textStyles={styles.textStyle}
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    height: "50%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  contentContainer: {
    padding: 5,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  contentContainer2: {
    padding: 5,
    paddingHorizontal: 10,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#0fd180",
    borderRadius: 5,
    alignItems: "center",
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
  slotCard: {
    height: 150,

    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  addressInfo: {
    flex: 1,
  },
  slot: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    paddingVertical: 10,
    paddingHorizontal: 10,
    gap: 5,
  },
  selectedText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedText1: {
    color: "#000",
    fontSize: 20,
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
  addressText1: {
    fontSize: 20,
    color: "#555",
    marginTop: 10,
  },
  addressText2: {
    fontSize: 18,
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
  continue: {
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  button: {
    width: "100%",
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: "#0fd180",
    borderColor: "transparent",
  },
  button2: {
    width: "100%",
    minHeight: 30,
    borderRadius: 10,
    backgroundColor: "#0fd180",
    borderColor: "transparent",
  },
  textStyle2: {
    fontSize: 20,
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
