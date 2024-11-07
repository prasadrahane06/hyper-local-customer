import React from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "@/components/ui/headerComponent";

const { width } = Dimensions.get("window");

const wallet = () => {
  return (
    <SafeAreaView style={styles.container1}>
      <Header title="My Wallet" />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.balanceLabel}>BALANCE</Text>
          <Text style={styles.balance}>₹0.0</Text>
          <Text style={styles.name}>Prasad Rahane</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoCard}>
            <Icon
              name="refresh-circle"
              size={24}
              color="#0fd180"
              style={styles.icon}
            />
            <Text style={styles.infoTitle}>REFUND</Text>
            <Text style={styles.infoAmount}>₹0.0</Text>
          </View>
          <View style={styles.infoCard}>
            <Icon name="cash" size={24} color="#0fd180" style={styles.icon} />
            <Text style={styles.infoTitle}>CASHBACK</Text>
            <Text style={styles.infoAmount}>₹0.0</Text>
          </View>
          <View style={styles.infoCard}>
            <Icon name="gift" size={24} color="#0fd180" style={styles.icon} />
            <Text style={styles.infoTitle}>BONUS</Text>
            <Text style={styles.infoAmount}>₹0.0</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#EDF1D6",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },

  card: {
    width: width * 0.9,
    backgroundColor: "#0fd180",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
  },
  logoText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  balanceLabel: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "white",
    marginTop: 20,
    textAlign: "center",
  },
  balance: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  phoneNumber: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: width * 0.9,
  },
  infoCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    width: width * 0.27,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginBottom: 5,
  },
  infoTitle: {
    fontSize: 16,
    color: "black",
  },
  infoAmount: {
    fontSize: 20,
    color: "black",
    marginTop: 10,
  },
});

export default wallet;
