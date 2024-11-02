// ProfileScreen.tsx
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import images from "@/constants/images";
import { router } from "expo-router";
import Header from "@/components/ui/headerComponent";
const menuItems = [
  {
    title: "My Info",
    icon: Ionicons,
    iconName: "person-outline",
    route: "/myInfo",
  },
  {
    title: "Manage Addresses",
    icon: Ionicons,
    iconName: "location-outline",
    route: "/manageAddress",
  },
  {
    title: "Manage Payments",
    icon: Ionicons,
    iconName: "card-outline",
    route: "/managePayments",
  },
  {
    title: "Change Password",
    icon: Ionicons,
    iconName: "lock-closed-outline",
    route: "/changePassword",
  },
  // Add more items as needed
];
const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header title="Profile" />

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.profileInfo}>
            <View style={styles.avatar}>
              <FontAwesome name="user" size={50} color="#0fd180" />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.name}>xyz</Text>
              <Text style={styles.phone}>+91-1234567890</Text>
            </View>
          </View>

          {/* Menu Items */}
          <View style={styles.menu}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => router.push(item.route)} // Navigate to the specific route
              >
                <View style={styles.menuIcon}>
                  <item.icon name={item.iconName} size={24} color="#4F4F4F" />
                </View>
                <Text style={styles.menuText}>{item.title}</Text>
                <Ionicons name="chevron-forward" size={20} color="#0fd180" />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1D6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2F3A4D",
    padding: 16,
  },
  backIcon: {
    marginRight: 16,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  title2: {
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
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  phone: {
    fontSize: 14,
    color: "#4F4F4F",
  },
  verifiedBadge: {
    backgroundColor: "#4CAF50",
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginTop: 4,
  },
  verifiedText: {
    color: "white",
    fontSize: 12,
  },
  menu: {
    marginTop: 16,
    backgroundColor: "white",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  menuIcon: {
    width: 24,
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: "#4F4F4F",
  },
  versionText: {
    textAlign: "center",
    color: "#B0B0B0",
    fontSize: 14,
    padding: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 16,
  },
});
