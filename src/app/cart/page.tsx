import CartSummary from '../components/CartSummary';
import ShoppingCartCard from '../components/ShoppingCartCard';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const CartPage = async () => {
	const userId = '1';
	const cartItems = await prisma.shoppingCart.findMany({
		where: { userId: userId }
	});

	const items = cartItems.map((item) => {
		return [Number(item.itemId), item.qty];
	});

	const shoppingList = await Promise.all(
		items.map(async (item) => {
			const { name, imageUrl, set, CardInventory } =
				await prisma.card.findFirst({
					where: {
						CardInventory: {
							some: {
								id: item[0]
							}
						}
					},
					select: {
						name: true,
						imageUrl: true,
						set: true,
						CardInventory: {
							where: {
								id: item[0]
							},
							select: {
								condition: true,
								foil: true,
								price: true
							}
						}
					}
				});
			const { condition, foil, price } = CardInventory[0];

			return {
				id: item[0],
				name,
				imageUrl,
				condition,
				foil,
				price,
				set,
				qty: item[1],
				currency: 'CAD'
			};
		})
	);

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
