import grid from '../assets/icons/icon_grid.svg';
import list from '../assets/icons/icon_list.svg';
import Image from 'next/image';
import SearchResultCard from '../components/SearchResultCard';
import { useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type typeProp = {
	searchInput: string;
};

const page = async ({ searchInput }: typeProp) => {
	const [isloading, setIsLoading] = useState(true);
	let searchResults: Array<{ id: number }> = [];

	useEffect(() => {
		const fetchSearchResults = async () => {
			searchResults = await prisma.card.findMany({
				where: {
					name: { contains: searchInput }
				},
				select: { id: true }
			});
		};

		fetchSearchResults();
		setIsLoading(false);
	}, []);

	if (isloading) {
		return <p>Loading...</p>;
	}

	return (
		<main>
			{/* search options */}
			<section className="flex flex-col bg-slate-200">
				<div className="flex items-center justify-between p-4">
					<div className="flex gap-4">
						<div className="px-2 py-1 rounded text-center bg-gray-300">
							Filter
						</div>
						<div className="px-2 py-1 rounded text-center bg-gray-300">
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

			{/* search results */}
			{!isloading && searchResults.length > 0 && (
				<section className="flex flex-col gap-4">
					{searchResults.map((card) => {
						return <SearchResultCard id={card.id} />;
					})}
				</section>
			)}
		</main>
	);
};

export default page;
