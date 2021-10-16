import React, { useState } from "react";
export type product = {
  name: string;
  description: string;
  imgUrl: string;
  rating: number;
  g_carbs_per_g: number;
  g_total_fat_per_g: number;
  g_protien_per_g: number;
};
export const cartContext = React.createContext<any>({
  cart: [],
  setCartWrapper: () => {},
});

export const useAlg = () => React.useContext(cartContext);
