import Image from 'next/image';
import Styles from './Header.module.css';
import mailIcon from '../../public/img/header/mail-icon.png';

function Header() {
	return (
		<header className={Styles.header}>
			<h3 className={Styles.header_title}>Carzone</h3>
			<nav className={Styles.header_nav}>
				<ul>
					<li>Service</li>
					<li>Find Dealer</li>
					<li>Auction Central</li>
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
