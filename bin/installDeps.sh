#!/bin/bash
[ -d backend ] && cd backend && yarn install && cd ..
[ -d frontend ] && cd frontend && yarn install && cd ..
[ -d hardhat ] && cd hardhat && yarn install && cd ..
# find . -type f -name .example.env -execdir mv {} .env ";"
find . -type f -name .env -execdir mv {} .example.env ";"