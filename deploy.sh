#! /bin/sh
set -x

salva_dir="../rust-dev/salva"

mkdir -p deploy
mkdir -p static

demos="all_examples3"
for demo in $demos; do
    cp $salva_dir/examples3d/*.rs .
    sed -e "s/{{demo}}/$demo/g" template/Cargo3.toml > Cargo.toml
    CARGO_INCREMENTAL=0 cargo web deploy --target=wasm32-unknown-unknown --release
    cp target/deploy/$demo.js docs/demo/.
    cp target/deploy/$demo.wasm docs/demo/.
    sed -i '' -e "s#$demo.wasm#/demo/$demo.wasm#g" docs/demo/$demo.js
    sed -e "s/{{demo}}/$demo/g" template/demo.md > docs/$demo.md

    rm *.rs
done

demos="all_examples2"
for demo in $demos; do
    cp $salva_dir/examples2d/*.rs .
    sed -e "s/{{demo}}/$demo/g" template/Cargo2.toml > Cargo.toml
    CARGO_INCREMENTAL=0 cargo web deploy --target=wasm32-unknown-unknown --release
    cp target/deploy/$demo.js docs/demo/.
    cp target/deploy/$demo.wasm docs/demo/.
    sed -i '' -e "s#$demo.wasm#/demo/$demo.wasm#g" docs/demo/$demo.js
    sed -e "s/{{demo}}/$demo/g" template/demo.md > docs/$demo.md

    rm *.rs
done

rm Cargo.toml
rm -r static
