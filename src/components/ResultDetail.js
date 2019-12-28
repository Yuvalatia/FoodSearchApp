import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.resultName}>{result.name}</Text>
      <Text>
        Stars:{result.rating} Reviews:{result.review_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 220,
    borderRadius: 10,
    marginBottom: 5
  },
  container: {
    marginLeft: 15
  },
  resultName: {
    fontWeight: "bold",
    fontSize: 16
  }
});

export default ResultDetail;
