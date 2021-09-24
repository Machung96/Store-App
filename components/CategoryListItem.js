import React, { Component } from 'react'
import { Image, Text, View } from 'react-native';
import MedicineImg from '../assets/medicine.png';
import styles from '../styles/CategoryListStyle';

const CategoryListItem = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.titleCategory}>THỰC PHẨM CHỨC NĂNG</Text>
            <Image 
                style = {styles.imgCategory}
                source = {MedicineImg}></Image>
        </View>
    );
}

export default CategoryListItem;