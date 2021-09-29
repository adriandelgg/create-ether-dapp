import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('ContractName', function () {
	let ContractFactory, owner, bob, contract, contract2;
	const oneEther = ethers.BigNumber.from('1000000000000000000');

	beforeEach(async function () {
		ContractFactory = await ethers.getContractFactory('ContractName');
		[owner, bob] = await ethers.getSigners();
		contract = await ContractFactory.deploy();
		contract2 = contract.connect(bob);
	});
});
