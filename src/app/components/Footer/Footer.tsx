import "./Footer.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo_deckrocket.png";
import callIcon from "../../assets/icons/icon_call.svg";
import mailIcon from "../../assets/icons/icon_mail.svg";
import facebookIcon from "../../assets/icons/icon_facebook.svg";
import instagramIcon from "../../assets/icons/icon_instagram.svg";
import xIcon from "../../assets/icons/icon_x.svg";
import youtubeIcon from "../../assets/icons/icon_youtube.svg";

const Footer = () => {

    return (
        <footer className="flex flex-col justify-center items-center gap-4 w-full py-4 bg-slate-100">
            {/* Logo */}
            <Link href="/">
                <Image
                    src={logo}
                    alt="deckrocket logo"
                    width={190}
                />
            </Link>

            {/* Contact */}
            <div className="flex flex-col justify-center items-center gap-3">
                <a href="tel:123-456-1234p123" className="flex gap-4">
                    <Image src={callIcon} alt={"icon for calling"} />
                    <p>1-123-456-1234 ext.123</p>
                </a>
                <a href="mailto:service@deckrocket.com" className="flex gap-4">
                    <Image src={mailIcon} alt="icon for mailing" />
                    <p>Customer Service</p>
                </a>
            </div>

            {/* Social */}
            <div className="flex gap-6 justify-center items-center w-full pb-4 divider">
                <a href="https://www.facebook.com/">
                    <Image src={facebookIcon} alt="social icon for facebook" />
                </a>
                <a href="https://www.instagram.com/">
                    <Image src={instagramIcon} alt="social icon for instagram" />
                </a>
                <a href="https://twitter.com/">
                    <Image src={xIcon} alt="social icon for x" />
                </a>
                <a href="https://www.youtube.com/">
                    <Image src={youtubeIcon} alt="social icon for youtube" />
                </a>
            </div>

            {/* CopyRight */}
            <div>
                <p>&copy; Copyright {new Date().getFullYear()} DeckRocket. All Rights Reserved </p>
            </div>

        </footer>
    );
};

export default Footer;