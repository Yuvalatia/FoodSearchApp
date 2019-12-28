import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({
  userSearchInput,
  onSearchInputChange,
  onEndInputChange
}) => {
  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.searchIconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={userSearchInput}
        onChangeText={onSearchInputChange}
        onEndEditing={onEndInputChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 20,
    flexDirection: "row"
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  searchIconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  }
});

export default SearchBar;
