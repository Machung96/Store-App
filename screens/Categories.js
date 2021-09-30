import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Medicine from "../assets/medicine.png";
import Cleanser from "../assets/cleanser.png";
import Showergel from "../assets/showergel.png";
import Shampoo from "../assets/shampoo.png";
import Facetreatment from "../assets/facetreatment.png";
import Treatment from "../assets/treatment.png";
import Epidermis from "../assets/epidermis.png";
import Serum from "../assets/serum.png";

import CategoryListItem from "../components/CategoryListItem";

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: "Thực phẩm trức năng", img: Medicine },
        { id: 2, name: "Sữa rửa mặt", img: Cleanser },
        { id: 3, name: "Tẩy trang", img: Treatment },
        { id: 4, name: "Tẩy da chết", img: Epidermis },
        { id: 5, name: "Serum", img: Serum },
        { id: 6, name: "Mask đắp mặt", img: Facetreatment },
        { id: 7, name: "Sữa tắm", img: Showergel },
        { id: 8, name: "Dầu gội", img: Shampoo },
      ]
    };
  }

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryListItem
              category={item}
              onPress={() =>
                navigation.navigate("Product", {
                  categoryName: item.name
                })
              }
            />
          )}
          keyExtractor={(item) => `${item.id}`}
          contentContainerStyle={{
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          }}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "stretch",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
