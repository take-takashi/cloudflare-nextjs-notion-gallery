# cloudflare-nextjs-notion-gallery

Cloudflare に Nextjs をデプロイして NotionAPI を用いた画像ギャラリーを作ってみる。

## setup command

```
npx create-next-app nextapp --ts --use-npm
cd nextapp/
npm i -D prettier eslint-config-prettier

# next13ではなく12を使うためにダウングレード
npm remove next
npm i next@12.3.2

# 使用nodeのバージョンを指定
echo 17.6.0 >> .node-version
```

## Next.js で設定すべき内容

- API Routes を Edge runtime 用に書き換える

## Cloudflare pages の設定

（2022/11/30 までの限定対応）Cloudflare pages の設定>関数の Compatibility flags に下記 2 種類を設定

- streams_enable_constructors
- transformstream_enable_standard_constructor

## Reference

- [Cloudflare Pages で Next.js の Edge Runtime がサポートされました \| DevelopersIO](https://dev.classmethod.jp/articles/cloudflare-pages-support-nextjs-edge-runtime/)
- [Dev Container metadata reference](https://containers.dev/implementors/json_reference/#formatting-string-vs-array-properties)
