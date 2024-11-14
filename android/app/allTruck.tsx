import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { translations } from "./translations/translations";

export default function AllTruck() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState("EN");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Show 5 items per page

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://virtuous-appreciation-production.up.railway.app/show"
        );
        const result = await response.json();

        // Sort data by stars in descending order
        const sortedData = result
          .filter((entry) => entry.stars !== null && entry.stars !== undefined) // Filter out entries without stars
          .sort((a, b) => b.stars - a.stars); // Sort by stars in descending order

        setData(sortedData);
      } catch (error) {
        console.error("Error fetching data", error);
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

    fetchData();
    loadLanguagePreference();
  }, []);

  const changeLanguage = async (lang) => {
    setLanguage(lang);
    try {
      await AsyncStorage.setItem("appLanguage", lang); // Save language to AsyncStorage
    } catch (error) {
      console.error("Failed to save language preference", error);
    }
  };

  // Pagination logic: Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  // Function to handle page navigation
  const goToNextPage = () => {
    if (endIndex < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* Header Section */}
      {/* <View style={styles.header}>
        <Text style={styles.appTitle}>{translations.title[language]}</Text>
        <View style={styles.languageButtons}>
          <TouchableOpacity
            style={
              language === "EN" ? styles.selectedButton : styles.languageButton
            }
            onPress={() => changeLanguage("EN")}
          >
            <Text>EN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              language === "AR" ? styles.selectedButton : styles.languageButton
            }
            onPress={() => changeLanguage("AR")}
          >
            <Text>AR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              language === "FR" ? styles.selectedButton : styles.languageButton
            }
            onPress={() => changeLanguage("FR")}
          >
            <Text>FR</Text>
          </TouchableOpacity>
        </View>
      </View> */}

      {/* Content Section */}
      {currentPageData.map((entry) => (
        <View key={entry._id} style={styles.card}>
          <Image
            style={styles.imageCard}
            source={{
              uri:
                entry.image &&
                typeof entry.image === "string" &&
                entry.image.trim() !== ""
                  ? entry.image
                  : undefined,
            }}
          />
          {/* Fallback to the default image if image source is undefined */}
          {(!entry.image ||
            typeof entry.image !== "string" ||
            entry.image.trim() === "") && (
            <Image
              style={styles.imageCard}
              source={require("../assets/images/adaptive-icon.png")}
            />
          )}
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              {entry[`name${language}`] || entry.nameEN}
            </Text>
            <Text style={styles.cardLocation}>
              📍: {entry[`Loaction${language}`] || entry.LocationEN}
            </Text>
            <Text style={styles.cardLocation}>
              🙍‍♂️: {entry[`name${language}`] || entry.nameEN}
            </Text>
            <Text>⭐: {entry.stars}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("details", { id: entry._id })}
              style={styles.detailsButton}
            >
              <Text style={styles.detailsButtonText}>{translations?.details?.[language] || "Details"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Pagination Controls */}
      <View style={styles.paginationButtons}>
        <Button
          title="Previous"
          onPress={goToPreviousPage}
          disabled={currentPage === 1}
        />
        <Text style={styles.pageNumber}>
          {" "}
          {translations?.page?.[language] || "page"}
          {currentPage}
        </Text>
        <Button
          title="Next"
          onPress={goToNextPage}
          disabled={endIndex >= data.length}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 20,
    alignItems: "center",
  },
  header: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  appTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  languageButtons: {
    flexDirection: "row",
  },
  languageButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  selectedButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#4CAF50", // Highlight the selected button
    borderRadius: 5,
    color: "#fff",
  },
  card: {
    flexDirection: "row", // Use row layout for card
    height: 150, // Increased height for better display
    width: 300,
    backgroundColor: "#f8f8f8",
    marginVertical: 10,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  imageCard: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10, // Space between image and text
  },
  cardContent: {
    flex: 1, // Allow text section to take the remaining space
    justifyContent: "center", // Center content vertically
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardLocation: {
    color: "gray",
  },
  detailsButton: {
    marginTop: 10,
    padding: 5,
    backgroundColor: "#008FE7",
    borderRadius: 5,
    alignItems: "center",
  },
  detailsButtonText: {
    color: "white",
  },
  paginationButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  pageNumber: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
  },
});
