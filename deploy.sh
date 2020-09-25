rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "first commit" &&
git branch -M master &&
git remote add origin git@github.com:lb66/lab-ui-web.git &&
git push -f -u origin master  &&
cd ..
