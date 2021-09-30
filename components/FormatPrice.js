import { moduleName, View } from "react-native";

const formatPrice = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "VND",
  notation: "standard",
});

export default formatPrice;
