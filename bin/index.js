#!/usr/bin/env node

"use strict";

const path = require("node:path");
const fs = require("node:fs/promises");
const { execSync } = require("node:child_process");

const redCross = "\x1b[31m✗\x1b[0m";

if (process.argv.length < 3) {
	console.log("\x1b[31m✗", "You have to provide a name to your app.");
	console.log("For example:");
	console.log("    npx create-eth-ts-dapp my-app", "\x1b[0m");
	process.exit(1);
}

const ownPath = process.cwd();
const repoName = process.argv[2];
const appPath = path.join(ownPath, repoName);

const runCommand = command => {
	try {
		execSync(`${command}`, { stdio: "inherit" });
	} catch (e) {
		console.error(`${redCross} Failed to execute ${command}`, e);
		return false;
	}
	return true;
};

async function setup() {
	try {
		console.log(`\x1b[35m🔥 Creating a new Ethereum powered dapp 🔥\x1b[0m`);

		const checkedOut = runCommand(
			`git clone --depth 1 https://github.com/adriandelgg/create-eth-ts-dapp ${repoName}`
		);
		if (!checkedOut) process.exit(-1);

		console.log("\x1b[32m✓ Successfully cloned!\x1b[0m");

		process.chdir(appPath);

		const install = runCommand(`yarn install`);
		if (!install) process.exit(-1);

		await fs.rm(path.join(appPath, "./bin"), {
			recursive: true,
			force: true
		});
		console.log("\x1b[35mRemoved unneeded bin directory.\x1b[0m");

		console.log();
		console.log(
			"\x1b[32m✓ Congratulations! Installation was successful! 🎉\x1b[0m"
		);
		console.log();
		console.log("\x1b[36m", "You can start by typing:");
		console.log(`    cd ${repoName}`);
		console.log("    yarn dev", "\x1b[0m");
		console.log();
		console.log("Check README.md for more information.");
		console.log("Enjoy & build something great!👷 ");
		console.log();
	} catch (e) {
		console.error(e);
	}
}

setup();
