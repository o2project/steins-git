Steins;Git
===========

[![Build Status](https://travis-ci.org/o2project/steins-git.svg?branch=master)](https://travis-ci.org/o2project/steins-git) [![Gitter chat](https://badges.gitter.im/o2project/steins-git.png)](https://gitter.im/o2project/steins-git)

C86(日曜日 西地区"な"ブロック-11b)にて頒布予定の、GitをSteins;Gateを使って説明する薄い本です。

http://o2project.github.io/steins-git より見ることができます。

## ローカルで確認する

各種パッケージのインストールやローカルでの確認をおこないたい場合は、以下のコマンドを上から順に実行してください。

事前にNode.jsやrvmやrbenvを利用してRubyがインストールされている想定です。

```
git clone https://github.com/o2project/steins-git.git steins-git
cd steins-git
bundle install --path vendor/bundle
npm install
grunt
grunt server
```

## ライセンス

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a>

文章のライセンスは<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>となっております。

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
