import { createContext, useState, useEffect } from 'react';
import type { Web3 } from 'components/navbar/MetaMask';

declare let window: any;

export const Web3Context = createContext<Web3>(null!);

const Web3ProviderComponent: React.FC = ({ children }) => {
	const [{ contract, provider, account }, setWeb3] = useState<Web3>({} as Web3);

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
		function newAccount(accounts: Array<string>) {
			const signer = provider?.getSigner(accounts[0]);

			setWeb3((prev: Web3) => ({
				...prev,
				contract: contract.connect(signer),
				account: signer._address
			}));
		}

		window.ethereum.on('accountsChanged', newAccount);
		return () => window.ethereum.removeListener('accountsChanged', newAccount);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [account]);

	return (
		<Web3Context.Provider
			value={{
				contract,
				provider,
				account,
				setWeb3
			}}
		>
			{children}
		</Web3Context.Provider>
	);
};

export default Web3ProviderComponent;
