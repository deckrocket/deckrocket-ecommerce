import Link from 'next/link';
import Image from 'next/image';

import SearchBar from './SearchBar';
import cart from '../assets/icons/icon_cart.svg';
import hamburger from '../assets/icons/icon_hamburger.svg';
import profile from '../assets/icons/icon_profile.svg';
import logo from '../assets/images/logo_deckrocket.png';

type headerprop = {
	hasSearchBar: boolean;
};

const Header = ({ hasSearchBar }: headerprop) => {
	return (
		<header className="flex flex-col bg-slate-100 px-8 py-4 gap-2">
			<div className="flex items-center justify-between">
				<div className="flex gap-4">
					<Link href="/">
						<Image src={hamburger} alt="hamburger menu icon" />
					</Link>
					<Link href="/">
						<Image src={logo} alt="deckrocket logo" width={200} />
					</Link>
				</div>
				<div className="flex gap-4">
					<Link href="/">
						<Image src={profile} alt="user profile icon" />
					</Link>
					<Link href="/">
						<Image src={cart} alt="shopping cart icon" />
					</Link>
				</div>
			</div>
			{hasSearchBar && <SearchBar />}
		</header>
	);
};
export default Header;
