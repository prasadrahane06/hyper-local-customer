import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type OrderCardProps = {
  orderId: string;
  amount: number;
  savingsLost?: number;
  status: "Cancelled" | "Successful";
  date: string;
  onPressDetails: () => void;
};

const OrderCard: React.FC<OrderCardProps> = ({
  orderId,
  amount,
  savingsLost,
  status,
  date,
  onPressDetails,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.orderId}>Order ID: #{orderId}</Text>
      <Text style={styles.date}>
        {status === "Cancelled" ? "Cancelled on" : "Ordered on"} {date}
      </Text>
      <View
        style={[
          styles.status,
          status === "Cancelled" ? styles.cancelled : styles.successful,
        ]}
      >
        <Text style={styles.statusText}>{status}</Text>
      </View>
      <View style={styles.details}>
        <Text>Order ID: #{orderId}</Text>
        <Text>Amount: ₹{amount.toFixed(2)}</Text>
        {status === "Cancelled" && savingsLost !== undefined && (
          <Text style={styles.savingsLost}>
            Savings Lost ₹{savingsLost.toFixed(2)}
          </Text>
        )}
        <View style={styles.detailsButton1}>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={onPressDetails}
          >
            <Text style={styles.detailsButtonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  orderId: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    color: "#888",
    marginBottom: 8,
  },
  status: {
    position: "absolute",
    right: 16,
    top: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  cancelled: {
    backgroundColor: "#f8d7da",
  },
  successful: {
    backgroundColor: "#d4edda",
  },
  statusText: {
    color: "#721c24",
    fontWeight: "bold",
  },
  details: {
    marginTop: 16,
  },
  savingsLost: {
    color: "#e74c3c",
    marginVertical: 4,
    fontWeight: "bold",
  },
  detailsButton: {
    backgroundColor: "#0fd180",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  detailsButton1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  detailsButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default OrderCard;
