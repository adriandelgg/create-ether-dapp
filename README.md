# 🔥 Create Ether Dapp [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue.svg)

🛠️ An Ethereum template to help you get building ASAP with all the necessary tools you'll actually use!

⛓️ This template allows you to build Full-Stack Blockchain Applications.

💥 All the sections below utilize the power of TypeScript.

## Technologies Used

🎨 __Front-end:__
Next.js (React), Tailwind CSS, Ethers.js, MetaMask, IPFS, Pinata

👷‍♂️ __Smart Contracts:__
Hardhat, Ethers.js, TypeChain, OpenZeppelin, Mocha, Chai, Waffle

🗃️ __Back-end:__
Node.js, MongoDB, Mongoose, Express, Ethers.js, Joi

## How to Use

### 1. First Method (Recommended)

Using the script will create a new project at `my-dapp` in the current working directory. 

```bash
yarn create ether-dapp my-dapp
cd my-dapp
yarn dev
```

It's required that you have `yarn` installed. If you don't, simply run `npm i -g yarn`.  
Using `yarn create ether-dapp` ensures that you always use the latest version.

Once the app is running using `yarn dev` you can view at:  
- Frontend http://localhost:3000  
- Backend http://localhost:5000

### 2. Second Method

To use this template, all you have to do is select "Use this template" from within the main GitHub repository of this project.  
This will allow you to create a brand new repo using this template as a starting base.

After creating a new repo by using this one as a template, clone your new repo into your IDE of choice.
Once cloned, go into your new cloned repo & run:

```bash
yarn install
```

You can also `cd` into all 3 directories (`frontend`, `backend`, & `hardhat`) & run `yarn install`.

## Running All at the Same Time

You can run the backend, frontend, and local blockchain node all from 1 single terminal instance.  
To do so, run the following command from your project's root directory.

```bash
yarn dev
```

This utilizes a package called `concurrently` that allows you to concurrently run all instances from a single terminal.

## Special Thanks

This project was insipired by:

- [create-eth-app](https://github.com/paulrberg/create-eth-app)
- [create-react-app](https://github.com/facebook/create-react-app)
- [create-next-app](https://github.com/zeit/next.js/tree/master/packages/create-next-app)

### Make sure to Star!🌟
