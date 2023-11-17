'use client';
import { useState, useEffect } from 'react';
import CartSummary from '../components/CartSummary';
import ShoppingCartCard from '../components/ShoppingCartCard';
import { CartData } from '../utils/type';

const CartPage = () => {
	const [shoppingList, setShoppingList] = useState<CartData[] | []>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [refreshList, setRefreshList] = useState(false);

	function updateList() {
		setRefreshList(!refreshList);
	}

	useEffect(() => {
		async function cartInfo(id: string) {
			const res = await fetch('/api/cart', {
				headers: {
					id
				}
			});
			const cartData = await res.json();
			setShoppingList(cartData);
			setIsLoading(false);
		}
		const id = localStorage.getItem('id');
		cartInfo(id!);
	}, [refreshList]);

	if (isLoading) {
		return;
	}

	const qtyList: number[] = [];
	const priceList = shoppingList.map((item) => {
		qtyList.push(item.qty);
		return Number(item.price);
	});

	return (
		<main className="flex flex-col w-full justify-center items-center p-4">
			<h2>Shopping Cart</h2>
			<CartSummary price={priceList} qty={qtyList} />
			<section className="flex flex-col w-full justify-center items-center gap-4 mt-6">
				{shoppingList.map((item) => {
					return (
						<ShoppingCartCard
							key={item.id}
							itemId={String(item.id)}
							name={item.name}
							qty={item.qty}
							imgUrl={item.imageUrl}
							quality={item.condition}
							foilType={item.foil}
							price={item.price}
							setType={item.set}
							currency={item.currency}
							updateList={updateList}
						/>
					);
				})}
			</section>
		</main>
	);
};

export default CartPage;
