import { FC } from "react";
import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const Categories: FC = () => {

  return (
    <View>
      <FlatList data={CATEGORIES}
                renderItem={({item}) => <CategoryGridTile color={item.color} title={item.title} id={item.id}/>}
                keyExtractor={(item) => item.id}
                numColumns={2}/>
    </View>
  );
};

export default Categories;