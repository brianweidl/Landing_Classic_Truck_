import Image from 'next/image';
import Link from 'next/link';
import Styles from './Header.module.css';
import mailIcon from '../../public/img/header/mail-icon.png';

function Header() {
	return (
		<header className={Styles.header}>
			<h3 className={Styles.header_title}>
				<Link href="/">Carzone</Link>
			</h3>
			<nav className={Styles.header_nav}>
				<ul>
					<li>
						<Link href="/find-dealer">
							<a>Find Dealer</a>
						</Link>
					</li>
					<li>
						<Link href="/about-us">
							<a>About Us</a>
						</Link>
					</li>
					<li>
						<Link href="/auction-central">
							<a>Auction Central</a>
						</Link>
					</li>
				</ul>
			</nav>
			<div className={Styles.header_rightIcons}>
				<span>EN</span>
				<Image src={mailIcon} alt="Send Email" width={40} height={40} />
			</div>
			<svg className={Styles.hamburgerMenu} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
					fillRule="nonzero"
				/>
			</svg>
		</header>
	);
}

export default Header;
