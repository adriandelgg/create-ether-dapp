import NavBar from '@components/navbar/NavBar';
import Head from 'next/head';
import Image from 'next/image';

const Layout: React.FC = ({ children }) => (
	<>
		<Head>
			<link rel="icon" href="/bp-logo.svg" />
			<link rel="shortcut icon" href="/bp-logo.svg" />
		</Head>
		<NavBar />
		<main>
			<div className="text-center mt-6 mb-2">
				<Image src="/bp-logo.svg" alt="BP Logo" width={170} height={170} />
			</div>
			{children}
		</main>
	</>
);

export default Layout;
