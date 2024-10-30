import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import images from "../../constants/images";
import { useRouter, usePathname } from "expo-router";

// Define prop types
interface SearchInputProps {
  placeholder: string;
  value: string;
  searchStyles: Object;
  onChangeText: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  searchStyles,
  onChangeText,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = () => {
    if (value.trim() === "") {
      Alert.alert(
        "Missing Query",
        "Please input something to search results across the database"
      );
      return;
    }

    const searchPath = `/search/${encodeURIComponent(value)}`; // Ensure it's properly encoded

    if (pathname.startsWith("/search")) {
      router.setParams({ query: value });
    } else {
      router.push(searchPath as string);
    }
  };

  return (
    <View style={[styles.container, searchStyles]}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#000"
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Image
          source={images.search as ImageSourcePropType}
          style={styles.icon}
          resizeMode="contain"
          tintColor="black"
        />
      </TouchableOpacity>
    </View>
  );
};

// Stylesheetr
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#fff",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    fontFamily: "Roboto",
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default SearchInput;
