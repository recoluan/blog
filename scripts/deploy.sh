npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@git.coding.net:recoluan/recoluan.git master

cd ../
rm -rf public