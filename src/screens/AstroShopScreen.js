import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const items = [
  { id: "1", name: "Ruby Gem", price: "₹5000", image: "https://source.unsplash.com/100x100/?ruby" },
  { id: "2", name: "Yellow Sapphire", price: "₹7000", image: "https://source.unsplash.com/100x100/?sapphire" },
  { id: "3", name: "Rudraksha Mala", price: "₹1200", image: "https://source.unsplash.com/100x100/?rudraksha" },
  { id: "4", name: "Pooja Thali", price: "₹1500", image: "https://source.unsplash.com/100x100/?puja" },
];

const AstroShopScreen = () => {
  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item.id]: 1,
    }));
  };

  const increaseQuantity = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item.id]: (prevCart[item.id] || 0) + 1,
    }));
  };

  const decreaseQuantity = (item) => {
    setCart((prevCart) => {
      if (!prevCart[item.id]) return prevCart;

      const updatedCart = { ...prevCart };
      updatedCart[item.id] -= 1;

      if (updatedCart[item.id] === 0) delete updatedCart[item.id];
      return updatedCart;
    });
  };

  const getTotalItems = () => Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍️ Astro Shop</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>

              {cart[item.id] ? (
                <View style={styles.quantityRow}>
                  <TouchableOpacity
                    style={[styles.button, styles.minusButton]}
                    onPress={() => decreaseQuantity(item)}
                  >
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{cart[item.id]}</Text>
                  <TouchableOpacity
                    style={[styles.button, styles.plusButton]}
                    onPress={() => increaseQuantity(item)}
                  >
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity style={[styles.button, styles.addButton]} onPress={() => addToCart(item)}>
                  <Text style={styles.addButtonText}>🛒 Add to Cart</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />
      <Text style={styles.cartText}>🛒 Cart: {getTotalItems()} items</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: width * 0.05, // padding proportional to the screen width
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#333",
    padding: width * 0.05, // dynamic padding
    marginVertical: 5,
    borderRadius: 10,
  },
  image: {
    width: width * 0.15, // responsive image size
    height: width * 0.15,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    marginLeft: width * 0.03, // dynamic margin based on screen width
  },
  name: {
    fontSize: width * 0.05, // responsive text size
    color: "#FFD700",
    fontWeight: "bold",
  },
  price: {
    color: "#fff",
    marginBottom: 5,
    fontSize: width * 0.045, // responsive price size
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  button: {
    padding: width * 0.03, // button padding proportional to screen width
    borderRadius: 5,
  },
  minusButton: {
    backgroundColor: "#FF5733",
    marginRight: 10,
  },
  plusButton: {
    backgroundColor: "#33FF57",
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: "#FFD700",
    alignItems: "center",
    marginTop: 5,
  },
  addButtonText: {
    fontSize: width * 0.045, // responsive button text size
    fontWeight: "bold",
    color: "#000",
  },
  buttonText: {
    fontSize: width * 0.05, // responsive button text size
    fontWeight: "bold",
    color: "#000",
  },
  quantityText: {
    fontSize: width * 0.05, // responsive quantity text size
    color: "#FFD700",
    fontWeight: "bold",
  },
  cartText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    fontSize: width * 0.05, // responsive cart text size
  },
});

export default AstroShopScreen;
