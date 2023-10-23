import Link from 'next/link';

const CartSummary = () => {
	return (
		<section className="flex flex-col w-full max-w-[450px] justify-center items-center p-4 bg-slate-100 rounded mt-3">
			<h3 className="font-semibold">Summary</h3>
			<div className="flex flex-col w-full justify-center p-4 gap-1">
				<div className="flex w-full justify-between">
					<p className="w-2/3">Packages</p>
					<p className="w-1/3 text-center">1</p>
				</div>
				<div className="flex w-full justify-between">
					<p className="w-2/3">Items</p>
					<p className="w-1/3 text-center">3</p>
				</div>
				<div className="flex w-full justify-between">
					<p className="w-2/3">Item Total</p>
					<p className="w-1/3 text-center">$5.93</p>
				</div>
				<div className="flex w-full justify-between">
					<p className="w-2/3">Estimate Shipping</p>
					<p className="w-1/3 text-center">$7.99</p>
				</div>
				<div className="flex w-full justify-between">
					<p className="w-2/3 font-semibold">Cart Subtotal</p>
					<p className="w-1/3 text-center font-semibold">$13.92</p>
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
