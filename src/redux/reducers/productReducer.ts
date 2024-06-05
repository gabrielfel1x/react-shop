import { ActionTypes } from "../constants/action-types";
import { ProductState } from "../../types/types";

const initialState: ProductState = {
  products: [
    {
      id: 1,
      title: "Golden",
      category: "programmer",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
