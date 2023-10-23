import grid from '../assets/icons/icon_grid.svg';
import list from '../assets/icons/icon_list.svg';
import Image from 'next/image';
import SearchResultCard from '../components/SearchResultCard';
const page = () => {
	return (
		<main>
			<section className="flex flex-col gap-4 bg-slate-300">
				<div className="flex items-center justify-between p-4">
					<div className="flex gap-4 ">
						<div className="px-2 py-1 rounded text-center bg-gray-700">
							Filter
						</div>
						<div className="px-2 py-1 rounded text-center bg-gray-700">
							Best Match
						</div>
					</div>
					<div className="flex gap-4">
						<div className="bg-slate-100 p-2 w-fit flex justify-center align-center">
							<Image src={grid} alt="search results grid view"></Image>
						</div>
						<div className="bg-slate-100 p-2 w-fit flex justify-center align-center">
							<Image src={list} alt="search results list view"></Image>
						</div>
					</div>
				</div>
				<p className="px-4 py-2 w-full border-t">
					294 results for: <span className="font-semibold">“abc”</span> in All
					Products
				</p>
			</section>
			<section className="flex flex-col gap-4">
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
			</section>
		</main>
	);
};

export default page;
