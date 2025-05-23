import {createContext} from "react";

export const ProductContext = createContext();
export const ProductProvider = ProductContext.Provider;
export const ProductConsumer = ProductContext.Consumer;