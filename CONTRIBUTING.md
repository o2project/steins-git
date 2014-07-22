Steins;Gitにようこそ！この文章を読んでくださっているということは、Steins;Gitに対し、なんらかの貢献をしたいと思い、読んでくださっていることだろうと思います。ここでは、貢献のためのヒントを書いていこうと思います。

## Steins;Gitに主に関わっている人

- @kubosho_
  - 執筆者
- @fruitsnoodle
  - Git初心者の立場から本をレビューとイラストの発注など

## Steins;Gitの様々なやりとりについて

何か決めないといけないだったり、執筆の際は、[Issues](https://github.com/o2project/steins-git/issues?state=open)からIssueを立ててやりとりをします。

気軽に何か言いたい場合は、[Gitter](https://gitter.im/o2project/steins-git)というチャットサービスを使います。

やりとりにURLを持たせたい(=リポジトリ内外からリンクする可能性がある)ものはIssues、それ以外はGitterという使い分けにするつもりです。

## 新たな章や節を追加する際のガイドライン

1. まずIssueを立てます。タイトルは「[ChX-x] 章や節のタイトル」という形式にします。(例: [Ch1-3] 集中型バージョン管理)
  - 必ず「writing」というラベルをつけます。
2. 新たにbranchを作ります。branch名は「feature/id/:issue-id」という形式にします。
3. 執筆します。
4. Pull Requestをmasterに対して出します。出来るかぎりレビューしてからマージという形をとります。

## 誤字脱字を直す際のガイドライン

- 誤字脱字を直す際は、Issueを立てていただれば、こちら側で直します。
- Pull Requestを出していただける場合は、出来るだけbranchを別で作って、そちらで直していただけると幸いです。あとは、特に問いません。ありがとうございます！

## ディレクトリの命名規則について

- Ch*/
  - 各章と節を書いたAsciidoc形式のファイルが格納されています。各ディレクトリには必ずreadme.adocがあり、そこで各節をincludeしています。
- Ch*/img
  - 各章や節で使う画像が格納されています。

## ローカルでプレビューしたい場合について

[README.md](https://github.com/o2project/steins-git/blob/master/README.md)をご覧ください。

## コミットメッセージについて

[azu/release-changelog](https://github.com/azu/release-changelog)により、[CHANGELOG.md](CHANGELOG.md)を自動生成するため、以下のルールに沿った形で書くことを推奨します。

[conventional-changelog/CONVENTIONS.md at master · ajoslin/conventional-changelog](https://github.com/ajoslin/conventional-changelog/blob/master/CONVENTIONS.md)

[azu/promises-book](https://github.com/azu/promises-book)と同じく、`feat`, `write`, `fix`, `docs`というのをコミットメッセージ内に含めることにより、CHANGELOGの対象になります。

とはいえ、分からない場合はとりあえず`chore`を使ったり、他のコミットメッセージを使っても大丈夫です。