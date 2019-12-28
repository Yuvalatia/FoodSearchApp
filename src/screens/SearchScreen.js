import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

import useResults from "../hooks/useResults";

const SearchScreen = () => {
  // STATE
  const [userSearchInput, setUserSearchInput] = useState("");

  // USE HOOK FOR YELP SEARCH RESULTS
  const [results, searchApi, error] = useResults();

  // Seperate the results to price groups
  const filterResultsByPrice = price => {
    // price = '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        userSearchInput={userSearchInput}
        onSearchInputChange={newSearchInput => {
          setUserSearchInput(newSearchInput);
        }}
        onEndInputChange={() => searchApi(userSearchInput)}
      />

      {// USER INPUT INTERACTION
      error ? (
        <Text style={styles.error}>error</Text>
      ) : userSearchInput ? (
        <Text style={styles.userInputShower}>
          You search for "{userSearchInput}", results: {results.length}
        </Text>
      ) : (
        <Text style={styles.userInputShower}>
          Defult search, results: {results.length}
        </Text>
      )}
      <ScrollView>
        <ResultsList title="Low Price" results={filterResultsByPrice("$")} />
        <ResultsList
          title="Middle Price"
          results={filterResultsByPrice("$$")}
        />
        <ResultsList title="High Price" results={filterResultsByPrice("$$$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  userInputShower: {
    textAlign: "center",
    fontSize: 12,
    fontStyle: "italic",
    color: "gray",
    paddingVertical: 5
  },
  error: {
    textAlign: "center",
    fontSize: 16,
    color: "red",
    paddingVertical: 5
  }
});
export default SearchScreen;
