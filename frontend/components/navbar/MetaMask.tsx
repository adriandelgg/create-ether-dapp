import { useContext } from 'react';
import { Web3Context } from '@components/context/Web3Context';
import { gameABI } from '@components/ABIs/gameABI';
import { nftABI } from '@components/ABIs/nftABI';

import { Web3Provider } from '@ethersproject/providers';
import { Contract } from '@ethersproject/contracts';
import { formatEther } from '@ethersproject/units';
import { toast } from 'react-toastify';

declare let window: any;

export interface Web3 {
	gameContract: any;
	nftContract: Contract | string;
	provider: Web3Provider;
	account: string;
	etherBalance: string;
	tokenBalance: string;
}

const MetaMask = () => {
	const { account, setWeb3 } = useContext(Web3Context);

	async function enableEth() {
		try {
			if (window.ethereum) {
				const ethereum = window.ethereum;

				const provider = new Web3Provider(ethereum);
				const [address] = await ethereum.request({
					method: 'eth_requestAccounts'
				});
				const chainId = await ethereum.request({ method: 'eth_chainId' });

				let nftAddress;
				let gameAddress;
				switch (chainId) {
					case '0x1': // Mainnet
						nftAddress = '';
						gameAddress = '';
						break;
					case '0x3': // Ropsten
						nftAddress = '';
						gameAddress = '';
						break;
					case '0x4': // Rinkeby
						nftAddress = '0x8F7117FeA39fdB8E3335090d7211A6128E4d5cC0';
						gameAddress = '0x141EC0C2b4C193675594EAf316faAD8784dA8A11';
						break;
					case '0x89': // Polygon Mainnet
						nftAddress = '';
						gameAddress = '';
						break;
					case '0x13881': // Polygon Testnet
						nftAddress = '';
						gameAddress = '';
						break;
					case '0x7a69': // Hardhat Local
						nftAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
						gameAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
				}

				const signer = provider.getSigner(address);

				const nftContract = nftAddress
					? new Contract(nftAddress, nftABI, signer)
					: '';
				const gameContract: any = gameAddress
					? new Contract(gameAddress, gameABI, signer)
					: '';

				const account = signer._address;

				const tokenBalance = Number(
					formatEther(await gameContract.balanceOf(account))
				).toFixed(4);
				console.log(tokenBalance);

				const etherBalance = Number(
					formatEther(await signer.getBalance())
				).toFixed(4);

				setWeb3((prev: Web3) => ({
					...prev,
					gameContract,
					nftContract,
					provider,
					account,
					etherBalance,
					tokenBalance
				}));
			} else if (window.web3) {
				console.log('Update MetaMask');
			} else {
				console.log('Enable MetaMask');
			}
		} catch (e) {
			console.error(e);
		}
	}

	return (
		<div className="py-3">
			{!account ? (
				<button className="metamask-btn" onClick={enableEth}>
					Connect Wallet
				</button>
			) : (
				<button
					className="blue-btn"
					onClick={() =>
						toast.info(`Your wallet address is: ${account}`, {
							autoClose: 3000,
							position: 'top-center',
							style: {
								width: 520
							},
							theme: 'colored'
						})
					}
				>
					Wallet Connected
				</button>
			)}
		</div>
	);
};

export default MetaMask;
