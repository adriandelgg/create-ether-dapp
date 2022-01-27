import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="text-center text-2xl">Good luck building those Dapps!</h1>
		</>
	);
};

export default Home;
