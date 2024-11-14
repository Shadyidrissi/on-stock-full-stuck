import React, { useEffect, useState } from "react"; // Import React here
import { Text, View, ScrollView, Button } from "react-native";
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
        <Text style={styles.titleTop3}>{translations?.contactTitle?.[language] || "Contact Us"}</Text>
      </View>
      <Text style={styles.Paragraph}>
      {translations?.contactDescription?.[language] || "..."}
      </Text>
      <Text style={styles.titleInfo}>{translations?.contactTitle2?.[language] || "Contact Info"}</Text>
      <ScrollView style={styles.allIcon}>
        <View style={styles.viewIcon}>
          {/* Phone Icon */}
          <Svg
            style={styles.icon}
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="black"
          >
            <Path
              d="M11 17.5C10.5858 17.5 10.25 17.8358 10.25 18.25C10.25 18.6642 10.5858 19 11 19H13C13.4142 19 13.75 18.6642 13.75 18.25C13.75 17.8358 13.4142 17.5 13 17.5H11Z"
              fill="#343C54"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 2C6.75736 2 5.75 3.00736 5.75 4.25V19.75C5.75 20.9926 6.75736 22 8 22H16C17.2426 22 18.25 20.9926 18.25 19.75V4.25C18.25 3.00736 17.2426 2 16 2H8ZM7.25 4.25C7.25 3.83579 7.58579 3.5 8 3.5H16C16.4142 3.5 16.75 3.83579 16.75 4.25V19.75C16.75 20.1642 16.4142 20.5 16 20.5H8C7.58579 20.5 7.25 20.1642 7.25 19.75V4.25Z"
              fill="black"
            />
          </Svg>
          <Button
            title="+212 643082137"
            onPress={() => Linking.openURL("tel:+212643082137")}
          />
        </View>

        <View style={styles.viewIcon}>
          {/* Facebook Icon */}
          <Svg
            style={styles.icon}
            width="30"
            height="30"
            viewBox="0 0 24 25"
            fill="black"
          >
            <Path
              d="M12 2.53906C17.5229 2.53906 22 7.01621 22 12.5391C22 17.5304 18.3431 21.6674 13.5625 22.4176V15.4297H15.8926L16.3359 12.5391L13.5625 12.5387V10.6632C13.5625 10.657 13.5625 10.6509 13.5626 10.6447C13.5626 10.6354 13.5628 10.6262 13.5629 10.6169C13.578 9.84259 13.9742 9.10156 15.1921 9.10156H16.4531V6.64062C16.4531 6.64062 15.3087 6.44492 14.2146 6.44492C11.966 6.44492 10.4842 7.78652 10.4386 10.2193C10.4379 10.2578 10.4375 10.2965 10.4375 10.3355V12.5387H7.89844V15.4293L10.4375 15.4297V22.4172C5.65686 21.667 2 17.5304 2 12.5391C2 7.01621 6.47715 2.53906 12 2.53906Z"
              fill="black"
            />
          </Svg>
          <Button
            title="Shady Idrs"
            onPress={() => Linking.openURL("https://expo.dev/")}
          />
        </View>

        <View style={styles.viewIcon}>
          {/* WhatsApp Icon */}
          <Svg
            style={styles.icon}
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#343C54"
          >
            <Path
              d="M19.074 4.89389C17.2091 3.02894 14.6689 2 12.0644 2C6.59814 2 2.12869 6.4373 2.12869 11.9035C2.12869 13.672 2.57885 15.3441 3.44702 16.8875L2.03223 22L7.33769 20.6495C8.78464 21.4212 10.4245 21.8714 12.0965 21.8714C17.5306 21.8392 21.9679 17.4019 21.9679 11.9035C21.9679 9.26688 20.939 6.791 19.074 4.89389ZM12.0322 20.1672C10.5853 20.1672 9.07403 19.7492 7.82001 18.9775L7.49846 18.7846L4.37949 19.5884L5.24766 16.5659L5.05473 16.2444C4.25088 14.926 3.80072 13.3826 3.80072 11.8392C3.80072 7.30547 7.46631 3.63987 12.0322 3.63987C14.2187 3.63987 16.2766 4.50804 17.82 6.05145C19.3634 7.59486 20.2316 9.68489 20.2316 11.9035C20.2959 16.5016 16.566 20.1672 12.0322 20.1672ZM16.566 13.9936C16.3088 13.865 15.119 13.254 14.8297 13.2219C14.6046 13.1254 14.4116 13.0932 14.283 13.3505C14.1544 13.6077 13.6399 14.1222 13.5113 14.3151C13.3827 14.4437 13.2541 14.508 12.9647 14.3473C12.7075 14.2187 11.9358 13.9936 10.9711 13.0932C10.2316 12.4502 9.71711 11.6463 9.62065 11.3569C9.49203 11.0997 9.5885 11.0032 9.74927 10.8424C9.87788 10.7138 10.0065 10.5852 10.103 10.3923C10.2316 10.2637 10.2316 10.135 10.3602 9.97428C10.4888 9.84566 10.3924 9.65274 10.328 9.52412C10.2316 9.3955 9.78142 8.17364 9.55634 7.65917C9.36342 7.1447 9.13834 7.24116 9.00972 7.24116C8.8811 7.24116 8.68817 7.24116 8.55956 7.24116C8.43094 7.24116 8.1094 7.27331 7.91647 7.5627C7.69139 7.81994 7.0483 8.43087 7.0483 9.65273C7.0483 10.8746 7.91647 12 8.07724 12.2251C8.20586 12.3537 9.84573 14.8939 12.2895 15.9871C12.8682 16.2444 13.3184 16.4051 13.7043 16.5338C14.283 16.7267 14.8297 16.6624 15.2477 16.6302C15.73 16.5981 16.6946 16.0514 16.9197 15.4405C17.1126 14.8939 17.1126 14.3473 17.0483 14.2508C16.984 14.1865 16.7911 14.09 16.566 13.9936Z"
              fill="black"
            />
          </Svg>

          <Button
            title="WhatsApp"
            onPress={() => Linking.openURL("https://wa.me/212643082137")}
          />
        </View>

        <View style={styles.viewIcon}>
          {/* Instagram Icon */}
          <Svg
            style={styles.icon}
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#E4405F"
          >
            <Path
              d="M7.75 2C4.99187 2 2.75 4.24187 2.75 7V17C2.75 19.7581 4.99187 22 7.75 22H17C19.7581 22 22 19.7581 22 17V7C22 4.24187 19.7581 2 17 2H7.75ZM17 6C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7C16 6.44772 16.4477 6 17 6ZM12 7.5C14.4853 7.5 16.5 9.51472 16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5ZM12 9C10.6193 9 9.5 10.1193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.1193 13.3807 9 12 9Z"
              fill="black"
            />
          </Svg>
          <Button
            title="Instagram"
            onPress={() =>
              Linking.openURL("https://instagram.com/yourusername")
            }
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 20,
    alignItems: "center",
  },
  titleTop3: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  Paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginVertical: 10,
  },
  titleInfo: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 15,
  },
  allIcon: {
    width: "100%",
  },
  viewIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});
