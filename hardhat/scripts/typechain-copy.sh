#!/bin/bash
npx hardhat typechain
cp -r typechain ../frontend/lib
cp -r typechain ../backend
