'use client';
import Image from 'next/image';

type shoppingCartCard = {
	itemId: string;
	name: string;
	qty: number;
	imgUrl: string;
	quality: string;
	foilType: string;
	price: number;
	setType: string;
	currency: string;
	updateList(): void;
};

export default function ShoppingCartCard({
	itemId,
	name,
	qty,
	imgUrl,
	quality,
	foilType,
	price,
	setType,
	currency,
	updateList
}: shoppingCartCard) {
	const userId = localStorage.getItem('id');

	async function handleRemove() {
		await fetch('api/cart', {
			method: 'DELETE',
			headers: {
				userId: userId!,
				itemId
			}
		});

		updateList();
	}

	async function handleChange(e: any) {
		await fetch('api/cart', {
			method: 'PATCH',
			body: JSON.stringify({
				userId: userId!,
				itemId: itemId,
				qty: e.target.value
			})
		});

		updateList();
	}

	return (
		<article className="flex gap-8 rounded bg-gray-200 max-w-[450px] w-full p-4 shadow-md">
			<div className="w-2/5">
				<Image
					className="rounded h-auto"
					src={imgUrl}
					alt={name}
					width={745}
					height={1040}
				/>
			</div>
			<div className="flex flex-col gap-2 w-1/2">
				<p className="text-sm text-gray-500">{setType}</p>
				<p className="text-xs text-gray-500">
					{quality} &middot; {foilType ? 'Foil' : 'Non-Foil'}
				</p>
				<h3 className="text-xl font-bold underline">{name}</h3>
				<p className="text-xl font-bold">
					${price} {currency}
				</p>
				<div className="flex justify-between items-center">
					<input
						className="text-sm text-center w-12 rounded border border-gray-300 py-1"
						type="number"
						name="qty"
						min="1"
						defaultValue={qty}
						step={1}
						onChange={handleChange}
					/>
					<p
						className="underline text-gray-500 cursor-pointer"
						onClick={handleRemove}
					>
						Remove
					</p>
				</div>
			</div>
		</article>
	);
}
