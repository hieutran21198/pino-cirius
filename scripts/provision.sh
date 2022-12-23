#!/bin/bash

if [ $# -ne 1 ]; then
	echo "Usage: $0 <file>"
	exit 1
fi

[ ! -d "./.git" ] && git init

if [ ! -d "./.husky" ]; then
	npx husky-init
else
	echo "Husky is already installed. Provisioning skipped to init husky"
fi

echo "Installing package dependencies"

yarn

npx mrm@2 lint-staged

# remove current origin
current_origin=$(git remote get-url origin)

[ "$current_origin" == "git@github.com:hieutran21198/react-vite-cypress-kit.git" ] || [ "$current_origin" == "https://github.com/hieutran21198/react-vite-cypress-kit.git" ] && git remote remove origin

sed -i "s/pino-cirius/$0/g" package.json
