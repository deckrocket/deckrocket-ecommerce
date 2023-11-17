// Due to the nature of Server-Side Rendered components,
// they do not have access to client-side features and hooks.
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import CardRecommend from '../../components/CardRecommend';
import AddToCartButton from '../../components/AddToCartButton';

export default function ItemDetails() {
	const params = useParams();
	const id = String(params.id);

	const [itemData, setItemData] = useState<any[]>([]);
	const [inventory, setInventory] = useState({});
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		async function getItemData() {
			const res = await fetch('/api/items', {
				headers: {
					id
				}
			});

			const data = await res.json();
			setItemData(data);

			const foil = data[0].CardInventory[0].foil;
			const condition = data[0].CardInventory[0].condition;

			setInventory({
				foil,
				condition
			});

			setLoading(false);
		}
		getItemData();
	}, []);

	if (isLoading) return <p>Loading...</p>;

	return (
		<>
			<div className="m-4">
				<h1>{itemData[0].name}</h1>
				<div className="my-4 rounded-xl bg-gray-200 p-4 ">
					<Image
						className="mx-auto rounded"
						src={itemData[0].imageUrl}
						alt={itemData[0].name}
						height={200}
						width={150}
					/>
				</div>

				<div className="my-4 flex flex-col gap-4 rounded-lg bg-gray-300 p-4 justify-center">
					{/* <p className="p-large font-bold">${item.price} CAD</p> */}
					<div className="flex">
						<div className="flex w-1/2 border-r-2 border-solid border-black">
							<input type="radio" />
							<p className="ml-2 w-1/2">NM</p>
							<input type="radio" />
							<p className="ml-2 w-1/2">PL</p>
						</div>
						<div className="ml-4 flex w-1/2">
							<input type="radio" name="a" />
							<label className="ml-2 w-1/2">Non-Foil</label>
							<input type="radio" name="a" />
							<label className="ml-2 w-1/2">Foil</label>
						</div>
					</div>
					<div className="flex justify-between items-center">
						{/* <div
							className={`font-bold ${
								item.instock ? 'text-green-600' : 'text-red-600'
							}`}
						>
							{item.quantity} {item.instock ? 'in stock' : 'out of stock'}
						</div> */}
						<div className="flex gap-4 justify-end w-1/2">
							<input
								className="text-sm text-center w-12 rounded border border-gray-300 py-1"
								type="number"
								name="qty"
								min="1"
								defaultValue={1}
								step={1}
							/>
							<AddToCartButton color="black" />
						</div>
					</div>
				</div>

				<div className="flex flex-col my-4 gap-4">
					<h2>Product Details</h2>
					<p className="p-large">{itemData[0].flavorText}</p>
					<div className="flex items-center">
						<h3 className="font-bold">
							Name:{' '}
							<span className="font-normal p-large">{itemData[0].name}</span>
						</h3>
					</div>
					<div className="flex items-center">
						<h3 className="font-bold">
							Rarity:{' '}
							<span className="font-normal p-large">{itemData[0].rarity}</span>
						</h3>
					</div>
					<div className="flex items-center">
						<h3 className="font-bold">
							Type:{' '}
							<span className="font-normal p-large">{itemData[0].type}</span>
						</h3>
					</div>
					<div className="flex items-center">
						<h3 className="font-bold">
							Set:{' '}
							<span className="font-normal p-large">{itemData[0].set}</span>
						</h3>
					</div>
					<div className="flex items-center">
						<h3 className="font-bold">
							Effect:{' '}
							<span className="font-normal p-large">
								{itemData[0].oracleText}
							</span>
						</h3>
					</div>
					<div className="flex items-center">
						<h3 className="font-bold">
							Artist:{' '}
							<span className="font-normal p-large">{itemData[0].artist}</span>
						</h3>
					</div>
				</div>
				<div className="divider"></div>
				<div className="flex flex-col my-4 gap-4">
					<h2 className="font-normal">Customer also viewed...</h2>
					{/* <div className="flex gap-8">
						<CardRecommend
							name={itemData[0].name}
							imgUrl={itemData[0].imageUrl}
							alt={itemData[0].name}
							price={itemData[0].price}
							link="/"
						/>
						<CardRecommend
							name={itemData[0].name}
							imgUrl={itemData[0].imageUrl}
							alt={itemData[0].name}
							price={itemData[0].price}
							link="/"
						/>
						<CardRecommend
							name={itemData[0].name}
							imgUrl={itemData[0].imageUrl}
							alt={itemData[0].name}
							price={itemData[0].price}
							link="/"
						/>
					</div> */}
				</div>
			</div>
		</>
	);
}
