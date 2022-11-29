import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import mailIcon from '../../public/img/header/mail-icon.png';

function Header() {
	const [openSidenav, setOpenSidenav] = useState(false);

	const closeSidenav = () => setOpenSidenav(false);
	return (
		<>
			<div className={openSidenav ? styles.sidenav : styles.sidenavHidden}>
				<ul className={styles.menuContainer}>
					<li className={styles.sidenavMenu}>
						<button className={styles.sidenavCloseButton} onClick={closeSidenav}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="icon-icon-P1l"
							>
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						</button>
					</li>
					<li>
						<Link href="/find-dealer" className={styles.linkDisabled}>
							<a onClick={closeSidenav}>Find Dealer</a>
						</Link>
					</li>
					<li>
						<Link href="/about-us">
							<a onClick={closeSidenav}>About Us</a>
						</Link>
					</li>
					<li>
						<Link href="/auction-central">
							<a onClick={closeSidenav}>Auction Central</a>
						</Link>
					</li>
				</ul>
			</div>
			<header className={styles.header}>
				<h3 className={styles.header_title}>
					<Link href="/">Carzone</Link>
				</h3>
				<nav className={styles.header_nav}>
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
				<div className={styles.header_rightIcons}>
					<span>EN</span>
					<Image src={mailIcon} alt="Send Email" width={40} height={40} />
				</div>
				<svg className={styles.hamburgerMenu} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => setOpenSidenav(true)}>
					<path
						d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
						fillRule="nonzero"
					/>
				</svg>
			</header>
		</>
	);
}

export default Header;
