/**
 * @type import('hardhat/config').HardhatUserConfig
 */
import { task } from 'hardhat/config';
import 'dotenv/config';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-solhint';
import '@typechain/hardhat';
import '@typechain/ethers-v5';
import 'hardhat-gas-reporter';
import 'hardhat-contract-sizer';
import '@openzeppelin/hardhat-upgrades';

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

module.exports = {
	defaultNetwork: 'localhost',
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
	networks: {
		rinkeby: {
			url: process.env.INFURA_RINKEBY_KEY,
			accounts: [process.env.PRIVATE_KEY_29]
		},
		// hardhat: {
		// 	forking: {
		// 		url: process.env.INFURA_RINKEBY_KEY
		// 	}
		// },
		kovan: {
			url: process.env.INFURA_KOVAN_KEY,
			accounts: [process.env.PRIVATE_KEY_29]
		},
		ropsten: {
			url: process.env.INFURA_ROPSTEN_KEY,
			accounts: [process.env.PRIVATE_KEY_29]
		}
		// polygon_mainnet: {},
		// mumbai: {}
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
	},
	paths: {
		sources: './contracts',
		tests: './test',
		cache: './cache',
		artifacts: './artifacts'
	}
};
