import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function onlineShopping({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>ONLINE SHOPPING</Text>
      </View>

      <View>
        <Text style={styles.comment}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since 1500s, when an unknown printer
        </Text>
      </View>

      <View>
        <Image
          source={require("../../assets/onlineShopping.png")}
          style={styles.image}
        ></Image>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AddToCart");
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <View style={styles.pagination}>
        <View style={styles.pageIcons}>
          <Text style={styles.pageIcon2}></Text>
          <Text style={styles.pageIcon1}></Text>
          <Text style={styles.pageIcon1}></Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddToCart");
          }}
        >
          <Text style={styles.paginationText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 15,
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
    justifyContent: "space-between",
    marginTop: 15,
  },
  pageIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 20,
    marginLeft: 130,
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
  },
});
