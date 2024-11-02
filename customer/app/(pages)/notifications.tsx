import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../components/ui/EmptyState";
import Card from "@/components/ui/card";
import images from "@/constants/images";
import { router } from "expo-router";
import Payable from "@/components/ui/payable";

interface Category {
  id: string;
  image: ImageSourcePropType;
  name: string;
  mrp: string;
  category: string;
  quantity: string;
  price: string;
}

const Notifications: React.FC = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "1",

      title: "Limited Time Offer!",
      message: "Get 20% off on Sugar and Honey this week only!",
      timestamp: "2024-11-01T10:00:00Z", // Example timestamp
    },
    {
      id: "2",

      title: "Freshly Baked!",
      message: "Enjoy a buy one, get one free deal on Bread today!",
      timestamp: "2024-11-01T11:00:00Z", // Example timestamp
    },
  ]);

  const onRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
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
        <Text style={styles.title}>Notifications</Text>
      </View>

      <View style={styles.contentContainer}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.notificationContainer]}>
              <View>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationMessage}>{item.message}</Text>
              </View>
              <Text style={styles.notificationTimestamp}>
                {new Date(item.timestamp).toLocaleString()}
              </Text>
            </View>
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="No notifications yet"
              subtitle="No notifications yet"
              Images={images.notification}
              imageStyles={styles.imageStyless}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
    flex: 1,
    paddingHorizontal: 10,
  },
  images: {
    width: 24,
    height: 24,
    borderRadius: 12, // Circular border
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  cardStyle: {
    flexDirection: "row",
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
  imageStyless: {
    tintColor: "#0fd180",
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
  notificationContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    marginTop: 10,
  },
  imageStyle: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    marginRight: 16,
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
  totals: {
    flexDirection: "row",
    paddingHorizontal: 10,
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

  notificationTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FF5733",
    marginBottom: 5, // Space between title and message
  },
  notificationMessage: {
    fontSize: 14,
    color: "#333333",
    marginBottom: 5, // Space below message
  },
  notificationTimestamp: {
    fontSize: 12,
    color: "#888888",
    alignSelf: "flex-end", // Align timestamp to the bottom right
  },
});

export default Notifications;
