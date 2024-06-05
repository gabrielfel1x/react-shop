import { ActionTypes } from "../constants/action-types";
import { Product } from "../../types/types";

interface SetProductsAction {
  type: ActionTypes.SET_PRODUCTS;
  payload: Product[];
}

interface SelectedProductAction {
  type: ActionTypes.SELECTED_PRODUCT;
  payload: Product;
}

interface RemoveSelectedProductAction {
  type: ActionTypes.REMOVE_SELECTED_PRODUCT;
}

type ProductAction =
  | SetProductsAction
  | SelectedProductAction
  | RemoveSelectedProductAction;

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action: ProductAction) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, action: ProductAction) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...action.payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
