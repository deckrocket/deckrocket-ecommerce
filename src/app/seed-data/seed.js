const fs = require('fs');
const idArr = [];
const data = JSON.parse(
	fs.readFileSync('./src/app/seed-data/seed-data.json').toString()
);
const cardTableData = data.map((card, i) => {
	const {
		id,
		name,
		oracle_text,
		image_uris,
		rarity,
		type_line,
		set_name,
		flavor_text,
		collector_number,
		artist,
		full_art,
		layout
	} = card;

	idArr.push(i + 1);

	return {
		id,
		name,
		oracleText: oracle_text,
		imageUrl: image_uris?.png,
		rarity,
		type: type_line,
		set: set_name,
		flavorText: flavor_text,
		issueNumber: collector_number,
		artist,
		fullArt: full_art,
		layout
	};
});

function getDiscount(num) {
	if (num > 0.75) {
		return 40;
	} else if (num > 0.5) {
		return 30;
	} else if (num > 0.25) {
		return 20;
	} else {
		return 0;
	}
}

const cardInventoryData = getVariations();

function getVariations() {
	let data = [];
	for (let i = 1; i <= 4; i++) {
		const variations = idArr.map((id) => {
			let foil;
			let condition;

			if (i % 2 === 0) {
				foil = true;
			} else {
				foil = false;
			}

			if (i <= 2) {
				condition = 'NM';
			} else {
				condition = 'PL';
			}

			return {
				cardId: id,
				price: String(Math.round(Math.random() * 100) + 0.99),
				qty: Math.round(Math.random() * 1000),
				foil,
				condition,
				salesPercentage: getDiscount(Math.random())
			};
		});

		data = [...data, ...variations];
	}

	return data;
}

const promotionData = [
	{
		title: 'Promotion 1',
		imgUrl: '/assets/images/promo/promotion-1.jpg',
		link: '/testpage',
		onPromotion: true
	},
	{
		title: 'Promotion 2',
		imgUrl: '/assets/images/promo/promotion-2.jpg',
		link: '/testpage',
		onPromotion: true
	},
	{
		title: 'Promotion 3',
		imgUrl: '/assets/images/promo/promotion-3.jpg',
		link: '/testpage',
		onPromotion: true
	},
	{
		title: 'Promotion 4',
		imgUrl: '/assets/images/promo/promotion-4.jpg',
		link: '/testpage',
		onPromotion: true
	}
];

const setData = [
	{
		title: 'Wilds of Eldraine',
		imgUrl: '/assets/images/temp_banner_img.svg',
		link: '/testpage',
		latest: true
	},
	{
		title: 'Wilds of Eldraine',
		imgUrl: '/assets/images/temp_banner_img.svg',
		link: '/testpage',
		latest: true
	},
	{
		title: 'Wilds of Eldraine',
		imgUrl: '/assets/images/temp_banner_img.svg',
		link: '/testpage',
		latest: true
	}
];

const cartData = [
	{
		userId: '1',
		itemId: '24',
		qty: 10
	},
	{
		userId: '1',
		itemId: '582',
		qty: 3
	},
	{
		userId: '1',
		itemId: '95',
		qty: 1
	},
	{
		userId: '1',
		itemId: '211',
		qty: 7
	}
];

module.exports = {
	setData,
	promotionData,
	cardInventoryData,
	cardTableData,
	cartData
};
