import react from "react";
import { TouchableOpacity, View, Text } from "react-native";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const CartItem = ({ item, onDelete }) => {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{item.name}</Text>
          <View style={styles.detail}>
            <Text style={styles.detailQty}>{item.quantity}</Text>
            <Text style={styles.detailPrice}>${item.price}</Text>
          </View>
        </View>
        <View style={styles.containerDetail}>
           <TouchableOpacity onPress={() => onDelete(item.id)}>
            <IonicIcons name="trash" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
       
      </View>
    );
  };

export default CartItem;