import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  // FETCH RESULT DETAILS FROM API
  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  // CHECKS IF RESULT ISNT EMPTY
  if (!result) {
    return null;
  }
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

export default ResultShowScreen;
