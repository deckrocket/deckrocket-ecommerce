import Link from "next/link";

type CardRecommendInfo = {
    name: string,
    imgUrl: string,
    alt: string
    price: string
}

const CardRecommend = ({ name, imgUrl, alt, price }: CardRecommendInfo) => {
    return (
        <div className="w-1/3">
            <Link className="flex flex-col justify-center items-center gap-1" href="/">
                <img className="rounded w-full" src={imgUrl} alt={alt} />
                <p className="p-small text-center">{name}</p>
                <p className="text-yellow-600">${price}</p>
            </Link>
        </div>
    );
};  

export default CardRecommend;