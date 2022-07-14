import react, {useEffect} from "react";
import {View, FlatList } from "react-native";
import { OrderItem } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {getOrders, deleteOrder} from "../../store/actions/order.action";
import { styles } from "./style";

const OrderScreen =() => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.items);

  const onDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
  }

  useEffect(() => {
    dispatch(getOrders())
  }, []);
        const renderItem = ({item}) => <OrderItem item={item} onDelete={onDeleteOrder}/>
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