import React, { useMemo } from 'react';

interface Props {
	account: string;
}

const useContract = ({ account }: Props) => {
	return useMemo(() => {
		if (active) {
			let contractAddress;
			switch (chainId) {
				case 1: // Mainnet
					contractAddress = '';
					break;
				case 3: // Ropsten
					contractAddress = '';
					break;
				case 4: // Rinkeby
					contractAddress = '0x964348dE4Ef406F1913a6745BF43f4AEBFf5b58C';
					break;
				case 5: // Goerli
					contractAddress = '';
					break;
				case 42: // Kovan
					contractAddress = '';
					break;
				case 31337: // Hardhat Local
					contractAddress = '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707';
			}

			const signer = library.getSigner();
			try {
				return new Contract(contractAddress, abi, signer);
			} catch (e) {
				console.log(e);
				return null;
			}
		}
	}, [account]);
	return <div></div>;
};

export default useContract;
