import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Redux/Slices/usersSlice";
import { SearchBar, SingleNameItem, UserModel, Header } from "../Components";
const MainScreen = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(null);
  const { users } = useSelector((state) => state.users);
  const { showModel, search } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    setShow(showModel);
  }, [show, search, showModel]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
      <Header />
      {show ? <UserModel data={search.data} /> : null}
      <View style={styles.Searchcontainer}>
        <SearchBar />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.titleCon}>
          <Text style={styles.titleText}>AVAILABLE USERS</Text>
        </View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={users.data}
          renderItem={({ item }) => <SingleNameItem data={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  Searchcontainer: {
    height: height * 0.1,
    width: width,
    backgroundColor: "white",
  },

  listContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
    padding: width / 20,
  },

  titleCon: {
    width: "100%",
    marginBottom: 10,
    alignItems: "flex-start",
    textAlign: "left",
  },

  titleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
