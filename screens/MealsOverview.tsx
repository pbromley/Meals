import { FC } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverview: FC = ({route}) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} renderItem={({item}) => <MealItem {...item}/>}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})

export default MealsOverview;