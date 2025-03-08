import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import KundliScreen from "./src/screens/KundliScreen";
import FakeChatScreen from "./src/screens/FakeChatScreen";
import AstroShopScreen from "./src/screens/AstroShopScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Kundli" component={KundliScreen} />
        <Stack.Screen name="AstroShop" component={AstroShopScreen} />
        <Stack.Screen 
          name="FakeChat" 
          component={FakeChatScreen} 
          options={{ title: "💬 Ask Astrologer" }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
