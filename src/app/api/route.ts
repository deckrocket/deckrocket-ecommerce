import { prisma } from '@/db';

export async function GET(request: Request) {
	const cartItems = await prisma.shoppingCart.findMany({
		where: { userId: '1' }
	});

	return Response.json({ cartItems });
}
