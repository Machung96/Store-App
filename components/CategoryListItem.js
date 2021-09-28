import React, { Component } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import styles from "../styles/CategoryListStyle";

const CategoryListItem = (props) => {
  const { category, onPress } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.styleTouch}>
        <Text style={styles.titleCategory}>{category.name}</Text>
        <Image style={styles.imgCategory} source={category.img}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryListItem;
