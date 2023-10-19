import Link from 'next/link';

type searchResultCard = {
	game: string;
	name: string;
	imgUrl: string;
	rarity: string;
	id: number;
	price: number;
	setType: string;
	currency: string;
};

export default function SearchResultCard({
	game,
	name,
	imgUrl,
	rarity,
	id,
	price,
	setType,
	currency
}: searchResultCard) {
	return (
		<div className="m-4 flex gap-8 rounded p-4 shadow-md">
			<div>
				<img className="h-[200px] w-[160px] rounded" src={imgUrl} alt={name} />
			</div>
			<div className="flex flex-col gap-2">
				<div>
					<p className="text-sm text-gray-500">{game}</p>
					<p className="text-sm text-gray-500">{setType}</p>
				</div>
				<p className="text-xs text-gray-500">
					{rarity} &middot; #{id}
				</p>
				<h3 className="text-xl font-bold underline">{name}</h3>
				<p className="text-xl font-bold">
					${price} {currency}
				</p>
			</div>
		</div>
	);
}
