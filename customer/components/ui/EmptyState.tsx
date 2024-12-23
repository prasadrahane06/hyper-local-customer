import {
  View,
  Text,
  Image,
  StyleSheet,
  ViewStyle,
  ImageSourcePropType,
} from "react-native";
import images from "../../constants/images";

interface EmptyStateProps {
  title: string;
  subtitle: string;
  otherstyles?: ViewStyle | ViewStyle[];
  Images?: Image;
  imageStyles?: Object;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  subtitle,
  otherstyles,
  Images,
  imageStyles,
}) => {
  return (
    <View style={[styles.container, otherstyles]}>
      <Image
        source={Images as ImageSourcePropType}
        resizeMode="contain"
        style={[styles.image, imageStyles]}
      />
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 80, // Adjust as needed
  },
  image: {
    width: 200,
    height: 200,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "bold",

    textAlign: "center",
    color: "#000", // Set to white or any color needed
    marginTop: 16,
  },
});

export default EmptyState;
