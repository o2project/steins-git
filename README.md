Steins;Git
===========

[![Build Status](http://img.shields.io/travis/o2project/steins-git.svg?style=flat-square)](https://travis-ci.org/o2project/steins-git)
[![Gemnasium](http://img.shields.io/gemnasium/o2project/steins-git.svg?style=flat-square)](https://gemnasium.com/o2project/steins-git)

「GitをSteins;Gateの世界観を使って説明する」薄い本です。

## イベントでの頒布

- コミックマーケットスペシャル6
  - 2015/3/28(土) M-62a
- コミックマーケット86
  - 2014/8/16(日) 西な-11b

## HTMLプレビュー版を見る

http://o2project.github.io/steins-git より見ることができます。

ただし、**ページ容量が6MBを超えています** ので注意してください。

## ローカルで確認する

ローカルでの確認をおこないたい場合は、以下に記述してあるコマンドを、上から順に実行してください。

```
git clone https://github.com/o2project/steins-git.git steins-git
cd steins-git
npm run setup
npm run open
```

なお、以下のものがインストールされていることを前提としています。

- Node.js
  - v0.10 or later
- Ruby
  - グローバル環境にbundlerがインストールされていること

## 貢献したい

[CONTRIBUTING.md](CONTRIBUTING.md "CONTRIBUTING.md")に様々な案内を書いているので、参考にしてみてください。

1. リポジトリをフォークしましょう！
2. 新たなfeatureブランチを作ります: <code>git checkout -b my-new-feature</code>
3. 変更点をコミットします: `git commit -am 'ほげもげを追加'`
4. リモートにプッシュします: `git push origin my-new-feature`
5. pull requestしましょう :D

## ライセンス

<a rel="license" href="http://creativecommons.org/licenses/by-nc/2.1/jp/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/2.1/jp/88x31.png" /></a>

- 文章と、独自に作成した図のライセンス
  - <a rel="license" href="http://creativecommons.org/licenses/by-nc/2.1/jp/">Creative Commons — 表示 - 非営利 2.1 日本 — CC BY-NC 2.1 JP</a>
  - クレジットは`(C) O2 Project`をお使いください
- 表紙のイラストや各章ごとのイラスト
  - `(C) GiantRobot (pixivID:1223059)`
- Steins;Gateのゲームのスクリーンショットの著作権
  - `MAGES./5pb./Nitroplus`に帰属します
