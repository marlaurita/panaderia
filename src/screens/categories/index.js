import React from 'react';
import {View , Text, Button} from 'react-native';
import { styles } from './styles';

const CategoriesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Categories</Text>
            <Button title='Go to ProductsList' onPress={() => navigation.navigate('Products')}></Button>
        </View>
    )
}

export default CategoriesScreen;