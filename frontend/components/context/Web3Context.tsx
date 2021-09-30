import { createContext, useState, useEffect } from 'react';
import type { BigNumberish } from '@ethersproject/bignumber';
import type { Web3 } from '@components/navbar/MetaMask';
import { formatEther } from '@ethersproject/units';

declare let window: any;

export const Web3Context = createContext<any>(null);

const Web3ProviderComponent: React.FC = ({ children }) => {
	const [newRegister, setNewRegister] = useState<boolean>();
	const [
		{
			gameContract,
			nftContract,
			provider,
			account,
			etherBalance,
			tokenBalance
		},
		setWeb3
	] = useState<any>({
		gameContract: '',
		nftContract: '',
		provider: '',
		account: '',
		etherBalance: '',
		tokenBalance: ''
	});

	// Listens for network changes to reload the page
	useEffect(() => {
		window.ethereum.on('chainChanged', (chainId: string) =>
			window.location.reload()
		);
		return () =>
			window.ethereum.removeListener('chainChanged', (chainId: string) =>
				window.location.reload()
			);
	}, []);

	// Listens for a change in account and updates state
	useEffect(() => {
		if (gameContract && provider) {
			function newAccount(accounts: Array<string>) {
				const signer = provider?.getSigner(accounts[0]);

				gameContract
					.balanceOf(signer._address)
					.then((tokenBalance: BigNumberish) => {
						signer?.getBalance().then((balance: BigNumberish) =>
							setWeb3((prev: Web3) => ({
								...prev,
								gameContract: gameContract?.connect(signer),
								nftContract: nftContract?.connect(signer),
								account: signer._address,
								etherBalance: Number(formatEther(balance)).toFixed(4),
								tokenBalance: Number(formatEther(tokenBalance)).toFixed(4)
							}))
						);
					});
			}

			window.ethereum.on('accountsChanged', newAccount);
			return () =>
				window.ethereum.removeListener('accountsChanged', newAccount);
		}
	}, [account]);

	return (
		<Web3Context.Provider
			value={{
				gameContract,
				nftContract,
				provider,
				account,
				etherBalance,
				tokenBalance,
				newRegister,
				setNewRegister,
				setWeb3
			}}
		>
			{children}
		</Web3Context.Provider>
	);
};

export default Web3ProviderComponent;
