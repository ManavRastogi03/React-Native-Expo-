import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView } from "react-native";

const FakeChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I am your astrologer. How can I help you today?", sender: "bot" },
  ]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim() === "") return;

    const userMessage = { id: messages.length + 1, text: inputText, sender: "user" };
    const botResponse = { id: messages.length + 2, text: "🔮 I see great things in your future!", sender: "bot" };

    setMessages([...messages, userMessage, botResponse]);
    setInputText("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.sender === "user" ? styles.userMessage : styles.botMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }} // This keeps the list at the bottom
        inverted={false} // Do not invert the list, allow it to scroll from top to bottom
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          placeholderTextColor="#aaa"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1a1a1a", padding: 10 },
  messageContainer: { padding: 10, marginVertical: 5, borderRadius: 10, maxWidth: "80%" },
  userMessage: { backgroundColor: "#FFD700", alignSelf: "flex-end" },
  botMessage: { backgroundColor: "#333", alignSelf: "flex-start" },
  messageText: { color: "#fff" },
  inputContainer: { flexDirection: "row", alignItems: "center", padding: 10, backgroundColor: "#333" },
  input: { flex: 1, color: "#fff", padding: 10, backgroundColor: "#444", borderRadius: 10, marginRight: 10 },
  sendButton: { backgroundColor: "#FFD700", padding: 10, borderRadius: 10 },
  sendButtonText: { fontWeight: "bold" },
});

export default FakeChatScreen;
