# あとがき

## GitHub と Bitbucket について

「リモートリポジトリ」というキーワードが書籍中に何度か出てきました。

このリモートリポジトリですが、例えばラボメンと共同で何か作業する(タイムリープマシンを作るなど)ときは必須になってきます。ですが、サーバーを用意して Git を設定してという手順をするのは面倒です。

なので、Git の仕組みを使って、自分達が作ったプログラムコードなどを共有できるサービスがいくつか出てきました。

その中の一つがこれから紹介する GitHub[1] と Bitbucket[2] になります。　

ちなみに、この書籍も GitHub で管理されています。[3]

## GitHub と Bitbucket 共通の機能

GitHub と Bitbucket どちらにも Issues・Fork・Pull Requests という機能があります。それらについて説明します。

### Issues

バグやマイルストーン(目標)などを管理するものです。バグトラッキングシステムともいいます。例えるならば、鈴羽がタイムマシンが壊れているのに気づき、その事を Issues に追加し、ダルが対応するという感じです。

例えば、リポジトリにあるコードが何か予期しない動きをしたときなどにバグ報告をしたり、新しい機能を追加するときにマイルストーンで管理をする事ができます。

### Fork

GitHub や Bitbucket 上で公開されているリポジトリを、自分のリポジトリとしてコピーする機能です。全ての公開されているリポジトリは Fork をする事ができます。

リポジトリに対して何か変更を加える場合、例えば機能を追加したい、説明書に誤字を見つけたので修正したい、といったときに Fork をして自分の手元で変更を加えます。

### Pull Requests

Fork した後にリポジトリに対して変更を加えたところを、Fork 元のリポジトリに取り込んでもらうように希望する機能です。

Git は自分が管理していないリポジトリに何か変更を加えたい場合、変更できる権利が必要になってきます。しかし、やたらと変更できる権利を与えてしまうと、変な変更が加えられてしまう可能性があります。

Pull Requests は、元のリポジトリを変更する権利を与えないかわりに、Fork 元のリポジトリに自分が変更を加えたものを取り込んでもらうように希望する機能です。

この機能があるので、変更を取り込む作業を Fork 元のリポジトリを変更できる権利を持っている人達に委ねる事ができます。

利点としては、Fork 元のリポジトリの管理者は変更できる権利を与えなくて済むのと Fork 先のリポジトリで変更した点を取り込む前に確認できるので、リポジトリに変な変更が加えられてしまうのを防げるという点にあります。

## 参考にした資料

本書を書くにあたり参考にした資料の一覧となります。本書を読み、より Git について知りたいと感じたときには、以下のサイトや書籍を見てみるといいでしょう。

### Webサイト

-   Gitチュートリアルとトレーニング| Atlassian[4]

-   イラストでわかる！git入門の入門 : アシアルブログ[5]

-   Git - Book[6]

-   初心者でも分かる！git rebaseの使い方を解説します | 株式会社LIG[7]

### 書籍

-   シュタインズ・ゲート公式資料集[8]

-   入門git[9]

-   開発効率をUPする Git逆引き入門[10]

-   GitHub実践入門 Pull Requestによる開発の変革[11]

## 作者

-   執筆: kubosho\_[12]

-   アシスタント: fruitsnoodle[13]

-   表紙・各章のイラスト: GiantRobot[14]

-   発行所: 日光企画[15]

## 使用しているフォント

-   あおぞら明朝 (本文など)[16]

-   源真ゴシック (見出し部分など)[17]

## Git のロゴについて

-   Git Logo by Jason Long is licensed under the Creative Commons Attribution 3.0 Unported License.

[1] https://github.com/

[2] https://www.atlassian.com/ja/software/bitbucket/overview

[3] <https://github.com/o2project/steins-git>

[4] <https://www.atlassian.com/ja/git/tutorial>

[5] <http://blog.asial.co.jp/894>

[6] <http://git-scm.com/book/ja/>

[7] <http://liginc.co.jp/web/tool/79390>

[8] <http://www.amazon.co.jp/dp/4047263745>

[9] <http://www.amazon.co.jp/dp/427406767X>

[10] <http://www.amazon.co.jp/dp/4863541465>

[11] <http://www.amazon.co.jp/dp/477416366X>

[12] <https://github.com/kubosho>

[13] <https://github.com/fruitsnoodle>

[14] pixivID: 1223059

[15] <http://www.nikko-pc.com/>

[16] <http://blueskis.wktk.so/AozoraMincho/>

[17] <http://jikasei.me/font/genshin/>
