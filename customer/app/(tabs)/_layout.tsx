import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import images from "../../constants/images";

// Define types for TabIcon props
interface TabIconProps {
  color: string;
  name: string;
  focused: boolean;
  icon: any; // Adjust this type based on your icon structure (e.g., ImageSourcePropType)
}

const TabIcon: React.FC<TabIconProps> = ({ color, name, focused, icon }) => {
  return (
    <View style={styles.tabIconContainer}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.icon, { tintColor: color }]}
      />
      <Text style={[styles.tabText, { color }]}>{name}</Text>
    </View>
  );
};

// Main TabLayout component
const TabLayout: React.FC = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#0fd180",
          tabBarInactiveTintColor: "#808080",
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                icon={images.home}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "Orders",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                name="Orders"
                focused={focused}
                icon={images.orders}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                name="Profile"
                focused={focused}
                icon={images.profile}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="light" />
    </>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#000",
    height: 60,
  },
  tabIconContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  icon: {
    width: 24,
    height: 24,
  },
  tabText: {
    fontSize: 12,
    fontWeight: "400", // Adjust based on your font styles
  },
});

export default TabLayout;
