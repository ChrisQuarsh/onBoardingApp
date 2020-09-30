import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import cart from "./assets/SuccessfulPurchase.png";

export default function Cart() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>PAYMENT SUCCESSFUL</Text>
      </View>

      <View>
        <Text style={styles.comment}>
          Lorem Ipsum is simply dummy text of the printing and typesentting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since 1500s, when an unknown printer took
        </Text>
      </View>

      <View>
        <Image source={cart} style={styles.image}></Image>
      </View>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <View style={styles.pagination}>
        <Text style={styles.paginationText}>Previous</Text>
        <View style={styles.pageIcons}>
          <Text style={styles.pageIcon1}></Text>
          <Text style={styles.pageIcon1}></Text>
          <Text style={styles.pageIcon2}></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 60,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },

  comment: {
    fontSize: 14,
    color: "gray",
    lineHeight: 25,
  },

  image: {
    width: 250,
    height: 250,
    marginTop: 10,
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#9370DB",
    marginHorizontal: 80,
    borderRadius: 30,
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  pageIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 20,
  },
  pageIcon1: {
    height: 9,
    width: 9,
    borderRadius: 7,
    backgroundColor: "#d8bdf2",
    marginRight: 4,
  },
  pageIcon2: {
    height: 9,
    width: 20,
    borderRadius: 7,
    backgroundColor: "#9370DB",
    marginRight: 4,
  },
  paginationText: {
    color: "#a8a8a8a8",
    fontSize: 17,
    marginRight: 60,
  },
});
