import { ActionTypes } from "../constants/action-types";
import { Product } from "../../types/types";

export const setProducts = (products: Product[]) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (products: Product[]) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};
