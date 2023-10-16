import './Header.scss';
import Link from "next/link";
import Image from "next/image";

import SearchBar from '../SearchBar/SearchBar';
import cart from '../../assets/icons/icon_cart.svg';
import hamburger from '../../assets/icons/icon_hamburger.svg';
import profile from '../../assets/icons/icon_profile.svg';
import logo from "../../assets/images/logo_deckrocket.png";

const Header = (hasSearchBar: boolean) => {
    return (
        <header className='header'>
            <div className='header__left'>
                <Link href="/">
                    <Image src={hamburger} alt="hamburger menu icon" />
                </Link>
                <Link href="/">
                    <Image src={logo} alt="deckrocket logo" />
                </Link>
            </div>
            <div className='header__right'>
                <Link href="/">
                    <Image src={profile} alt="user profile icon" />
                </Link>
                <Link href="/">
                    <Image src={cart} alt="shopping cart icon" />
                </Link>
            </div>
            {hasSearchBar && <SearchBar />}
        </header>
    )
}
export default Header;