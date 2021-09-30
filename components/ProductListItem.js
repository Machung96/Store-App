import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/ProductListStyle";
import formatPrice from "./FormatPrice";

const ProductListItem = (props) => {
  const { product, onAddToCartClick } = props;

  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <View style={styles.groupIMG}>
          <Image
            style={styles.imgProduct}
            source={{ uri: product.image[0].url }}
          ></Image>
        </View>
        <View style={styles.info}>
          <Text style={styles.textNameProduct}>{product.name}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>
              {formatPrice.format(product.price)}
            </Text>
            <TouchableOpacity omPress={onAddToCartClick}>
              <Text style={styles.cartText}>MUA +</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductListItem;
