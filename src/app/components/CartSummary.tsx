import Link from 'next/link';

type priceList = { price: number[]; qty: number[] };

const CartSummary = ({ price, qty }: priceList) => {
	console.log(price, qty);
	let itemTotal = 0;
	for (let i = 0; i < price.length; i++) {
		itemTotal += price[i] * qty[i];
	}

	const shippingFee = 7.99;
	const subtotal = (itemTotal + shippingFee).toFixed(2);

	return (
		<section className="flex flex-col w-full max-w-[450px] justify-center items-center p-4 bg-slate-100 rounded mt-3">
			<h3 className="font-semibold">Summary</h3>
			<div className="flex flex-col w-full justify-center p-4 gap-1">
				<div className="flex w-full justify-between">
					<p className="w-2/3">Items</p>
					<p className="w-1/3 text-center">{price.length}</p>
				</div>
				<div className="flex w-full justify-between">
					<p className="w-2/3">Item Total</p>
					<p className="w-1/3 text-center">${itemTotal.toFixed(2)}</p>
				</div>
				<div className="flex w-full justify-between">
					<p className="w-2/3">Estimate Shipping</p>
					<p className="w-1/3 text-center">${shippingFee}</p>
				</div>
				<div className="flex w-full justify-between">
					<p className="w-2/3 font-semibold">Cart Subtotal</p>
					<p className="w-1/3 text-center font-semibold">${subtotal}</p>
				</div>
				<p className="mt-2 p-small">*Taxes calculated at checkout</p>
			</div>
			<Link
				href="/"
				className="w-2/3 p-2 rounded bg-white font-semibold text-center text-sm mt-4"
			>
				Checkout
			</Link>
		</section>
	);
};

export default CartSummary;
