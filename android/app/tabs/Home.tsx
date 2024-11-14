import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translations } from "../translations/translations";

export default function Home({ navigation }) {
  const [topStars, setTopStars] = useState([]);
  const [language, setLanguage] = useState("EN");

  // Fetch data based on language change
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://virtuous-appreciation-production.up.railway.app/show"
      );
      const data = await response.json();
      const validEntries = data.filter(
        (entry) => entry && entry.stars !== null && entry.stars !== undefined
      );
      const sortedEntries = validEntries.sort((a, b) => b.stars - a.stars);
      const top3 = sortedEntries.slice(0, 3);

      setTopStars(top3);
    } catch (error) {
      console.error(error);
    }
  };

  // Load language preference from AsyncStorage on app start
  const loadLanguagePreference = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem("appLanguage");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      } else {
        setLanguage("EN");
      }
    } catch (error) {
      console.error("Failed to load language preference", error);
      setLanguage("EN");
    }
  };

  // Set up useEffect to run on language change
  useEffect(() => {
    fetchData();
  }, [language]);

  useEffect(() => {
    loadLanguagePreference();
  }, []);

  // Update language and save to AsyncStorage
  const changeLanguage = async (lang) => {
    setLanguage(lang);
    try {
      await AsyncStorage.setItem("appLanguage", lang);
    } catch (error) {
      console.error("Failed to save language preference", error);
    }
  };

  const onPressLearnMore = () => {
    navigation.navigate("allTruck");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>
          {translations?.title?.[language] || "App Title"}
        </Text>
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
      </View>

      <Text style={styles.titleTop3}>
        {translations?.topRanking?.[language] || "Top Ranking"}
      </Text>
      {topStars.map((entry) => (
  <View key={entry._id} style={styles.card}>
    {entry.image ? (
      <Image style={styles.imageCardTop3} source={{ uri: entry.image }} />
    ) : (
      <Image
        style={styles.imageCardTop3}
        source={require("../../assets/images/adaptive-icon.png")}
      />
    )}

    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>
        {entry.titleAR} {/* استخدام الحقل titleAR مباشرة */}
      </Text>
      <Text style={styles.cardLocation}>
        📍: {entry.LocationAR} {/* استخدام الحقل LocationAR مباشرة */}
      </Text>
      <Text style={styles.cardLocation}>
        🙍‍♂️: {entry.nameAR} {/* استخدام الحقل nameAR مباشرة */}
      </Text>
      <Text>⭐: {entry.stars || 0}</Text>

      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => navigation.navigate("details", { id: entry._id })}
      >
        <Text style={styles.buttonText}>
          {translations?.details?.[language] || "Details"}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
))}


      <View>
        <TouchableOpacity
          style={styles.learnMoreButton}
          onPress={onPressLearnMore}
        >
          <Text style={styles.learnMoreButtonText}>
            {translations?.learnMore?.[language] || "learn more"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardLocation: {
    color: "gray",
  },
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
  titleTop3: {
    fontSize: 24,
    margin: 10,
    fontWeight: "800",
  },
  card: {
    flexDirection: "row", // Aligns image and content side by side
    height: 150, // Increased the height for better display
    width: 300,
    backgroundColor: "#f8f8f8",
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  cardContent: {
    flex: 1, // Take remaining space on the right
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  imageCardTop3: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 10,
  },
  detailsButton: {
    backgroundColor: "#008FE7", // Details button color
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "white",
    fontSize: 14, // Smaller font size for button text
    fontWeight: "600",
  },
  learnMoreButton: {
    backgroundColor: "#008FE7",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  learnMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
