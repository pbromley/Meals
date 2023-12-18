import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { FC } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";

const Stack = createStackNavigator()

const App: FC = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Meals Categories" component={Categories} />
          <Stack.Screen name="Meals Overview" component={MealsOverview} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
