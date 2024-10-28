import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

interface CardProps {
  image: ImageSourcePropType;
  name: string;
  offer: string;
  cardStyles: Object;
  imageStyles: Object;
  price: any;
  quantity: any;
  nameStyles: Object;
  priceStyles: Object;
  buttonStyle: Object;
  quantitySelectorStyle: Object;
}

const Card: React.FC<CardProps> = ({
  image,
  name,
  offer,
  cardStyles,
  imageStyles,
  price,
  quantity,
  nameStyles,
  priceStyles,
  buttonStyle,
  quantitySelectorStyle,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(0);

  const handleAdd = () => setCurrentQuantity(1); // Start with 1 on first add
  const incrementQuantity = () => setCurrentQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setCurrentQuantity((prev) => Math.max(prev - 1, 0));

  return (
    <View style={styles.container}>
      <View style={[styles.card, cardStyles]}>
        <Image source={image} style={[styles.image, imageStyles]} />

        {/* <Text
          style={[styles.name, nameStyles]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {name}
        </Text> */}
        {offer && (
          <Text style={styles.offer} numberOfLines={1} ellipsizeMode="tail">
            {offer}
          </Text>
        )}

        {quantity && price && (
          <View style={[styles.priceContainer, priceStyles]}>
            <Text style={[styles.name, nameStyles]} ellipsizeMode="tail">
              {name}
            </Text>
            <Text
              style={styles.quantity}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {quantity}
            </Text>
            <Text style={styles.price} numberOfLines={1} ellipsizeMode="tail">
              Rs {price}
            </Text>
            {currentQuantity === 0 ? (
              <TouchableOpacity
                style={(styles.button, buttonStyle)}
                onPress={handleAdd}
              >
                <Text style={styles.buttonText}>ADD</Text>
              </TouchableOpacity>
            ) : (
              <View style={[styles.quantitySelector]}>
                <TouchableOpacity
                  onPress={decrementQuantity}
                  style={(styles.quantityButton, quantitySelectorStyle)}
                >
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.currentQuantity}>{currentQuantity}</Text>
                <TouchableOpacity
                  onPress={incrementQuantity}
                  style={(styles.quantityButton, quantitySelectorStyle)}
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 5,
    width: 100,
    height: 130,
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
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    letterSpacing: 1,
  },
  offer: {
    fontSize: 12,
    color: "#000",
    fontWeight: "500",
    paddingHorizontal: 4,
    backgroundColor: "#10B981",
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 4,
    textAlign: "center",
  },
  priceContainer: {
    alignItems: "center",
    marginTop: 4,
  },
  quantity: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    letterSpacing: 1,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#10B981",
    marginTop: 2,
    letterSpacing: 1,
  },
  button: {
    width: 90,
    minHeight: 25,
    borderRadius: 7,
    backgroundColor: "#0fd180",
    borderColor: "transparent",
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: 1,
    paddingVertical: 2,
    paddingHorizontal: 5,
    textTransform: "uppercase",
  },
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  quantityButton: {
    backgroundColor: "#0fd180",
    borderRadius: 5,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  currentQuantity: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});
