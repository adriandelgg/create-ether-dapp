#!/bin/bash
npx hardhat typechain
[ -d ../frontend ] && cp -r typechain-types ../frontend/lib &&
  echo "Copied typechain types to frontend"
[ -d ../backend ] && cp -r typechain-types ../backend &&
  echo "Copied typechain types to backend"
