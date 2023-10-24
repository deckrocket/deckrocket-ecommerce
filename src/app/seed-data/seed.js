import fs from 'fs';
import seedData from './seed-data.json';

const data = JSON.parse(fs.readFileSync(seedData));
const mappedData = data.map((card) => {
	const {
		id,
		name,
		image_uris,
		oracle_text,
		set_name,
		rarity,
		flavor_text,
		artist,
		type_line,
		full_art,
		layout
	} = card;
	return {
		id,
		name,
		imageUrl: image_uris.png,
		oracle_text,
		set_name,
		rarity,
		flavor_text,
		artist,
		type_line,
		full_art,
		layout
	};
});

export default mappedData;
