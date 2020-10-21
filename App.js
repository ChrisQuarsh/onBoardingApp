import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";
import OnlineShopping from "./src/screens/OnlineShopping";
import AddToCart from "./src/screens/AddToCart";
import PaymentSuccessfull from "./src/screens/PaymentSuccessful";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnlineShopping"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#9370DB",
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={styles.menuIcon}>
              <Entypo name="menu" size={30} color="white" />
            </View>
          ),
        }}
      >
        <Stack.Screen name="OnlineShopping" component={OnlineShopping} />
        <Stack.Screen name="AddToCart" component={AddToCart} />
        <Stack.Screen
          name="PaymentSuccessfull"
          component={PaymentSuccessfull}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menuIcon: {
    marginRight: 10,
  },
});
