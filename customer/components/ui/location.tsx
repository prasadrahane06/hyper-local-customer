import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from "expo-location";

const CurrentLocation = () => {
  const [placeName, setPlaceName] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLocation.coords;

      let [result] = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (result) {
        const address = `${result.city}, ${result.region}`;
        setPlaceName(address);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
      ) : (
        <Text style={styles.text}>{placeName || "Loading..."}</Text> // Show place name or loading text
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginTop: 7,
  },
});

export default CurrentLocation;
