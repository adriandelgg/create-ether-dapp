import { useContext } from 'react';
import { Web3Context } from '@components/context/Web3Context';
import { Web3Provider } from '@ethersproject/providers';

import { toast } from 'react-toastify';

declare let window: any;

export interface Web3 {
	contract: ContractFactoryInterface;
	provider: Web3Provider;
	account: string;
	setWeb3?: React.Dispatch<React.SetStateAction<Web3>>;
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

				let contractAddress: string;
				switch (chainId) {
					case '0x1': // Mainnet
						contractAddress = '';
						break;
					case '0x3': // Ropsten
						contractAddress = '';
						break;
					case '0x4':
						contractAddress = '';
						break;
					case '0x89': // Polygon Mainnet
						contractAddress = '';
						break;
					case '0x13881': // Polygon Testnet
						contractAddress = '';
						break;
					default:
						// Hardhat Local
						contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
				}

				const signer = provider.getSigner(address);
				const account = signer._address;

				const contract = Contract__factory.connect(contractAddress, signer);

				setWeb3 &&
					setWeb3((prev: Web3) => ({
						...prev,
						contract,
						provider,
						account
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
