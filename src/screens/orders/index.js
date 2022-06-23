import react from "react";
import {View, FlatList } from "react-native";
import { OrderItem } from "../../components";
import { orders } from "../../data/order";
import { styles } from "./style";

const OrderScreen =() => {
        const renderItem = ({item}) => <OrderItem item={item}/>
        return (
            <View style={styles.container}>
            <View style={styles.cartList}>
              <FlatList
                data={orders}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        )
    
}

export default OrderScreen;