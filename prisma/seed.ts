const {
	cardTableData,
	cardInventoryData,
	promotionData,
	setData
} = require('../src/app/seed-data/seed.js');
const { PrismaClient } = require('@prisma/client');
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

	for (let promotion of promotionData) {
		const { title, imgUrl, link, onPromotion } = promotion;

		await prisma.promotion.create({
			data: {
				title,
				imgUrl,
				link,
				onPromotion
			}
		});
	}

	for (let set of setData) {
		const { title, imgUrl, link, latest } = set;

		await prisma.lastestSets.create({
			data: {
				title,
				imgUrl,
				link,
				latest
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
