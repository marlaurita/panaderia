import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import { styles } from './styles';

const OrderItem = ({item}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> onSelected(item)}  style={styles.containerTouchable}>
            <View>
                <Text style={styles.name}>ID: {item.id}</Text>
                <Text style={styles.detail}>Fecha: {item.date}</Text> 
                <Text style={styles.detail}>Total: ${item.total.toFixed(2)}</Text>
                <Text style={styles.detail}>Cantidad de Items: {item.items.length}</Text> 
            </View>
            </TouchableOpacity>
        </View>
    );
};

export default OrderItem;