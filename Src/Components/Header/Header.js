import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 20 }}>User Information</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    display: "flex",
    marginTop: 24,
    justifyContent: "center",
    backgroundColor: "#3C88A6",
    paddingLeft: 20,
  },
});
