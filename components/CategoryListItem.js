import React, { Component } from 'react'
import { Image, Text, View } from 'react-native';
import MedicineImg from '../assets/medicine.png';
import styles from '../styles/CategoryListStyle';

const CategoryListItem = (props) => {
    const {category} = props
    return(
        <View style = {styles.container}>
            <Text style = {styles.titleCategory}>{ category.name }</Text>
            <Image 
                style = {styles.imgCategory}
                source = {category.img}></Image>
        </View>
    );
}

export default CategoryListItem;