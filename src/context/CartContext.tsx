import { createContext, useContext, useState, type ReactNode } from "react";

interface CartItem {
	id: number;
	quantity: number;
}

interface CartContextType {
	cartItem: CartItem[];
	addToCart: (productId: number) => void;
}

interface CartProviderProps {
	children: ReactNode;
}

const CartContext = createContext<CartContextType | null>(null);

export default function CartProvider({ children }: CartProviderProps) {
	const [cartItem, setCartItem] = useState<CartItem[]>([]);

	function addToCart(productId: number) {
		const existing = cartItem.find((item) => item.id === productId);
		if (existing) {
			const updateCartItems = cartItem.map((item) =>
				item.id === productId
					? { id: productId, quantity: item.quantity + 1 }
					: item,
			);
			setCartItem(updateCartItems);
		} else {
			setCartItem([...cartItem, { id: productId, quantity: 1 }]);
		}
	}

	function getCartItemWithProducts() {
		return cartItem
			.map((item) => ({
				...item,
				product: fetchProduct(item.id),
			}))
			.filter((item) => item.product);
	}

	function removeFromCart(productId) {
		setCartItem(cartItem.filter((item) => item.id !== productId));
	}

	function updateQuantity(productId, quantity) {
		if (quantity <= 0) {
			removeFromCart(productId);
			return;
		}
		setCartItem(
			cartItem.map((item) =>
				item.id === productId ? { ...item, quantity } : item,
			),
		);
	}

	function getCartTotal() {
		const total = cartItem.reduce((total, item) => {
			const product = getProductById(item.id);
			return total + (product ? product.price * item.quantity : 0);
		}, 0);
		return total;
	}

	return (
		<CartContext.Provider
			value={{
				cartItem,
				addToCart,
				removeFromCart,
				updateQuantity,
				getCartTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}

	return context;
}
