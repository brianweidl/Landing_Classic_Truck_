import Image from 'next/image';

import styles from './HeroSection.module.css';
import user1 from '../../public/img/hero/user1.jpg';
import user2 from '../../public/img/hero/user2.jpg';
import user3 from '../../public/img/hero/user3.jpg';

function HeroSection() {
	return (
		<main className={styles.heroMain}>
			<h1 className={styles.main_title}>THE CLASSIC TRUCK</h1>
			<p className={styles.main_paragraph}>The international ClassicTruck network provides you with access to a unique pool of trucks of all brands, ages and types. </p>
			<section className={styles.satisfiedCustomersSection}>
				<div className={styles.imagesContainer}>
					<span className={styles.userImageWrapper}>
						<Image src={user1} alt="User" placeholder="blur" className={styles.userImage} width={100} height={100} />
					</span>
					<span className={styles.userImageWrapper}>
						<Image src={user2} alt="User" placeholder="blur" className={styles.userImage} width={100} height={100} />
					</span>
					<span className={styles.userImageWrapper}>
						<Image src={user3} alt="User" placeholder="blur" className={styles.userImage} width={100} height={100} />
					</span>
				</div>
				<span className={styles.satisfiedCustomersMessage}>20k Satisfied Customers </span>
			</section>
		</main>
	);
}

export default HeroSection;
