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
```
