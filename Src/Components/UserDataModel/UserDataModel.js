import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import { height, width } from "../../../Constants/Constants";
import { setShowModel } from "../../../Redux/Slices/searchSlice";
import { useDispatch } from "react-redux";
export default function UserDataModel({ data }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        {data?.first_name !== undefined ? (
          <View>
            <Image
              source={{ uri: data?.avatar }}
              style={{ width: 100, height: 100 }}
            />
            <Text>{data?.first_name}</Text>
            <Text>{data?.last_name}</Text>
            <Text>{data?.email}</Text>
          </View>
        ) : (
          <Text>User Not Found</Text>
        )}

        <Button
          title='Close'
          onPress={() => dispatch(setShowModel(false))}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: width,
    height: height,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 99,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  dataContainer: {
    width: width * 0.9,
    height: height * 0.3,
    backgroundColor: "#fff",
  },
});
