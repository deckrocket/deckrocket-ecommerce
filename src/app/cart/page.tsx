'use client';
import { useState, useEffect } from 'react';
import CartSummary from '../components/CartSummary';
import ShoppingCartCard from '../components/ShoppingCartCard';
import { CartData } from '../utils/type';

const CartPage = () => {
	const [shoppingList, setShoppingList] = useState<CartData[] | []>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function cartInfo() {
			const res = await fetch('/api/cart');
			const cartData = await res.json();
			setShoppingList(cartData);
			setIsLoading(false);
		}

		cartInfo();
	}, []);

	if (isLoading) {
		return;
	}

	const priceList = shoppingList.map((item) => {
		return Number(item.price);
	});

	return (
		<main className="flex flex-col w-full justify-center items-center p-4">
			<h2>Shopping Cart</h2>
			<CartSummary price={priceList} />
			<section className="flex flex-col w-full justify-center items-center gap-4 mt-6">
				{shoppingList.map((item) => {
					return (
						<ShoppingCartCard
							key={item.id}
							name={item.name}
							qty={item.qty}
							imgUrl={item.imageUrl}
							quality={item.condition}
							foilType={item.foil}
							price={item.price}
							setType={item.set}
							currency={item.currency}
						/>
					);
				})}
			</section>
		</main>
	);
};

export default CartPage;
