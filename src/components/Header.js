import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const Header = ({ title, onPress, onSearch, searchText, onclose }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.backArrowView}>
        <Image style={styles.back} source={require("../../assets/Back.png")} />
        {showSearch ? (
          <TextInput
            style={styles.textField}
            placeholder="Search here"
            placeholderTextColor={"rgba(255, 255, 255, 0.5)"}
            value={searchText}
            clearButtonMode="always"
            onChangeText={(text) => onSearch(text)}
          />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
      </View>
      {!showSearch ? (
        <TouchableOpacity
          onPress={() => {
            setShowSearch(!showSearch);
          }}
        >
          <Image
            style={styles.search}
            source={require("../../assets/search.png")}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            onclose();
            setShowSearch(!showSearch);
          }}
        >
          <Image
            style={styles.search}
            source={require("../../assets/close.png")}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textField:{
    color: "#fff",
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginLeft: 10,
    borderRadius: 10,
    width: "80%",
  },
  input: {
    borderColor: "lightgrey",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  back: {
    width: 25,
    height: 25,
  },
  search: {
    width: 25,
    height: 25,
  },
  title: {
    color: "#fff",
    marginLeft: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
  },
  backArrowView:{
     flexDirection: "row", 
     alignItems: "center" 
    }
});

export default Header;
