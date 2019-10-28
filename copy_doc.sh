#! /bin/sh

out_dir=./docs/rustdoc
salva_dir=../rust-dev/salva

echo "Generating the documentation..."
cd $salva_dir; cargo doc -p salva2d -p salva3d --no-deps
cd -
rm -rf docs/rustdoc
cp -r $salva_dir/target/doc $out_dir

echo "... documentation generated!"

./fix_rustdoc.sh
