import Image from 'next/image';
import Link from 'next/link';

import styles from './CTA.module.css';
import ctaimage from '../../public/img/cta/ctaimage.jpeg';
import arrowSvg from '../../public/img/cta/arrowSvg.png';

function CTA() {
	return (
		<section className={styles.mainContainer}>
			<h3>Experts by your side.</h3>
			<span className={styles.findDealer}>
				<Link href="/find-dealer">Find your dealer</Link>
				<div className={styles.arrowWrapper}>
					<Image src={arrowSvg} alt="User" placeholder="blur" />
				</div>
			</span>
			<div>
				<div className={styles.imageWrapper}>
					<Image src={ctaimage} alt="User" placeholder="blur" />
				</div>
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit vestibulum odio id vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. Suspendisse at justo elit. Proin fringilla erat ut eros rhoncus tempus id in nisi. Fusce quis justo tempor, rhoncus neque at, bibendum ipsum.
					</p>

					<Link href="/about-us">
						<a className={styles.aboutUsButton}>About Us</a>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default CTA;
