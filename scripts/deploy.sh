npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:recoluan/blog.git master

cd ../
rm -rf public