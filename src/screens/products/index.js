import React from 'react';
import {View , FlatList} from 'react-native';
import { products } from "../../data/products";
import {ProductItem} from "../../components/index"
import { styles } from './styles';

const ProductsScreen = ({navigation, route}) => {
    const {categoryId} = route.params;
    const filterProducts = products.filter(product => product.categoryId === categoryId);

    const onSelected = (item) => {
        navigation.navigate("ProductDetail", {
            productId: item.id,
            name: item.name,
        });
    };

    const renderItem = ({item}) => (
        <ProductItem item={item} onSelected={onSelected}/>
    )
    return (
        <View style={styles.container}>
             <FlatList data={filterProducts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}/>
        </View>
    )
}

export default ProductsScreen;