/**
 * @type import('hardhat/config').HardhatUserConfig
 */
import { task } from 'hardhat/config';
import 'dotenv/config';
import '@openzeppelin/hardhat-upgrades';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-solhint';
import '@typechain/hardhat';
import '@typechain/ethers-v5';
import 'hardhat-gas-reporter';
import 'hardhat-contract-sizer';
import 'solidity-coverage';

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

const INFURA_KEY = process.env.INFURA_API_KEY;
const PRIVATE_KEY =
	process.env.PRIVATE_KEY || // This is the private key for test account #0
	'ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
module.exports = {
	gasReporter: {
		currency: 'USD',
		coinmarketcap: process.env.COINMARKETCAP_API_KEY ? true : false,
		maxMethodDiff: 10,
		enabled: process.env.REPORT_GAS ? true : false,
		excludeContracts: [],
		src: './contracts'
	},
	contractSizer: {
		alphaSort: true,
		runOnCompile: true,
		disambiguatePaths: false
	},
	etherscan: { apiKey: process.env.ETHERSCAN_KEY },
	networks: {
		// hardhat: {
		// 	forking: {
		// 		url: INFURA_KEY
		// 	}
		// },
		// mainnet: {
		// 	url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
		// 	accounts: [PRIVATE_KEY]
		// },
		rinkeby: {
			url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
			accounts: [PRIVATE_KEY]
		},
		kovan: {
			url: `https://kovan.infura.io/v3/${INFURA_KEY}`,
			accounts: [PRIVATE_KEY]
		},
		ropsten: {
			url: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
			accounts: [PRIVATE_KEY]
		},
		goerli: {
			url: `https://goerli.infura.io/v3/${INFURA_KEY}`,
			accounts: [PRIVATE_KEY]
		},
		polygon_mainnet: {
			url: `https://polygon-mainnet.infura.io/v3/${INFURA_KEY}`,
			accounts: [PRIVATE_KEY]
		},
		mumbai: {
			url: `https://polygon-mumbai.infura.io/v3/${INFURA_KEY}`,
			accounts: [PRIVATE_KEY]
		},
		arbitrum_mainnet: {
			url: `https://arbitrum-mainnet.infura.io/v3/${INFURA_KEY}`,
			accounts: [PRIVATE_KEY]
		},
		arbitrum_rinkeby: {
			url: `https://arbitrum-rinkeby.infura.io/v3/${INFURA_KEY}`,
			accounts: [PRIVATE_KEY]
		},
		optimism_mainnet: {
			url: `https://optimism-mainnet.infura.io/v3/${INFURA_KEY}`,
			accounts: [PRIVATE_KEY]
		},
		optimism_kovan: {
			url: `https://optimism-kovan.infura.io/v3/${INFURA_KEY}`,
			accounts: [PRIVATE_KEY]
		}
	},
	solidity: {
		compilers: [
			{
				version: '0.8.7',
				settings: {
					optimizer: {
						enabled: true,
						runs: 200
					}
				}
			},
			{
				version: '0.6.12',
				settings: {
					optimizer: {
						enabled: true,
						runs: 200
					}
				}
			}
		]
	}
};
