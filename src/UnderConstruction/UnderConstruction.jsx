import React from 'react';
import styles from './UnderConstruction.module.css';
import construction from '../../public/img/construction1.png';
import Image from 'next/image';

function UnderConstruction() {
	return (
		<div className={styles.mainContainer}>
			<div>
				<h3 className={styles.title}>Oops !</h3>
				<p className={styles.paragraph}>Under Construction</p>
			</div>
			<div className={styles.relativeDiv}>
				<div className={styles.imageWrapper}>
					<Image src={construction} alt="construction" />
				</div>
				<div className={styles.backgroundSvg}>
					<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
						<path
							fill="#F8D6B4"
							d="M44.4,-57.8C55.2,-43.9,59.8,-27.6,62.7,-11.1C65.6,5.5,66.6,22.3,58.7,31.8C50.7,41.3,33.6,43.4,19.4,45C5.2,46.6,-6.2,47.6,-18.6,45.5C-31,43.5,-44.3,38.4,-56.3,27.6C-68.3,16.9,-79,0.6,-78,-15.3C-77,-31.1,-64.4,-46.4,-49.4,-59.5C-34.5,-72.7,-17.2,-83.6,-0.2,-83.4C16.8,-83.2,33.7,-71.7,44.4,-57.8Z"
							transform="translate(100 100)"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default UnderConstruction;
