rm -rf dist
mkdir dist
cp -rf background.js  img  manifest.json dist
cd dist
zip release.zip -rm ./*
