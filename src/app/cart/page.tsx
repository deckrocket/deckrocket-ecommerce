import CartSummary from '../components/CartSummary';
import ShoppingCartCard from '../components/ShoppingCartCard';

const CartPage = () => {
	const shoppingList = [
		{
			id: 99879,
			qty: 1,
			name: 'Bloodthirsty Adversary',
			imgUrl: '/assets/images/magic-kodamas-reach.png',
			quality: 'Lightly Played',
			foilType: 'Non Foil',
			price: 9.99,
			setType: 'Innistrad: Midnight Hunt',
			currency: 'CAD'
		},
		{
			id: 998000,
			qty: 5,
			name: 'Bloodthirsty Adversary',
			imgUrl: '/assets/images/magic-kodamas-reach.png',
			quality: 'Lightly Played',
			foilType: 'Non Foil',
			price: 31.99,
			setType: 'Innistrad: Midnight Hunt',
			currency: 'USD'
		},
		{
			id: 998791,
			qty: 3,
			name: 'Bloodthirsty Adversary',
			imgUrl: '/assets/images/magic-kodamas-reach.png',
			quality: 'Lightly Played',
			foilType: 'Non Foil',
			price: 29.99,
			setType: 'Innistrad: Midnight Hunt',
			currency: 'CAD'
		},
		{
			id: 998792,
			qty: 9,
			name: 'Bloodthirsty Adversary',
			imgUrl: '/assets/images/magic-kodamas-reach.png',
			quality: 'Lightly Played',
			foilType: 'Non Foil',
			price: 19.99,
			setType: 'Innistrad: Midnight Hunt',
			currency: 'CAD'
		}
	];

	return (
		<main className="flex flex-col w-full justify-center p-4">
			<h2>Shopping Cart</h2>
			<CartSummary />
			<section className="flex flex-col w-full justify-center gap-4 mt-6">
				{shoppingList.map((item) => {
					return (
						<ShoppingCartCard
							key={item.id}
							name={item.name}
							qty={item.qty}
							imgUrl={item.imgUrl}
							quality={item.quality}
							foilType={item.foilType}
							price={item.price}
							setType={item.setType}
							currency={item.currency}
						/>
					);
				})}
			</section>
		</main>
	);
};

export default CartPage;
