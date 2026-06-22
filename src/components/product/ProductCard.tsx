import { Link } from "react-router-dom";

export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	image: string;
	category: string;
	rating: { count: number; rate: number };
}

export interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:shadow-lg hover:scale-[1.02]">
			<img
				src={product.image}
				alt="product"
				className="w-full h-64 object-cover"
			/>
			<div className="p-6">
				<h3 className="text-xl mb-2 text-gray-800 line-clamp-1">
					{product.title}
				</h3>
				<h4 className="text-2xl font-bold text-blue-600 mb-4">
					${product.price}
				</h4>
				<h5 className="text-gray-400">{product.category}</h5>
				<p className="line-clamp-2">{product.description}</p>
				<p>
					{} - {}
				</p>
			</div>
			<div className="flex gap-2">
				<Link
					to=""
					className="bg-gray-500 text-white px-6 py-3 border-none rounded font-medium text-base cursor-pointer transition-colors duration-200 ease-in-out hover:scale-[1.01] no-underline inline-block text-center"
				>
					View Details
				</Link>
				<button
					type="button"
					className="bg-blue-600 text-white px-6 py-3 border-none rounded font-medium text-base cursor-pointer transition-colors duration-200 ease-in-out hover:scale-[1.01] no-underline inline-block text-center"
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
}
