'use client';
import Image from 'next/image';

type shoppingCartCard = {
	name: string;
	qty: number;
	imgUrl: string;
	quality: string;
	foilType: string;
	price: number;
	setType: string;
	currency: string;
};

export default function ShoppingCartCard({
	name,
	qty,
	imgUrl,
	quality,
	foilType,
	price,
	setType,
	currency
}: shoppingCartCard) {
	function onClickHandler() {
		return;
	}

	return (
		<article className="flex gap-8 rounded bg-gray-200 max-w-[450px] p-4 shadow-md">
			<div>
				<Image
					className="rounded"
					src={imgUrl}
					alt={name}
					width={160}
					height={200}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<p className="text-sm text-gray-500">{setType}</p>
				<p className="text-xs text-gray-500">
					{quality} &middot; {foilType}
				</p>
				<h3 className="text-xl font-bold underline">{name}</h3>
				<p className="text-xl font-bold">
					${price} {currency}
				</p>
				<div className="flex justify-between items-center">
					{/* Area to hold form input? for quantity and remove link */}
					<input
						className="text-sm text-center w-12 rounded border border-gray-300 py-1"
						type="number"
						name="qty"
						min="1"
						defaultValue={qty}
						step={1}
					/>
					<p className="underline text-gray-500" onClick={onClickHandler}>
						Remove
					</p>
				</div>
			</div>
		</article>
	);
}
