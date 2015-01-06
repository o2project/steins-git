#!/bin/bash -eu

# ref: https://github.com/typescript-ninja/typescript-in-definitelyland/blob/master/circle.yml

if [ "$CIRCLECI" != "true" ]; then
    echo "not on Circle CI!"
    exit 1
fi

if [ "$CIRCLE_BRANCH" != "master" ]; then
    echo "not in master branch"
    exit 1
fi

# clone
echo "cloning..."
git clone --quiet https://${GITHUB_TOKEN}@github.com/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}.git pages
cd pages
git checkout -b gh-pages origin/gh-pages

# update
echo "updating..."
rm -rf Ch* images public *.html
cp -r ../build/** ./

# commit & push
echo "publishing..."
git add -A
set +e # 変更ファイル無しの場合コケるけど無視する
git commit -m "[ci skip] Update with ${CIRCLE_SHA1}"
set -e
git push --quiet https://${GITHUB_TOKEN}@github.com/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}.git gh-pages
