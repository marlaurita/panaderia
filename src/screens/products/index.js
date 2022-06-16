import React from 'react';
import {View , Text, Button} from 'react-native';
import { styles } from '../../styles';

const ProductsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Product s</Text>
            <Button title='Go to Products Detail' onPress={() => navigation.navigate('ProductDetail')}></Button>
        </View>
    )
}

export default ProductsScreen;