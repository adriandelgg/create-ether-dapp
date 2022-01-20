import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { TodoList__factory, TodoList } from "../typechain-types/index";

describe("TodoList", function () {
	const oneEther = ethers.utils.parseEther("1");
	let owner: SignerWithAddress,
		bob: SignerWithAddress,
		contract: TodoList,
		contract2: TodoList;

	beforeEach(async function () {
		[owner, bob] = await ethers.getSigners();
		const ContractFactory = new TodoList__factory(owner);
		contract = await ContractFactory.deploy("Task 0");
		contract2 = contract.connect(bob);
	});

	it("should create a task in constructor", async () => {
		const { content } = await contract.tasks(0);
		expect(content).to.equal("Task 0");
	});

	it("should create a new task", async () => {
		await contract.createTask("Task 1");
		const { content, id } = await contract.tasks(1);

		expect(content).to.equal("Task 1");
		expect(id).to.equal(1);
	});

	it("should complete task", async () => {
		await contract.completeTask(0);
		const { completed } = await contract.tasks(0);
		expect(completed).to.be.true;
	});

	it("should remove task", async () => {
		await contract.createTask("Task 1");
		await contract.removeTask(1);

		const { content, id } = await contract.tasks(1);
		expect(id).to.equal(0);
		expect(content).to.be.empty;
	});
});
