// import Link from 'next/link';
import CardRecommend from './components/CardRecommend';
import CardSetBanner from './components/CardSetBanner';
import PromotionSlider from './components/PromotionSlider';

export default function Home() {
	// Temporary Promotion Data
	const promoData = [
		{
			id: 234,
			title: 'Promotion 1',
			imgUrl: '/assets/images/promo/promotion-1.jpg',
			link: '/testpage'
		},
		{
			id: 235,
			title: 'Promotion 2',
			imgUrl: '/assets/images/promo/promotion-2.jpg',
			link: '/testpage'
		},
		{
			id: 236,
			title: 'Promotion 3',
			imgUrl: '/assets/images/promo/promotion-3.jpg',
			link: '/testpage'
		},
		{
			id: 237,
			title: 'Promotion 4',
			imgUrl: '/assets/images/promo/promotion-4.jpg',
			link: '/testpage'
		}
	];

	// Temporary Data for Latest Sets
	const setData = [
		{
			title: 'Wilds of Eldraine',
			imgUrl: '/assets/images/temp_banner_img.svg',
			id: 128392,
			link: '/testpage'
		},
		{
			title: 'Wilds of Eldraine',
			imgUrl: '/assets/images/temp_banner_img.svg',
			id: 128393,
			link: '/testpage'
		},
		{
			title: 'Wilds of Eldraine',
			imgUrl: '/assets/images/temp_banner_img.svg',
			id: 128394,
			link: '/testpage'
		}
	];

	// Temporary Data for Featured
	const featuredCards = [
		{
			name: 'Red-Eyes Black Dragon 25th Anniversary',
			imgUrl: '/assets/images/temp_card_image.svg',
			price: '3.99',
			id: 10293,
			link: '/testpage'
		},
		{
			name: 'Red-Eyes Black Dragon 25th Anniversary',
			imgUrl: '/assets/images/temp_card_image.svg',
			price: '3.99',
			id: 10294,
			link: '/testpage'
		},
		{
			name: 'Red-Eyes Black Dragon 25th Anniversary',
			imgUrl: '/assets/images/temp_card_image.svg',
			price: '3.99',
			id: 10295,
			link: '/testpage'
		},
		{
			name: 'Red-Eyes Black Dragon 25th Anniversary',
			imgUrl: '/assets/images/temp_card_image.svg',
			price: '3.99',
			id: 10296,
			link: '/testpage'
		},
		{
			name: 'Red-Eyes Black Dragon 25th Anniversary',
			imgUrl: '/assets/images/temp_card_image.svg',
			price: '3.99',
			id: 10297,
			link: '/testpage'
		},
		{
			name: 'Red-Eyes Black Dragon 25th Anniversary',
			imgUrl: '/assets/images/temp_card_image.svg',
			price: '3.99',
			id: 10298,
			link: '/testpage'
		}
	];

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
								imgUrl={card.imgUrl}
								key={card.id}
								alt={card.name}
								price={card.price}
								link={card.link}
							/>
						);
					})}
				</div>
			</section>
		</main>
	);
}
