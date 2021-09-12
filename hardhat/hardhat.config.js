require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-solhint');
require('solidity-coverage');
require('hardhat-gas-reporter');
require('dotenv').config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	defaultNetwork: 'localhost',
	gasReporter: {
		currency: 'USD',
		enabled: process.env.REPORT_GAS ? true : false,
		excludeContracts: [],
		src: './contracts'
	},
	networks: {
		rinkeby: {
			url: process.env.INFURA_RINKEBY_KEY,
			accounts: [process.env.PRIVATE_KEY_22]
		},
		// hardhat: {
		// 	forking: {
		// 		url: process.env.INFURA_RINKEBY_KEY
		// 	}
		// },
		kovan: {
			url: process.env.INFURA_KOVAN_KEY,
			accounts: [process.env.PRIVATE_KEY_22]
		},
		ropsten: {
			url: process.env.INFURA_ROPSTEN_KEY,
			accounts: [process.env.PRIVATE_KEY_22]
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
	}
};
