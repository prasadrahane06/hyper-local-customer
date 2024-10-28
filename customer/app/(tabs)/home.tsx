// import {
//   ImageSourcePropType,
//   KeyboardAvoidingView,
//   Platform,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   View,
//   Text,
//   FlatList,
//   RefreshControl,
//   Image,
// } from "react-native";
// import React, { useState, useEffect } from "react";
// import images from "@/constants/images";
// import Navbar from "@/components/ui/Navbar";
// import Card from "@/components/ui/card";
// import EmptyState from "@/components/ui/EmptyState";
// import Horizontal from "@/components/ui/horzontalScroll";
// const categories = [
//   {
//     id: "1",
//     image: images.demoitem,
//     name: "Foodgrain, Oil & Masala",
//     offer: "Up to 70% OFF",
//   },
//   {
//     id: "2",
//     image: images.demoitem,
//     name: "Beverages",
//     offer: "Up to 50% OFF",
//   },
//   { id: "3", image: images.demoitem, name: "Snacks", offer: "Up to 30% OFF" },
//   {
//     id: "4",
//     image: images.demoitem,
//     name: "Personal Care",
//     offer: "Up to 60% OFF",
//   },
//   {
//     id: "5",
//     image: images.demoitem,
//     name: "Household Items",
//     offer: "Up to 40% OFF",
//   },
//   { id: "6", image: images.demoitem, name: "Bakery", offer: "Up to 20% OFF" },
// ];

// const Home = () => {
//   const [refreshing, setRefreshing] = useState(false);
//   const onRefresh = async () => {
//     setRefreshing(true);
//     setRefreshing(false);
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         style={{ flex: 1 }}
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//       >
//         <View>
//           <FlatList
//             data={categories}
//             keyExtractor={(item) => item.id}
//             numColumns={3}
//             renderItem={({ item }) => (
//               <View style={styles.cardContainer}>
//                 <Card image={item.image} name={item.name} offer={item.offer} />
//               </View>
//             )}
//             ListHeaderComponent={() => (
//               <View>
//                 <Navbar />
//                 <Text style={styles.category}>Shop By Category</Text>
//               </View>
//             )}
//             ListEmptyComponent={() => (
//               <EmptyState
//                 title="No Events Found"
//                 subtitle="No Events available."
//               />
//             )}
//             refreshControl={
//               <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//             }
//           />
//         </View>
//     <Horozontal/>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#EDF1D6",
//   },
//   section: {
//     marginTop: 24,
//     paddingHorizontal: 16,
//   },
//   category: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 16,
//     marginTop: 16,
//     paddingHorizontal: 16,
//     letterSpacing: 0.5,
//     color: "#000",
//   },
//   cardContainer: {
//     flex: 1,
//     marginBottom: 16,
//   },
//   mainImg: {
//     width: "100%",
//     height: "100%",
//   },
// });
import {
  ImageSourcePropType,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import Horizontal from "@/components/ui/horzontalScroll";

import React from "react";
import images from "@/constants/images";
import Navbar from "@/components/ui/Navbar";
import Card from "@/components/ui/card";
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View>
            <Navbar />
          </View>
          <View style={styles.section}>
            <Text style={styles.category}>Shop By Category</Text>
            <View style={styles.row}>
              <Card
                image={images.demoitem}
                name="Foodgrain, Oil & Masala"
                offer="Up to 70% OFF"
              />
              <Card
                image={images.demoitem}
                name="Beverages"
                offer="Up to 50% OFF"
              />
              <Card
                image={images.demoitem}
                name="Snacks"
                offer="Up to 30% OFF"
              />
            </View>
            <View style={styles.row}>
              <Card
                image={images.demoitem}
                name="Personal Care"
                offer="Up to 60% OFF"
              />
              <Card
                image={images.demoitem}
                name="Household Items"
                offer="Up to 40% OFF"
              />
              <Card
                image={images.demoitem}
                name="Bakery"
                offer="Up to 20% OFF"
              />
            </View>
          </View>

          <Horizontal />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1D6",
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  category: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    marginLeft: 2,
    letterSpacing: 0.5,
    color: "#000",
  },
});
