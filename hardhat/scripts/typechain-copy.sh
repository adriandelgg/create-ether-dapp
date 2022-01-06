#!/bin/bash
npx hardhat typechain
cp -r typechain-types ../frontend/lib
cp -r typechain-types ../backend
