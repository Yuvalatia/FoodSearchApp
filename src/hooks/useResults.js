import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  // DEAFULT SEARCH
  useEffect(() => {
    searchApi("pasta");
  }, []);

  // Search API FUNCTION
  const searchApi = async userSearchText => {
    try {
      console.log("YELP : API CONNECTION");
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: userSearchText,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("There was an error, please try again later");
    }
  };

  return [results, searchApi, error];
};
