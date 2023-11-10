import { CartData } from '@/app/utils/type';
import { prisma } from '@/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
	const userId = '1';

	const cartItems = await prisma.shoppingCart.findMany({
		where: { userId }
	});

	const items = cartItems.map((item) => {
		return [Number(item.itemId), item.qty];
	});

	const shoppingList: CartData[] = await Promise.all(
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

	return NextResponse.json(shoppingList);
}
