import CardRecommend from './components/CardRecommend';
import CardSetBanner from './components/CardSetBanner';
import PromotionSlider from './components/PromotionSlider';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function Home() {
	const promoData = await prisma.promotion.findMany({
		where: { onPromotion: true }
	});

	const setData = await prisma.lastestSets.findMany({
		where: {
			latest: true
		}
	});

	const featuredCards = await prisma.card.findMany({
		where: {
			CardInventory: {
				every: {
					salesPercentage: {
						gte: 30
					}
				}
			}
		},
		select: {
			id: true,
			name: true,
			imageUrl: true,
			CardInventory: {
				select: {
					price: true,
					salesPercentage: true
				},
				where: {
					salesPercentage: {
						gte: 30
					}
				},
				orderBy: [
					{
						price: 'asc'
					}
				],
				take: 1
			}
		},
		take: 6
	});

	return (
		<main>
			{/* Carousel */}
			<section className="flex flex-col w-full justify-center">
				<PromotionSlider promoData={promoData} />
			</section>

			{/* Latest Sets */}
			<section className="divider-grey flex flex-col p-4 w-full justify-center">
				<h2>LATEST SETS</h2>
				{setData.map((set) => {
					return (
						<CardSetBanner
							key={set.id}
							title={set.title}
							imgUrl={set.imgUrl}
							alt={set.title}
							link={set.link}
						/>
					);
				})}
			</section>

			{/* Featured */}
			<section className="flex flex-col p-4 w-full justify-center">
				<h2>Featured</h2>
				<div className="grid grid-cols-3 gap-4 pt-3">
					{featuredCards.map((card) => {
						return (
							<CardRecommend
								name={card.name}
								imgUrl={card.imageUrl}
								key={card.id}
								alt={card.name}
								price={card.CardInventory[0].price}
								link="/"
							/>
						);
					})}
				</div>
			</section>
		</main>
	);
}
