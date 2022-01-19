#!/usr/bin/env node

"use strict";

const path = require("node:path");
const fs = require("node:fs/promises");
const { execSync } = require("node:child_process");

if (process.argv.length < 3) {
	console.log("\x1b[31m✗", "You have to provide a name to your app.");
	console.log("For example:");
	console.log("    yarn create ether-dapp my-dapp", "\x1b[0m");
	process.exit(1);
}

const ownPath = process.cwd();
const repoName = process.argv[2];
const appPath = path.join(ownPath, repoName); // absolute path
const appName = path.basename(appPath);

const runCommand = command => {
	try {
		execSync(`${command}`, { stdio: "inherit" });
	} catch (e) {
		console.error(`\x1b[31m✗ Failed to execute ${command}\x1b[0m`);
		console.error(`\x1b[31m${e}\x1b[0m`);
		return false;
	}
	return true;
};

async function setup() {
	try {
		// Checks that Yarn is downloaded and used
		try {
			execSync("yarnpkg --version", { stdio: "ignore" });
		} catch (error) {
			console.error(
				"Yarn is necessary for Create Ether Dapp. Install it by following the official documentation:"
			);
			console.log();
			console.log("\x1b[36mhttps://classic.yarnpkg.com/en/docs/install\x1b[0m");
			console.log();
			console.log("\x1b[35mOr with `npm i -g yarn`\x1b[0m");
			process.exit(1);
		}
		console.log(
			`Creating a new Ethereum Full-Stack Dapp in \x1b[32m${appPath}\x1b[0m 🔥`
		);
		console.log();

		const checkedOut = runCommand(
			`git clone --depth 1 https://github.com/adriandelgg/create-ether-dapp.git ${repoName}`
		);
		if (!checkedOut) process.exit(-1);

		console.log("\x1b[32m✓ Successfully cloned!\x1b[0m");

		process.chdir(appPath);

		await fs.rm(path.join(appPath, "./bin/index.js"));
		console.log("\x1b[35mRemoved unnecessary create-ether script.\x1b[0m");
		await fs.rm(path.join(appPath, "./.git"), { recursive: true, force: true });

		runCommand("git init");
		console.log("Initialized new fresh Git repository.");

		console.log();
		console.log("Installing packages. This might take a couple of minutes.");
		console.log();
		const install = runCommand(`yarn install`);
		if (!install) process.exit(-1);

		console.log();
		console.log(
			"\x1b[32m✓ Congratulations! Installation was successful! 🎉\x1b[0m"
		);
		console.log();
		console.log("\x1b[36m", "Start your new project by typing:");
		console.log(`    cd ${repoName}`);
		console.log("    yarn dev", "\x1b[0m");
		console.log();
		console.log("Check README.md for more information.");
		console.log("Have fun building something great!👷");
	} catch (e) {
		console.error(e);
	}
}

setup();
