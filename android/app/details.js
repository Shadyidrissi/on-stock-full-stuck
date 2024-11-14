import {
  Text,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native"; // To get route params
import AsyncStorage from "@react-native-async-storage/async-storage"; // For language persistence
import { translations } from "./translations/translations"; // Import translations

export default function Home() {
  const [itemData, setItemData] = useState(null); // State to hold fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [language, setLanguage] = useState("EN"); // State for language preference
  const route = useRoute(); // Hook to access route params

  const { id } = route.params; // Get ID from route parameters


  
  useEffect(() => {
    // Function to fetch item details based on ID
    const fetchItemData = async () => {
      try {
        const response = await fetch(
          `https://virtuous-appreciation-production.up.railway.app/show/${id}`
        );
        const data = await response.json();
        setItemData(data); // Set fetched data to state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Failed to fetch item data:", error);
        setLoading(false);
      }
    };

    // Load language preference from AsyncStorage
    const loadLanguagePreference = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem("appLanguage");
        if (savedLanguage) {
          setLanguage(savedLanguage);
        }
      } catch (error) {
        console.error("Failed to load language preference", error);
      }
    };

    fetchItemData();
    loadLanguagePreference();
  }, [id]);

  // Show loading indicator while fetching data
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#008FE7" />
        <Text>{translations.loading?.[language] || "Loading..."}</Text>
      </View>
    );
  }

  // If no data is found
  if (!itemData) {
    return (
      <View style={styles.container}>
        <Text>{translations.itemNotFound?.[language] || "Item not found."}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image
        style={styles.image}
        source={{ uri: itemData.image || "https://via.placeholder.com/300" }} // Use fetched image or a placeholder
      />

      {/* Title */}
      <Text style={styles.title}>
        {itemData[`title${language}`] || translations.noTitle?.[language] || "No Title Available"}
      </Text>

      {/* Location and Name in the Same Line */}
      <View style={styles.locationAndName}>
        <Text style={styles.location}>
          📍 {itemData[`Loaction${language}`] || translations.noLocation?.[language] || "No Location"}
        </Text>
        <Text style={styles.name}>
          {itemData[`name${language}`] || translations.noName?.[language] || "No Name"}
        </Text>
      </View>

      {/* Phone Number with Moroccan Flag */}
      <View style={styles.phoneContainer}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefSk6ERk6LWO111yGpvatrdvoHcTbfrtWaozptkvATMEQMCdJrlxmpNWhLHJ8atXm7qY&usqp=CAU",
          }} // Add local flag image
          style={styles.flag}
        />
        <Text style={styles.phoneNumber}>
          {itemData.phone || translations.defaultPhone?.[language] || "+212 XXX-XXXXXX"}
        </Text>
      </View>

      {/* Price in DH */}
      <Text style={styles.price}>
        {translations.price?.[language] || "Price"}:{" "}
        {itemData.Price ? `${itemData.Price} DH` : translations.notAvailable?.[language] || "Not Available"}
      </Text>

      {/* Description */}
      <ScrollView>
        <Text style={styles.description}>
          {translations.description?.[language] || "Description"}:{" "}
          {itemData[`Description${language}`] || translations.noDescription?.[language] || "No Description Available"}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  locationAndName: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    color: "gray",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  flag: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  phoneNumber: {
    fontSize: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#008FE7",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
});
