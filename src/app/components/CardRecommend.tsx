import Link from 'next/link';
import Image from 'next/image';

type CardRecommendInfo = {
	name: string;
	imgUrl: string;
	alt: string;
	price: string;
	link: string;
};

const CardRecommend = ({
	name,
	imgUrl,
	alt,
	price,
	link
}: CardRecommendInfo) => {
	return (
		<div className="w-full">
			<Link
				className="flex flex-col justify-center items-center gap-1"
				href={link}
			>
				<Image
					className="rounded w-full"
					src={imgUrl}
					alt={alt}
					width={1000}
					height={500}
				/>
				<p className="p-small text-center text-blue-600 font-semibold">
					{name}
				</p>
				<p className="text-yellow-600">${price}</p>
			</Link>
		</div>
	);
};

export default CardRecommend;
