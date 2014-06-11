Steins;Git
===========

[![Build Status](https://travis-ci.org/o2project/steins-git.svg?branch=master)](https://travis-ci.org/o2project/steins-git) [![Gitter chat](https://badges.gitter.im/o2project/steins-git.png)](https://gitter.im/o2project/steins-git)

C86(日曜日 西地区"な"ブロック-11b)にて頒布予定の、GitをSteins;Gateを使って説明する薄い本です。

http://o2project.github.io/steins-git より見ることができます。

## ローカルで確認する

各種パッケージのインストールやローカルでの確認をおこないたい場合は、以下のコマンドを上から順に実行してください。

事前にNode.jsと、rvmやrbenvを利用してRubyがインストールされている想定です。

```
git clone https://github.com/o2project/steins-git.git steins-git
cd steins-git
bundle install --path vendor/bundle
npm install
grunt
grunt server
```

## 貢献

[![Gitter chat](https://badges.gitter.im/o2project/steins-git.png)](https://gitter.im/o2project/steins-git) に意見などどうぞ。

[CONTRIBUTE.md](CONTRIBUTE.md "CONTRIBUTE.md")も、ガイドラインなど書いてあるので参考にしてください。

1. リポジトリをフォークしましょう！
2. 新たなfeatureブランチを作ります: <code>git checkout -b my-new-feature</code>
3. 変更点をコミットします: `git commit -am 'ほげもげを追加'`
4. リモートにプッシュします: `git push origin my-new-feature`
5. pull requestしましょう :D

## ライセンス

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a>

文章のライセンスについては<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>となっております。
