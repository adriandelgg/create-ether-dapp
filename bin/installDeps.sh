#!/bin/bash
# Used to install all dependencies
# Also checks to make sure the folders are present in case they get delted.
[ -d backend ] && cd backend && yarn install && cd ..
[ -d frontend ] && cd frontend && yarn install && cd ..
[ -d hardhat ] && cd hardhat && yarn install && cd ..

# Renames .example.env files to .env
find . -type f -name .example.env -execdir mv {} .env ";"