import Link from 'next/link';
import SearchResultCard from './components/SearchResultCard';
import ShoppingCartCard from './components/ShoppingCartCard';

export default function Home() {
	return (
		<>
			<h1>This is Main Page!</h1>
			<Link href="/searchresults">Go to Test Page</Link>

			<SearchResultCard
				game="Magic: The Gathering"
				setType="Commander Masters"
				name="Kodama's Reach (Borderless)"
				imgUrl="/assets/images/magic-kodamas-reach.png"
				rarity="Common"
				id={649}
				price={0.39}
				currency="CAD"
			/>

			<ShoppingCartCard
				setType="Commander Masters"
				name="Kodama's Reach (Borderless)"
				imgUrl="/assets/images/magic-kodamas-reach.png"
				quality="Lightly Played"
				foilType="Non Foil"
				price={0.39}
				currency="CAD"
			/>
		</>
	);
}
