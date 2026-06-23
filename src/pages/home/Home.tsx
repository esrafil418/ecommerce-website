import { useEffect, useState } from "react";
import ProductCard, {
	type Product,
} from "../../components/product/ProductCard";

export default function Home() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api/products")
			.then((response) => response.json())
			.then((data) => {
				setProducts(data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div>Loading products...</div>;
	}
	return (
		<div className="flex-1 py-8">
			<div className="text-center py-16 px-8 max-w-2xl mx-auto">
				<h1
					className="text-4xl mb-4 text-gray-800"
					aria-label="Welcome to E-commerce"
				>
					Welcome to E-commerce
				</h1>
				<p className="text-xl text-gray-500 mb-8">
					Discover amazing products at great prices
				</p>
			</div>
			<div className="max-w-6xl mx-auto px-8">
				<h2 className="text-3xl mb-8 text-gray-800">Our Products</h2>
				<div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 mt-8">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
}
