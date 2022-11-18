import Image from 'next/image';
import Link from 'next/link';

import styles from './CTA.module.css';
import ctaimage from '../../public/img/cta/ctaimage.jpeg';
import arrowSvg from '../../public/img/cta/arrowSvg.png';

function CTA() {
	return (
		<section className={styles.mainContainer}>
			<h3>Experts by your side.</h3>
			<div className={styles.findDealer}>
				<Link href="/find-dealer">Find your dealer</Link>
				<div className={styles.arrowWrapper}>
					<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
						<path fill="currentColor" d="m12 20l-1.425-1.4l5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8Z" />
					</svg>
				</div>
			</div>
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
/* 

<div className={styles.findDealer}>
				<Link href="/find-dealer">Find your dealer</Link>
				<div className={styles.arrowWrapper}>
					<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
						<path fill="currentColor" d="m12 20l-1.425-1.4l5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8Z" />
					</svg>
				</div>
			</div> */
