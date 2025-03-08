import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const zodiacSigns = [
  { name: "Aries", date: "Mar 21 - Apr 19" },
  { name: "Taurus", date: "Apr 20 - May 20" },
  { name: "Gemini", date: "May 21 - Jun 20" },
  { name: "Cancer", date: "Jun 21 - Jul 22" },
  { name: "Leo", date: "Jul 23 - Aug 22" },
  { name: "Virgo", date: "Aug 23 - Sep 22" },
  { name: "Libra", date: "Sep 23 - Oct 22" },
  { name: "Scorpio", date: "Oct 23 - Nov 21" },
  { name: "Sagittarius", date: "Nov 22 - Dec 21" },
  { name: "Capricorn", date: "Dec 22 - Jan 19" },
  { name: "Aquarius", date: "Jan 20 - Feb 18" },
  { name: "Pisces", date: "Feb 19 - Mar 20" },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: "https://source.unsplash.com/800x600/?galaxy,stars" }}
      style={styles.background}
    >
      {/* 🔮 Animated Header */}
      <View style={styles.header}>
        <Text style={styles.title}>✨ Astro Guide ✨</Text>
        <Text style={styles.subtitle}>Discover Your Zodiac Journey</Text>
      </View>

      <View style={styles.overlay}>
        <FlatList
          data={zodiacSigns}
          keyExtractor={(item) => item.name}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Details", { sign: item })}
            >
              <Text style={styles.sign}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </TouchableOpacity>
          )}
        />

        {/* 📌 Bottom Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Kundli")}
          >
            <Text style={styles.buttonText}>🔮 Generate Kundli</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("FakeChat")}
          >
            <Text style={styles.buttonText}>💬 Ask Astrologer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AstroShop")}
          >
            <Text style={styles.buttonText}>🛍️ Astro Shop</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  header: {
    width: "100%",
    height: height * 0.2, // 20% of screen height
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000", // Darker overlay for a professional look
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    // shadowColor: "#000", // Softer shadow for a polished look
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.6,
    // shadowRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFD700",
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff", // White subtitle for contrast
    marginTop: 5,
    fontStyle: "italic",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Slightly darker for a professional touch
    padding: 20,
    alignItems: "center",
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Slightly transparent card for a modern look
    paddingVertical: 18,
    borderRadius: 15,
    width: width * 0.44,
    margin: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    shadowColor: "#FFD700",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 12,
  },
  sign: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFD700",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  date: {
    fontSize: 14,
    color: "#fff",
    marginTop: 3,
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width: width * 0.7, // Responsive button width
    alignItems: "center",
    shadowColor: "#FFD700",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default HomeScreen;
