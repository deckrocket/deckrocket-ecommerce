import Image from 'next/image';
import Link from 'next/link';

type BannerInfo = {
	title: string;
	imgUrl: string;
	alt: string;
	link: string;
};

const CardSetBanner = ({ title, imgUrl, alt, link }: BannerInfo) => {
	return (
		<Link href={link} className="flex flex-col w-full pt-3">
			<Image
				className="rounded"
				src={imgUrl}
				alt={alt}
				width={1000}
				height={500}
			/>
			<p className="p-large font-semibold py-2 px-1">{title}</p>
		</Link>
	);
};

export default CardSetBanner;
