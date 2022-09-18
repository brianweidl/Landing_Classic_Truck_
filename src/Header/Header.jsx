import Image from 'next/image';
import mailIcon from '../../public/mail-icon.png';
import Styles from './Header.module.css';

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
				<Image src={mailIcon} alt="Send Email" width={50} height={50} />
			</div>
		</header>
	);
}

export default Header;
