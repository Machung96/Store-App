import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Medicine from './assets/medicine.png';
import Cleanser from './assets/cleanser.png';
import Showergel from './assets/showergel.png';
import Shampoo from './assets/shampoo.png';
import Creamface from './assets/creamface.png';

import CategoryListItem from './components/CategoryListItem'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Thực phẩm trức năng', img: (Medicine)},
        { id: 2, name: 'Sữa rửa mặt', img: (Cleanser) }, 
        { id: 3, name: 'Sữa tắm', img: (Showergel) },
        { id: 4, name: 'Dầu gội', img: (Shampoo) },
        { id: 5, name: 'Kem đắp mặt', img: (Creamface) },
      ]
    };
  }

  render() {
    const { categories } = this.state;
    return (
      <View>
          <FlatList 
            data = {categories}
            renderItem = {({item}) => <CategoryListItem category = {item}/>}
            keyExtractor = {item => `${item.id}`}
            contentContainerStyle = {{paddingLeft: 16, paddingRight: 16}}>
          </FlatList>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingLeft: 16,
    paddingRight: 16
  },
});
 



