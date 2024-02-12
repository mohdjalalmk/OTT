import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { useGetGenreMoviesQuery } from "../store/apiSlice";
import MovieTile from "../components/MovieTile";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import apiService from "../services/apiService";

const GenrePage = () => {
  const [page, setPage] = useState(1); 

  //   const { data, isLoading, error, refetch } = useGetGenreMoviesQuery(page);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [originalMovies, setOriginalMovies] = useState([]);

  useEffect(() => getData(), []);

  const getData = () => {
    console.log(offset);
    if (!loading && !isListEnd) {
      console.log("getData");
      setLoading(true);

      apiService(offset)
        .then((responseJson) => {
          // Handle the returned data
          console.log("responseJson:", responseJson);

          if (responseJson.page.contentItems.content.length > 0) {
            console.warn("here");
            setOffset(offset + 1);
            // After the response, increase the offset for the next API call.
            setOriginalMovies([
              ...originalMovies,
              ...responseJson.page.contentItems.content,
            ]);
            setMovies([
              ...originalMovies,
              ...responseJson.page.contentItems.content,
            ]);
            setLoading(false);
          } else {
            setIsListEnd(true);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
          // Handle error appropriately
        });
    }
  };  

  const handleSearch = (text) => {
    setSearchText(text);
    if (text === "") {
      // If the search text is cleared, reset movies to the original list
      setMovies(originalMovies);
    } else {
      // Otherwise, filter the original list based on the search text
      const filteredResults = originalMovies.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setMovies(filteredResults);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <MovieTile posterUrl={item["poster-image"]} movieNmae={item?.name} />
    );
  };

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Header
        title={"Romantic Comedy"} //title can be changed according with the props from home screen
        onSearch={(text) => handleSearch(text)}
        onclose={() => {
          setMovies(originalMovies);
        }}
      />
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
     backgroundColor: "black",
      paddingHorizontal: 10 
    },
  input: {
    borderColor: "lightgrey",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default GenrePage;
