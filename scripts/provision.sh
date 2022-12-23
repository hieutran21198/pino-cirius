#!/bin/bash

[ ! -d .git ] && git init

npx husky-init && yarn

npx mrm@2 lint-staged
