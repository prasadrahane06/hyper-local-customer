import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";

interface CardProps {
  image: ImageSourcePropType;
  name: string;
  offer: string;
}

const Card: React.FC<CardProps> = ({ image, name, offer }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} resizeMode="contain" />
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
        <Text style={styles.offer} numberOfLines={1} ellipsizeMode="tail">
          {offer}
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 5,
    width: 100, // Fixed width
    height: 130, // Fixed height
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },
  offer: {
    fontSize: 12,
    color: "#10B981",
    fontWeight: "500",
    backgroundColor: "#F0F8FF",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 4,
    textAlign: "center",
  },
});
