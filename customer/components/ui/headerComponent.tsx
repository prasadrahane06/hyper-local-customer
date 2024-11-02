import React, { useEffect, useState } from "react";
import {
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import images from "../../constants/images";
import { router } from "expo-router";
interface headerComponentProps {
  title: string;
}
const headerComponent: React.FC<headerComponentProps> = ({ title }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => router.back()}>
              <Image
                source={images.back as ImageSourcePropType}
                style={styles.backImage}
                resizeMode="contain"
                tintColor="black"
              />
            </TouchableOpacity>
            <Text style={styles.title2}>{title}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default headerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 0,
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
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  backImage: {
    width: 24,
    height: 24,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
});
