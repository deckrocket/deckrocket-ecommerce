'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type PromotionInfo = {
	id: number;
	title: string;
	imgUrl: string;
	link: string;
	onPromotion: boolean;
};

type PromotionInfoList = {
	promoData: PromotionInfo[];
};

const PromotionSlider = ({ promoData }: PromotionInfoList) => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			slidesPerView={1}
			className="w-full"
			pagination={true}
			navigation={true}
			loop={true}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false
			}}
		>
			{promoData.map((promotion) => {
				return (
					<SwiperSlide key={promotion.id}>
						<Link href={promotion.link}>
							<Image
								src={promotion.imgUrl}
								alt={promotion.title}
								width={1920}
								height={1080}
							/>
						</Link>
						<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default PromotionSlider;
