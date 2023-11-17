import { prisma } from '@/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
	const cardId = Number(req.headers.get('id'));

	const items = await prisma.card.findMany({
		where: {
			id: cardId
		},
		include: {
			CardInventory: true
		}
	});

	return NextResponse.json(items);
}
