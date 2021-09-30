import NavBar from '@components/navbar/NavBar';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => (
	<>
		<Head>
			<link rel="icon" href="/bp-logo.svg" />
			<link rel="shortcut icon" href="/bp-logo.svg" />
		</Head>
		<NavBar />
		<main>
			<img
				className="mx-auto mt-6 mb-2"
				src="bp-logo.svg"
				alt="BP Logo"
				width="110"
			/>
			{children}
		</main>
	</>
);

export default Layout;
