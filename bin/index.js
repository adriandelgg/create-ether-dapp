#!/usr/bin/env node
const { execSync } = require("child_process");

const redCross = "\x1b[31m✗\x1b[0m";
const greenCheck = "\x1b[32m✓\x1b[0m";

const runCommand = command => {
	try {
		execSync(`${command}`, { stdio: "inherit" });
	} catch (e) {
		console.error(`${redCross} Failed to execute ${command}`, e);
		return false;
	}
	return true;
};

const repoName = process.argv[2];

console.log(`Cloning the repository with name ${repoName}`);

const checkedOut = runCommand(
	`git clone --depth 1 https://github.com/adriandelgg/create-eth-ts-dapp ${repoName}`
);
if (!checkedOut) process.exit(-1);

const install = runCommand("yarn install");
if (!install) process.exit(-1);

console.log("Congratulations! The downloads were successful.🎉");
