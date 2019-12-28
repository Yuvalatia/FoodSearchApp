import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";

import { withNavigation } from "react-navigation";
import ResultDetail from "./ResultDetail";

const ResultsList = ({ title, results, navigation }) => {
  // NOT SHOWING COMPONENT IF EMPTY
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultShow", { id: item.id })}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 5
  }
});

export default withNavigation(ResultsList);
