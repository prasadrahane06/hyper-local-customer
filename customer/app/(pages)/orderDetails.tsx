import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "@/components/ui/headerComponent";
import images from "@/constants/images";

// Sample data
const orderdata = {
  orderId: "2700186330",
  orderPlaced: "2024-10-30, 12:26 AM",
  orderCancelled: "2024-10-30, 12:28 AM",
  amount: "₹467.82",
  status: "Cancelled",
  deliveryDate: "31 Oct, 03:00 PM - 07:00 PM",
  address: {
    name: "prasadrahan",
    phone: "9022200140",
    details:
      "silver Oak flat no 206, sai care hospital, GW5G+H9F, North Hadapsar, Hadapsar, Pune, Maharashtra 411028, India",
    postalCode: "411028",
  },
  items: [
    {
      name: "Vim Dishwash Bar Lemon (Pack Of 3)",
      weight: "200 Gm",
      originalPrice: "₹86.00",
      discountedPrice: "₹81.00",
      quantity: 1,
      image: "path_to_vim_image", // Replace with the actual image path or URI
    },
    {
      name: "Star Rice Bran Oil",
      weight: "1 Ltr",
      originalPrice: "₹175.00",
      discountedPrice: "₹135.00",
      quantity: 2,
      image: "path_to_oil_image", // Replace with the actual image path or URI
    },
  ],
};

const orderDetails: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title=" Order Details" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.summaryContainer}>
          <Text style={styles.orderInfo}>
            Order placed on {orderdata.orderPlaced}
          </Text>
          <View style={styles.orderDetails}>
            <Text style={styles.orderDetailLabel}>Order ID</Text>
            <Text style={styles.orderDetailValue}>{orderdata.orderId}</Text>
            <Text style={styles.orderDetailLabel}>Order cancelled on</Text>
            <Text style={styles.orderDetailValue}>
              {orderdata.orderCancelled}
            </Text>
            <Text style={styles.orderDetailLabel}>Net Amount</Text>
            <Text style={styles.orderDetailValue}>
              {orderdata.amount} (2 Items)
            </Text>
          </View>
        </View>

        {/* Order Status */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Order Successfull</Text>
        </View>

        {/* Delivery Information */}
        <View style={styles.deliveryContainer}>
          <Text style={styles.sectionTitle}>Delivery Information</Text>
          <Text style={styles.deliveryText}>{orderdata.address.name}</Text>
          <Text style={styles.deliveryText}>{orderdata.address.phone}</Text>
          <Text style={styles.deliveryText}>{orderdata.address.details}</Text>
          <Text style={styles.deliveryText}>{orderdata.deliveryDate}</Text>
        </View>

        {/* Items List */}
        <View style={styles.itemsContainer}>
          <View style={styles.buttonContainer}>
            <Text style={styles.sectionTitle}>2 Items</Text>
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}>Cancel Order</Text>
            </TouchableOpacity>
          </View>
          {orderdata.items.map((item, index) => (
            <View key={index} style={styles.item}>
              <Image
                source={images.demoitem}
                style={styles.itemImage}
                resizeMode="cover"
              />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemWeight}>{item.weight}</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.originalPrice}>{item.originalPrice}</Text>
                  <Text style={styles.discountedPrice}>
                    {item.discountedPrice}
                  </Text>
                </View>
                <Text style={styles.quantity}>Qty: {item.quantity}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1D6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2D3E4E",
    padding: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  helpButton: {
    padding: 8,
  },
  helpButtonText: {
    color: "white",
  },
  contentContainer: {
    padding: 16,
  },
  detailsButton: {
    backgroundColor: "red",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  detailsButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  summaryContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
  },
  orderInfo: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  orderDetails: {
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
    paddingTop: 8,
  },
  orderDetailLabel: {
    fontSize: 14,
    color: "#888888",
  },
  orderDetailValue: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  statusContainer: {
    backgroundColor: "#0fd180",
    paddingVertical: 20,
    borderRadius: 0,
    alignItems: "center",
  },
  statusText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  deliveryContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  deliveryText: {
    fontSize: 14,
    color: "#444444",
    marginBottom: 4,
  },
  itemsContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: "600",
  },
  itemWeight: {
    fontSize: 12,
    color: "#888888",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  originalPrice: {
    fontSize: 14,
    color: "#888888",
    textDecorationLine: "line-through",
    marginRight: 8,
  },
  discountedPrice: {
    fontSize: 14,
    fontWeight: "600",
  },
  quantity: {
    fontSize: 14,
    color: "#888888",
  },
});

export default orderDetails;
