import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from "expo-location";

const CurrentLocation = () => {
  const [city, setCity] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);
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
        setCity(result.city || "Unknown City");
        setRegion(result.region || "Unknown Region");
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
      ) : (
        <View style={styles.locationContainer}>
          <Text style={styles.city}>{city || "Loading..."}</Text>

          <Text style={styles.region}>{region || ""}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  locationContainer: {
    alignItems: "center",
  },
  city: {
    fontSize: 18,
    fontWeight: "bold",
  },
  region: {
    fontSize: 16,
    color: "bold",
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default CurrentLocation;
