type PropTypes = {
	color: string;
};

const AddToCartButton = ({ color }: PropTypes) => {
	return (
		<button
			className={`text-center ${
				color === 'light'
					? 'bg-yellow-600 text-black'
					: 'bg-gray-700 text-white'
			} px-2 py-1 rounded`}
		>
			Add to Cart
		</button>
	);
};

export default AddToCartButton;
