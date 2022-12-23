#!/bin/bash

[ ! -d .git ] && git init

npx husky-init && yarn

npx mrm@2 lint-staged

# remove current origin
current_origin=$(git remote get-url origin)

[ "$current_origin" == "git@github.com:hieutran21198/react-vite-cypress-kit.git" ] || [ "$current_origin" == "https://github.com/hieutran21198/react-vite-cypress-kit.git" ] && git remote remove origin
