import '../styles/globals.css';
import Layout from '../src/Layout/Layout';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	const startProgress = () => NProgress.start();

	const doneProgress = () => NProgress.done();

	useEffect(() => {
		Router.events.on('routeChangeStart', startProgress);
		/* Router.events.on('routeChangeComplete', doneProgress);
		Router.events.on('routeChangeError', doneProgress); */

		return () => {
			Router.events.off('routeChangeStart', startProgress);
			Router.events.off('routeChangeComplete', doneProgress);
			Router.events.off('routeChangeError', doneProgress);
		};
	}, []);

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
