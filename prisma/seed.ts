import { PrismaClient } from '@prisma/client';
import { cardTableData, cardInventoryData } from '../src/app/seed-data/seed.js';
const prisma = new PrismaClient();

async function main() {
	for (let card of cardTableData) {
		const {
			name,
			oracleText,
			imageUrl,
			rarity,
			type,
			set,
			flavorText,
			issueNumber,
			artist,
			fullArt,
			layout
		} = card;

		await prisma.card.create({
			data: {
				name,
				oracleText,
				imageUrl,
				rarity,
				type,
				set,
				flavorText,
				issueNumber,
				artist,
				fullArt,
				layout
			}
		});
	}

	for (let inventory of cardInventoryData) {
		const { cardId, salesPercentage, price, qty, foil, condition } = inventory;

		await prisma.cardInventory.create({
			data: {
				cardId,
				salesPercentage,
				price,
				qty,
				foil,
				condition
			}
		});
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
