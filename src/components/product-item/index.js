import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import { styles } from './styles';

const ProductItem = ({item, onSelected}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> onSelected(item)}  style={styles.containerTouchable}>
            <View>
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <View>
                <Text style={styles.detail}>{item.weight}</Text> 
                <Text style={styles.detail}>{item.price.toFixed(2)}</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
};

export default ProductItem;