import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContainer: {
    flex: 1,
  },
  header: {
    fontSize: 16,
  },
  containerDetail: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "baseline"
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  detailQty: {
    fontSize: 14,
  },
  detailPrice: {
    fontSize: 16,
  },
});