#!/bin/bash

# shellcheck disable=SC2164
cd /Users/yan/WebstormProjects/market-dashboard/

git update-index --assume-unchanged .commit.sh
git add .
git commit -m "added axios and statistics API for handling requests"
git push
git update-index --no-assume-unchanged .commit.sh
