#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m "deploy"
git branch -M main
git remote add origin git@github.com:Pancake-Q/Pancake-Q.github.io.git
git config --local user.name "Pancake-Q"
git config --local user.email "pancakeqi.code@gmail.com"
git push -f git@github.com:Pancake-Q/Pancake-Q.github.io.git main:gh-page

cd -