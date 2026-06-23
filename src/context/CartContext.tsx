import { createContext, useContext, useState } from "react";
import type { ProductCardProps } from "../components/product/ProductCard";

const CartContext = createContext(null);

export default function CartProvider({ product }: ProductCardProps) {
	const [cartItem, setCartItem] = useState([]);

	function addToCart( productId: number ) {
		const existing = cartItem.find((item) => item.id === productId);
		setCartItem();
	}

	return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}

export function useCart() {
	const context = useContext(CartContext);

	return context;
}
