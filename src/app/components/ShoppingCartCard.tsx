type shoppingCartCard = {
	name: string;
	imgUrl: string;
	quality: string;
	foilType: string;
	price: number;
	setType: string;
	currency: string;
};

export default function ShoppingCartCard({
	name,
	imgUrl,
	quality,
	foilType,
	price,
	setType,
	currency
}: shoppingCartCard) {
	return (
		<div className="m-4 flex gap-8 rounded bg-gray-200 p-4 shadow-md">
			<div>
				<img className="h-[200px] w-[160px] rounded" src={imgUrl} alt={name} />
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
				<div>{/* Area to hold form input? for quantity and remove link */}</div>
			</div>
		</div>
	);
}
