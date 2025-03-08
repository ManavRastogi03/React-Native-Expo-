import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Get screen dimensions

const KundliScreen = () => {
  const [dob, setDob] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [kundli, setKundli] = useState(null);

  const validateInput = () => {
    const dobRegex = /^\d{2}-\d{2}-\d{4}$/;
    const timeRegex = /^(0[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i;
    const placeRegex = /^[A-Za-z\s]+$/;

    if (!dobRegex.test(dob)) {
      Alert.alert("Invalid DOB", "Please enter Date of Birth in DD-MM-YYYY format.");
      return false;
    }
    if (!timeRegex.test(time)) {
      Alert.alert("Invalid Time", "Please enter Time in HH:MM AM/PM format.");
      return false;
    }
    if (!placeRegex.test(place)) {
      Alert.alert("Invalid Place", "Place must contain only letters.");
      return false;
    }
    return true;
  };

  const generateKundli = () => {
    if (validateInput()) {
      setKundli({
        zodiacSign: "♉ Taurus",
        sunSign: "♈ Aries",
        moonSign: "♊ Gemini",
        ascendant: "♎ Libra",
        houses: [
          { house: 1, planet: "Mars" },
          { house: 2, planet: "Venus" },
          { house: 3, planet: "Jupiter" },
        ],
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔮 Enter Birth Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Date of Birth (DD-MM-YYYY)"
        placeholderTextColor="#aaa"
        value={dob}
        onChangeText={setDob}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Time of Birth (HH:MM AM/PM)"
        placeholderTextColor="#aaa"
        value={time}
        onChangeText={setTime}
      />

      <TextInput
        style={styles.input}
        placeholder="Place of Birth"
        placeholderTextColor="#aaa"
        value={place}
        onChangeText={setPlace}
      />

      <TouchableOpacity style={styles.button} onPress={generateKundli}>
        <Text style={styles.buttonText}>Generate Kundli</Text>
      </TouchableOpacity>

      {kundli && (
        <ScrollView style={styles.resultContainer}>
          <Text style={styles.resultTitle}>📜 Kundli Result</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🌟 Zodiac Sign</Text>
            <Text style={styles.cardText}>{kundli.zodiacSign}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>☀️ Sun Sign</Text>
            <Text style={styles.cardText}>{kundli.sunSign}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🌙 Moon Sign</Text>
            <Text style={styles.cardText}>{kundli.moonSign}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>📌 Ascendant</Text>
            <Text style={styles.cardText}>{kundli.ascendant}</Text>
          </View>

          <Text style={styles.resultTitle}>🏠 Houses & Planets</Text>
          {kundli.houses.map((house, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>House {house.house}</Text>
              <Text style={styles.cardText}>Planet: {house.planet}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1a1a1a", padding: 20, justifyContent: "center" },
  title: {
    fontSize: width > 350 ? 22 : 18,
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: width > 350 ? 16 : 14,
  },
  button: {
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { fontSize: width > 350 ? 16 : 14, fontWeight: "bold" },
  resultContainer: { marginTop: 20, padding: 10 },
  resultTitle: { fontSize: width > 350 ? 20 : 18, fontWeight: "bold", color: "#FFD700", textAlign: "center", marginBottom: 10 },
  card: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: width - 40,
    alignSelf: "center",
  },
  cardTitle: { fontSize: width > 350 ? 18 : 16, fontWeight: "bold", color: "#FFD700" },
  cardText: { fontSize: width > 350 ? 16 : 14, color: "#fff" },
});

export default KundliScreen;
