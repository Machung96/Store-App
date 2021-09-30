import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Component } from "react/cjs/react.production.min";
import ProductListItem from "../components/ProductListItem";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { 
          id: 1,
          image: [
            {
              url: "https://reactnative.dev/img/tiny_logo.png",
            },
          ],
          name: "Thực phẩm trức năng",
          price: "1000000",
        },
        {
          id: 2,
          image: [
            {
              url: "https://reactnative.dev/img/tiny_logo.png",
            },
          ],
          name: "Thực phẩm trức năng",
          price: "500000",
        },
        {
          id: 3,
          image: [
            {
              url: "https://reactnative.dev/img/tiny_logo.png",
            },
          ],
          name: "Thực phẩm trức năng",
          price: "200000",
        },
        {
          id: 4,
          image: [
            {
              url: "https://reactnative.dev/img/tiny_logo.png",
            },
          ],
          name: "Thực phẩm trức năng",
          price: "200000",
        },
        {
          id: 5,
          image: [
            {
              url: "https://reactnative.dev/img/tiny_logo.png",
            },
          ],
          name: "Thực phẩm trức năng",
          price: "200000",
        },
        {
          id: 6,
          image: [
            {
              url: "https://reactnative.dev/img/tiny_logo.png",
            },
          ],
          name: "Thực phẩm trức năng",
          price: "200000",
        },
        {
          id: 7,
          image: [
            {
              url: "https://reactnative.dev/img/tiny_logo.png",
            },
          ],
          name: "Thực phẩm trức năng",
          price: "200000",
        },
        {
          id: 8,
          image: [
            {
              url: "https://reactnative.dev/img/tiny_logo.png",
            },
          ],
          name: "Thực phẩm trức năng",
          price: "200000",
        },
      ],
    };
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.products}
          contentContainerStyle={styles.container}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.wrapper}>
              <ProductListItem product={item} />
            </View>
          )}
          keyExtractor={(item) => `${item.id}`}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
