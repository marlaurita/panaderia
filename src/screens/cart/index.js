import react from "react";
import {View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { CartItem } from "../../components";
import { cart } from "../../data/cart";

const CartScreen =() => {
    const TOTAL = "12.150";
    const onHandlerDelete = (id) => {
        console.log(id);
    }

    const onHandlerConfirmCart = () => {
        console.log("Confirm cart");
    };
    
    const renderItem = ({item}) => <CartItem item={item} onDelete={onHandlerDelete}/>
    return (
        <View style={styles.container}>
        <View style={styles.cartList}>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.buttonConfirm}
            onPress={() => onHandlerConfirmCart()}
          >
            <Text style={styles.buttonText}>Confirm</Text>
            <View style={styles.totalContainer}>
              <Text style={styles.totalTitle}>Total</Text>
              <Text style={styles.total}>${TOTAL}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
}

export default CartScreen;