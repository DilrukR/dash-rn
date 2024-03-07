import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width, height } from "../../../Constants/Constants";
export default function SingleNameItem({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>ID</Text>
        <Text>{data.id}</Text>
      </View>
      <View style={styles.row}>
        <Text>Name</Text>
        <Text>{data.first_name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.1,
    width: width * 0.9,
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,

    elevation: 1,
  },

  row: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
});
