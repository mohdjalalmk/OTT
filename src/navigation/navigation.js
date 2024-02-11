import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
    Text,
    Pressable,
    StyleSheet
  } from "react-native";
import GenrePage from "../screens/GenrePage";
import HomeScreen from "../screens/HomeScreen";
import  Header  from "../components/Header";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ contentStyle: styles.container }}>
        <Stack.Screen name="Genre Page" component={GenrePage} 
            options={{headerShown: false}}
        />
        <Stack.Screen name="Home Screen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});
  

export default Navigation;
