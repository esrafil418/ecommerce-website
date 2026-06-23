import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Product } from "../../components/product/ProductCard";

export default function ProductDetail() {
	const { id } = useParams();
	const [product, setProduct] = useState<Product | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		const controller = new AbortController();
		async function fetchProduct() {
			try {
				const res = await fetch(`/api/products/${id}`, {
					signal: controller.signal,
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
					},
				});
				if (!res.ok) {
					navigate("/");
					return;
				}
				const data = (await res.json()) as Product;
				setProduct(data);
			} catch (error) {
				if ((error as DOMException).name === "AbortError") return;
				console.log("Error fetching product:", error);
				navigate("/");
			}
		}
		fetchProduct();
		return () => controller.abort();
	}, [id, navigate]);

	if (!product) {
		return <div>Loading product...</div>;
	}

	return (
		<div className="flex-1 py-8">
			<div className="max-w-6xl mx-auto px-8">
				<div className="grid grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-md">
					<div className="w-full h-auto rounded-lg">
						<img src={product.image} alt={product.title} />
					</div>
					<div className="">
						<h1 className="text-3xl mb-4 text-gray-800">{product.title}</h1>
						<p className="text-3xl font-bold text-blue-600 mb-6">
							${product.price}
						</p>
						<p className="text-[1.1rem] text-gray-500 leading-relaxed mb-8">
							{product.description}
						</p>
						<button
							type="button"
							className="bg-blue-600 text-white px-6 py-3 border-none rounded font-medium text-base cursor-pointer transition-transform duration-200 ease-in-out hover:scale-[1.01] no-underline inline-block text-center"
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
