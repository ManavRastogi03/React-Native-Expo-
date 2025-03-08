import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const horoscopeData = {
  Aries: "🔥 You are full of energy today! Take on new challenges.",
  Taurus: "🌿 Stay calm and grounded. A good day for finances.",
  Gemini: "💬 Communication will be key today. Express yourself!",
  Cancer: "🌊 Emotional but fulfilling day ahead. Spend time with loved ones.",
  Leo: "🦁 A great day to lead and inspire others around you.",
  Virgo: "📊 Stay organized and productive. Success is near!",
  Libra: "⚖️ Balance is the key today. Don’t rush decisions.",
  Scorpio: "🔮 Intuition is strong today. Trust your gut feelings.",
  Sagittarius: "🏹 A perfect day for adventure and new experiences.",
  Capricorn: "💼 Work hard and you’ll see great rewards soon.",
  Aquarius: "💡 Creativity is flowing! A good day for new ideas.",
  Pisces: "🎵 Trust your emotions. Art and music will inspire you.",
};

const DetailsScreen = () => {
  const route = useRoute();
  const { sign } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{sign.name} Horoscope</Text>
        <Text style={styles.date}>{sign.date}</Text>
        <Text style={styles.horoscope}>{horoscopeData[sign.name]}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 50,
    width: width * 0.9,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  date: {
    fontSize: 18,
    color: "#ccc",
    marginBottom: 20,
  },
  horoscope: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 10,
    lineHeight: 30,
  },
});

export default DetailsScreen;