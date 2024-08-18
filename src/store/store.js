import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slice/productSlice";
import productSingleSlice from "../slice/ProductSingleSlice";
import BrandSlice from "../slice/BrandSlice";
import ColorSlice from "../slice/ColorSlice";
import CartSlice from "../slice/CartSlice";
import CounterSlice from "../slice/CounterSlice";

export default configureStore({
  reducer: {
    products: productSlice,
    productSingle: productSingleSlice,
    brands: BrandSlice,
    colors: ColorSlice,
    cart: CartSlice,
    counter: CounterSlice,
  },
});
