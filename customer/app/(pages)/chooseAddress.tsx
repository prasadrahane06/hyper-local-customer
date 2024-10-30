import React, { useState } from "react";
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

const chooseAddress: React.FC = () => {
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(
    null
  );

  const Add = () => {
    router.push("/addAddress");
  };

  const editAddress = () => {
    router.push("/addAddress"); // Modify this route if you want to pass any parameters
  };

  const addAddress = [
    {
      id: 1,
      place: "Home",
      name: "Address 1",
      address: "123 Main St, City, State, Zip",
    },
    {
      id: 2,
      place: "Work",
      name: "Address 2",
      address: "456 Office Blvd, City, State, Zip",
    },
    {
      id: 3,
      place: "Other",
      name: "Address 3",
      address: "789 Other Rd, City, State, Zip",
    },
  ];

  const handleSelectAddress = (id: number) => {
    setSelectedAddressId(id);
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
        <Text style={styles.title}>Choose Address</Text>
      </View>

      <View style={styles.contentContainer}>
        <CustomButton
          title=" + Add New Address"
          handlePress={Add}
          containerStyles={styles.button}
          textStyles={styles.textStyle}
        />
      </View>
      <Text style={styles.title2}>Delivers To</Text>

      <View style={styles.addressList}>
        {addAddress.map((item) => {
          const isSelected = selectedAddressId === item.id;
          return (
            <View
              key={item.id}
              style={[
                styles.addressCard,
                isSelected && styles.selectedAddressCard,
              ]}
            >
              <TouchableOpacity
                onPress={() => handleSelectAddress(item.id)}
                style={styles.addressInfo}
              >
                <Text
                  style={[
                    styles.addressPlace,
                    isSelected && styles.selectedText,
                  ]}
                >
                  {item.place}
                </Text>
                <Text style={styles.addressText}>{item.address}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={editAddress}
                style={styles.editIconContainer}
              >
                <Image
                  source={images.pencil as ImageSourcePropType} // Replace with an edit icon if available
                  style={styles.editIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          );
        })}
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
  title2: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    letterSpacing: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
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
  button: {
    width: "100%",
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: "#0fd180",
    borderColor: "transparent",
  },
  addressList: {
    paddingHorizontal: 10,
    marginTop: 10,
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
  },
  selectedAddressCard: {
    borderColor: "#0fd180",
    backgroundColor: "#E0F7EF",
  },
  addressInfo: {
    flex: 1,
  },
  addressPlace: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
    marginBottom: 5,
  },
  selectedText: {
    color: "#0fd180",
  },
  addressText: {
    fontSize: 14,
    color: "#555",
  },
  editIconContainer: {
    padding: 5,
  },
  editIcon: {
    width: 20,
    height: 20,
    tintColor: "#0fd180", // Adjust tint color as needed
  },
});

export default chooseAddress;
