import { useRouter } from 'next/router';
import Link from 'next/link';
import { Web3Context } from '@components/context/Web3Context';

import { ToastContainer } from 'react-toastify';
import MetaMask from './MetaMask';
import { useContext } from 'react';
import DarkModeToggle from '@components/helper/DarkModeToggle';

const NavBar = () => {
	const { etherBalance, tokenBalance } = useContext(Web3Context);
	const { asPath: path } = useRouter();

	return (
		<>
			<ToastContainer />
			<header
				className="flex justify-around items-center py-3
				border-b-2 border-gray-100 dark:border-gray-700"
			>
				<nav>
					<ul className="flex justify-around text-center">
						<li className={path === '/' ? 'active-nav' : 'nav-item'}>
							<Link href="/">Home</Link>
						</li>
						<li
							className={path === '/predictiongame' ? 'active-nav' : 'nav-item'}
						>
							<Link href="/predictiongame">Prediction Game</Link>
						</li>
					</ul>
				</nav>
				<div className="flex items-center">
					<div className="mr-10 pt-1">
						<p>BP Token Balance: {tokenBalance}</p>
						<p className="">Ether Balance: {etherBalance}</p>
					</div>
					<MetaMask />
					<div className="ml-5">
						<DarkModeToggle />
					</div>
				</div>
			</header>
		</>
	);
};

export default NavBar;
