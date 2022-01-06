import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Greeter__factory, Greeter } from "../typechain-types/index";

describe("Greeter", function () {
	const oneEther = ethers.utils.parseEther("1");
	let owner: SignerWithAddress,
		bob: SignerWithAddress,
		contract: Greeter,
		contract2: Greeter;

	beforeEach(async function () {
		[owner, bob] = await ethers.getSigners();
		const ContractFactory = new Greeter__factory(owner);
		contract = await ContractFactory.deploy("Hello");
		contract2 = contract.connect(bob);
	});
});
