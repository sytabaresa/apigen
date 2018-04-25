#!/bin/sh

set -e

name=$1
base=$UNWEBHOOK_DATA
repos=$base/repos
dir=$repos/$name
url=$2

cd $base

echo "configurando el repo"
mkdir -p $repos
if [ ! -d $dir ]; then
  cd $repos
  git clone $url
  cd $base
fi
cd $dir
git pull origin master


bin=$UNWEBHOOK_BIN
echo $bin
echo "generando código Angularjs..."
mkdir -p "$dir-gen"
cd $bin
node $bin/index.js $dir/swagger/swagger.json $name > "$dir-gen"/index.js
echo "generacion terminada"
