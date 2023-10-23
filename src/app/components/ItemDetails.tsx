// Due to the nature of Server-Side Rendered components,
// they do not have access to client-side features and hooks.
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import CardRecommend from './CardRecommend/CardRecommend';

type itemDetail = {
	id: number;
};

export default function ItemDetails({ id }: itemDetail) {
	// fetchapi GET req for item details using id

	const [item, setItem] = useState({
		name: `Kodama's Reach (Borderless)`,
		rarity: `Common`,
		type: `Sorcery -- Arcane`,
		set: `Commander Masters`,
		desc: `"The trees keep out history better than any digital device.” -- Satsuki, the Living Lore"`,
		effect: `Search your library for up to two basic land cards, reveal those cards, put one onto the battlefield tapped and the other into your hand, then shuffle.`,
		imageUrl: `/assets/images/magic-kodamas-reach.png`,
		quality: `NM`,
		quantity: 91,
		instock: `T`,
		foil: `foil`,
		issueNum: 649,
		artist: `James Bond`,
		price: '0.39'
	});

	return (
		<>
			<div className="m-4">
				<h1>{item.name}</h1>
				<div className="my-4 rounded-xl bg-gray-200 p-4 ">
					<Image
						className="mx-auto rounded"
						src={item.imageUrl}
						alt={item.name}
						height={200}
						width={150}
					/>
				</div>

				<div className="my-4 flex flex-col gap-4 rounded-l bg-gray-300 p-4">
					<p className="p-large font-bold">${item.price} CAD</p>
					<div className="flex">
						<div className="flex w-1/2 border-r-2 border-solid border-black">
							<p className="w-1/2">NM</p>
							<p className="w-1/2">PL</p>
						</div>
						<div className="ml-4 flex w-1/2">
							<p className="w-1/2">Non-Foil</p>
							<p className="w-1/2">Foil</p>
						</div>
					</div>
					<div className="flex justify-between">
						<div
							className={`font-bold ${
								item.instock ? 'text-green-600' : 'text-red-600'
							}`}
						>
							{item.quantity} {item.instock ? 'in stock' : 'out of stock'}
						</div>
						<div className="flex gap-4 justify-end w-1/2">
							{/* form element */}
							<div>1</div>
							{/* Add to Cart */}
							<div>Add to Cart</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col my-4 gap-4">
					<h2>Product Details</h2>
					<p className="p-large">{item.desc}</p>
					<div className="flex items-center">
						<h3 className="font-bold">Name:</h3>
						<p className="p-large">{item.name}</p>
					</div>
					<div className="flex items-center">
						<h3 className="font-bold">Rarity:</h3>
						<p className="p-large">{item.rarity}</p>
					</div>
					<div className="flex">
						<h3 className="font-bold">Type:</h3>
						<p className="p-large">{item.type}</p>
					</div>
					<div className="flex">
						<h3 className="font-bold">Set:</h3>
						<p className="p-large">{item.set}</p>
					</div>
					<div className="flex">
						<h3 className="font-bold">Effect:</h3>
						<p className="p-large">{item.effect}</p>
					</div>
					<div className="flex">
						<h3 className="font-bold">Artist:</h3>
						<p className="p-large">{item.artist}</p>
					</div>
				</div>
				<div className="divider"></div>
				<div className="flex flex-col my-4 gap-4">
					<h2 className="font-normal">Customer also viewed...</h2>
					<div className="flex gap-8">
						{/* name, imgUrl, alt, price */}
						<CardRecommend
							name={item.name}
							imgUrl={item.imageUrl}
							alt={item.name}
							price={item.price}
						/>
						<CardRecommend
							name={item.name}
							imgUrl={item.imageUrl}
							alt={item.name}
							price={item.price}
						/>
						<CardRecommend
							name={item.name}
							imgUrl={item.imageUrl}
							alt={item.name}
							price={item.price}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
