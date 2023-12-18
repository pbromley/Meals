import { FC } from "react";
import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryGridTile: FC<Props> = ({title, color, id}) => {
  const {navigate} = useNavigation();

  const onPress = () => {
    navigate("Meals Overview", {categoryId: id});
  }

  return (
    <View style={styles.gridItem}>
      <Pressable android_ripple={{color: '#cccccc'}}
                 style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]} onPress={onPress}>
        <View style={[styles.inner, {backgroundColor: color}]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? "hidden" : 'visible'
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.75
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18
  },
  inner: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  }
})


type Props = {
  title: string;
  color: string;
  id: string;
}

type ParamProps = {
  categoryId: string;
}

export default CategoryGridTile;