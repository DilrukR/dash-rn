import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { fetchsearch } from "../../../Redux/Slices/searchSlice";
import { width, height } from "../../../Constants/Constants";
export default function Searchbar() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      dispatch(fetchsearch(searchQuery));
      Keyboard.dismiss();
    } else {
      alert("please enter some text to search");
    }
  };

  return (
    <View style={styles.containerSearch}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchQuery}
        value={searchQuery}
        placeholder='Search...'
        placeholderTextColor='#999'
      />

      <Button style={styles.Button} title='Search' onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerSearch: {
    width: width,
    height: height * 0.1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    width: width * 0.7,
    height: height * 0.043,
    paddingLeft: 10,
    backgroundColor: "#f2f2f2",
  },
});
