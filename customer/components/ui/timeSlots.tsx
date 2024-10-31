import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const timeSlots: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(
    null
  );

  const days = [
    { key: "Thu", date: 30 },
    { key: "Fri", date: 31 },
    { key: "Sat", date: 1 },
    { key: "Sun", date: 2 },
  ];

  const addAddress = [
    {
      id: 1,
      time: "11:00 AM to 2:00 PM",
    },
    {
      id: 2,
      time: "1:00 PM to 4:00 PM",
    },
  ];

  const handleSelectDay = (dayKey: string) => {
    setSelectedDay(dayKey);
    setSelectedAddressId(null); // Reset selected time slot when day changes
  };

  const handleSelectAddress = (id: number) => {
    setSelectedAddressId(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.timeSlots}>
          <Text style={styles.selectedText1}>Choose your Day of Delivery</Text>

          <View style={styles.days}>
            {days.map((day) => (
              <TouchableOpacity
                key={day.key}
                style={[
                  styles.select,
                  selectedDay === day.key && styles.selectedDay,
                ]}
                onPress={() => handleSelectDay(day.key)}
              >
                <Text style={styles.selectText}>
                  {day.key} - {day.date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {selectedDay && (
            <View style={styles.addressList}>
              <Text style={styles.addressPlace}>
                At what time would you like to have your order?
              </Text>
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
                        {item.time}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  addressList: {
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
  timeSlots: {
    flex: 1,
  },
  addressText2: {
    fontSize: 18,
    color: "#555",
  },
  selectedText1: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  days: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
    width: "100%",
  },
  select: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedDay: {
    borderColor: "#0fd180",
    backgroundColor: "#E0F7EF",
  },
  selectText: {
    fontSize: 16,
    color: "#333",
  },
});

export default timeSlots;
