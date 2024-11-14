import { Text, View, ScrollView, Button } from "react-native";
import React, { useEffect, useState } from "react"; // Import React here
import * as Linking from 'expo-linking';
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { translations } from "../translations/translations";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';

export default function Contact() {
  const [language, setLanguage] = useState("EN"); // Default language set to English

  const loadLanguagePreference = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem("appLanguage");
      setLanguage(savedLanguage || "EN"); // Default to English if nothing is stored
    } catch (error) {
      console.error("Failed to load language preference", error);
      setLanguage("EN"); // Default on error
    }
  };

  // Load language preference every time the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      loadLanguagePreference();
    }, [])
  );
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View>
        <Text style={styles.titleTop3}>{translations?.aboutTitle?.[language] || "About Us"}</Text>
      </View>
      <Text style={styles.Paragraph}>
      {translations?.aboutParagraph?.[language] || "..."}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  allIcon: {
    width: "80%",
  },
  titleInfo: {
    fontSize: 18,
    margin: 10,
    fontWeight: "600",
  },
  viewIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  Paragraph: {
    fontSize: 16,
    width: "90%",
  },
  titleTop3: {
    fontSize: 24,
    margin: 10,
    fontWeight: "800",
  },
  scrollViewContent: {
    paddingVertical: 20,
    alignItems: "center",
  },
});
