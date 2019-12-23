Steins;Git
===========

[![CircleCI](https://circleci.com/gh/o2project/steins-git.svg?style=svg&circle-token=de169eedf1024803e57569d75b18cf82e8d87330)](https://circleci.com/gh/o2project/steins-git)

「GitをSteins;Gateの世界観を使って説明する」薄い本です。

## イベントでの頒布

- コミックマーケットスペシャル6
  - 2015/3/28(土) M-62a
- コミックマーケット86
  - 2014/8/16(日) 西な-11b

## HTMLプレビュー版を見る

https://o2project.github.io/steins-git より見られます。

## ローカルで確認する

ローカル上で確認をおこないたい場合は、次のコマンドを上から順に実行してください。

```
git clone https://github.com/o2project/steins-git.git steins-git
cd steins-git
make init -j
make serve
```

なお、以下のものをインストールしている前提となります。

- Node.js
  - LTS or Currentの最新版
- [yarn](https://www.npmjs.com/package/yarn)
  - 現在v1.9.4以上を推奨しています

## 貢献したい

1. リポジトリをフォークしましょう！
2. 新たなfeatureブランチを作ります: <code>git checkout -b my-new-feature</code>
3. 変更点をコミットします: `git commit -am 'ほげもげを追加'`
4. リモートにプッシュします: `git push origin my-new-feature`
5. pull requestしましょう :D

詳しくは[CONTRIBUTING.md](CONTRIBUTING.md "CONTRIBUTING.md")に様々な案内を書いているので、参考にしてみてください。
