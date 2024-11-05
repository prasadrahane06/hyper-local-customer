import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  RefreshControl,
} from "react-native";
import Header from "@/components/ui/headerComponent";
import EmptyState from "@/components/ui/EmptyState";
import OrderCard from "@/components/ui/OrderCard";
import images from "@/constants/images";
import { router } from "expo-router";

const ordersData = [
  {
    orderId: "2700186330",
    amount: 467.82,
    savingsLost: 85.0,
    status: "Cancelled" as const,
    date: "2024-10-30",
  },
  {
    orderId: "2700186331",
    amount: 1020.5,
    status: "Successful" as const,
    date: "2024-10-15",
  },
];

const orders: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Orders" />

      <View style={styles.contentContainer}>
        <FlatList
          data={ordersData}
          keyExtractor={(item) => item.orderId}
          renderItem={({ item }) => (
            <OrderCard
              key={item.orderId}
              orderId={item.orderId}
              amount={item.amount}
              savingsLost={item.savingsLost}
              status={item.status}
              date={item.date}
              onPressDetails={() => router.push(`/orderDetails`)}
            />
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="You haven't placed any order  yet"
              subtitle="You haven't placed any order  yet"
              Images={images.orders}
              imageStyles={styles.imageStyless}
            />
          )}
          refreshControl={<RefreshControl />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1D6",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  imageStyless: {
    tintColor: "#0fd180",
  },
});

export default orders;
