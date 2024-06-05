import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./productComponent";
import { AppDispatch } from "../redux/store";
import { Product } from "../types/types";

const ProductListing: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get<Product[]>(
        "https://fakestoreapi.com/products"
      );
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
