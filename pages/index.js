import Head from 'next/head';
import Image from 'next/image';
import CTA from '../src/CTA/CTA';
import HeroSection from '../src/HeroSection/HeroSection';
import TruckImage from '../src/TruckImage/TruckImage';

export default function Home() {
	return (
		<>
			<Head>
				<title>The Classic Truck</title>
				<meta name="description" content="Generated by create next app" />
			</Head>

			<HeroSection />
			<TruckImage />
			<CTA />
		</>
	);
}
