type BannerInfo = {
	title: string;
	imgUrl: string;
	alt: string;
};

const CardSetBanner = ({ title, imgUrl, alt }: BannerInfo) => {
	return (
		<div className="flex flex-col w-full">
			<img className="rounded w-full" src={imgUrl} alt={alt} />
			<p className="p-large font-semibold p-1">{title}</p>
		</div>
	);
};

export default CardSetBanner;
