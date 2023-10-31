import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const prisma = new PrismaClient();

type cardId = {
	id: number;
};

type cardDetailsTypes = {
	id: number;
	game: string;
	name: string;
	imageUrl: string | null;
	rarity: string;
	type: string;
} | null;

type cardPriceTypes = {
	price: string;
} | null;
let cardDetails: cardDetailsTypes;
let cardPrice: cardPriceTypes;
export default function SearchResultCard({ id }: cardId) {
	const [isloading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchCardDetails = async () => {
			cardDetails = await prisma.card.findUnique({
				where: { id },
				select: {
					id: true,
					game: true,
					name: true,
					imageUrl: true,
					rarity: true,
					type: true
				}
			});
			cardPrice = await prisma.cardInventory.findUnique({
				where: { id },
				select: {
					price: true
				}
			});
		};
		fetchCardDetails();
		setIsLoading(false);
	}, []);

	if (isloading) {
		return <p>Loading...</p>;
	}

	return (
		<div className="m-4 flex gap-8 rounded p-4 shadow-md">
			<div>
				<Image
					className="h-[200px] w-[160px] rounded"
					src={cardDetails?.imageUrl}
					alt={cardDetails?.name}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<div>
					<p className="text-sm text-gray-500">{cardDetails?.game}</p>
					<p className="text-sm text-gray-500">{cardDetails?.type}</p>
				</div>
				<p className="text-xs text-gray-500">
					{cardDetails?.rarity} &middot; #{id}
				</p>
				<h3 className="text-xl font-bold underline">{cardDetails?.name}</h3>
				<p className="text-xl font-bold">${cardPrice?.price}</p>
			</div>
		</div>
	);
}
