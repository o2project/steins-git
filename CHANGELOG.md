### 2.2.1 (2015-06-28)


#### Bug Fixes

* **build:** HTML プレビュー版を見るための手順を追加 ([d802c221](https://github.com/o2project/steins-git/commit/d802c22148d6c34f6a00bf83f13e1e92640c799a))


#### Features

* **PDF:**
  * PDF版の出力をより本らしくした ([c08dcdb7](https://github.com/o2project/steins-git/commit/c08dcdb7db0ef80e55bc6129a7d9bed7e8b97941))
  * 配布用のPDF出力をできるようにした ([01d2b9c6](https://github.com/o2project/steins-git/commit/01d2b9c651a301f159356f45d9c757e2e78f9555))
* **epub:** EPUB版とmobi版へ変換する機能を削除 ([0ea8c491](https://github.com/o2project/steins-git/commit/0ea8c49121cddeabda21145d9a8a3fc2117dacb0))
* **pdf:** 総ページ数が64ページになるようにしつつ見た目を調整 ([19c93d89](https://github.com/o2project/steins-git/commit/19c93d893268f18cb72048b4d6f4a8fad833806e))


## 2.2.0 (2015-03-22)


#### Bug Fixes

* **Ch3:** 第三章の時系列がおかしくなっていたのを修正 ([0f02ab62](https://github.com/o2project/steins-git/commit/0f02ab6257c8e5f5eb15de7dc56e9522bd02f60c))
* **HTML:** 長い英語の文字列(URL)があったせいでウインドウ幅が狭いデバイスでは見にくくなっていたのを修正 ([73b52c09](https://github.com/o2project/steins-git/commit/73b52c096d197849512a55803d0cef567404f34e))
* **images:** HTMLプレビュー版で画像が小さく表示されていた問題を解決した ([a29e7f40](https://github.com/o2project/steins-git/commit/a29e7f40014c9a2a490bc396a37657635e16745e))


#### New and Edit

* **git-branch:** ブランチに関する説明が不適当だったので直した ([f2a92c4b](https://github.com/o2project/steins-git/commit/f2a92c4bd7943f510ebe9902206e3287e06b7f67))
* **git-diff:** `git diff` の方法を追加した ([e65f7e5b](https://github.com/o2project/steins-git/commit/e65f7e5b5420eb25ec09be2846c9f33efbe45eb2))


#### Features

* **PDF:**
  * PDF版の見た目を調整 ([2ada9861](https://github.com/o2project/steins-git/commit/2ada9861575326346e91a9ae8e75c56fde0214cf), [0ebb7da3](https://github.com/o2project/steins-git/commit/0ebb7da367be9b9ce1b748ff452248c8a28a8379))
  * PDFなどで使うフォントをVLゴシックから源真ゴシックに変更した ([743e2056](https://github.com/o2project/steins-git/commit/743e20569e8f3dd196330b03f7ea3b329937b1e3))


## 2.1.0 (2015-03-20)


#### Features

* **PDF:** PDF版の見た目を改善した ([3db43730](https://github.com/o2project/steins-git/commit/3db437302e56ce26a488691b983eaa2f61ec076e))


### 2.0.2 (2015-03-20)


#### Bug Fixes

* **All:** 文章でおかしいところを修正 ([ac51764d](https://github.com/o2project/steins-git/commit/ac51764dbd8364f75e79c491f898b79adaf4a9c3))
* **images:** PDFなどで挿絵が表示されていなかったのを修正 ([0f37f9d8](https://github.com/o2project/steins-git/commit/0f37f9d8a3ccf24f0cdb1595afd1b5c84f2d491e))


### 2.0.1 (2015-03-19)


#### New and Edit

* **All:** こと -> 事 ([f02f3df6](https://github.com/o2project/steins-git/commit/f02f3df6d8700e17ab8e6753f118c53106705401))
* **Ch0:** 「はじめに」の章を校正した ([3d331f24](https://github.com/o2project/steins-git/commit/3d331f2465c97743753ee43fa14f88031c095bf8))
* **Ch1:** 「改変管理のデュバス」の章を校正した ([6658a537](https://github.com/o2project/steins-git/commit/6658a537fd08e9adc0e84916bad403ecdebca1c2))
* **Ch2:** 「一問一答のコンクルージョン」の章を校正した ([998b9622](https://github.com/o2project/steins-git/commit/998b9622fc35973ef7f11fb49fac152139357e2e), [72de6df6](https://github.com/o2project/steins-git/commit/72de6df671f9601960e681bc6ad6fed0253cfd84), [7b5f3e48](https://github.com/o2project/steins-git/commit/7b5f3e48cf8548cfc42a12d2b7c0251df4ddf177))
* **Ch3:** 「率先躬行のサインポスト」の章を校正した ([06b8c1fe](https://github.com/o2project/steins-git/commit/06b8c1feb7cd507424f0180e59f6210a9703a302))
* **Ch4:** 「あとがき」を校正した ([75e61454](https://github.com/o2project/steins-git/commit/75e61454068e684b51f067e1662db449252720ed))


#### Features

* **All:** RedPenで文章の校正ができる環境を整えた ([c39dafa5](https://github.com/o2project/steins-git/commit/c39dafa5bdefc08e181b3fd52d220b956a9b8696))


## 2.0.0 (2015-03-16)


#### Bug Fixes

* **distributed-revision-control:** PDFに出力する際にエラーが出ていたのを修正 ([45252240](https://github.com/o2project/steins-git/commit/452522402429849a45a7c97892963c8957a9fb90))
* **travis:** Pull Requestされた際に`rake publish`が実行されていたのを修正 ([be46e33f](https://github.com/o2project/steins-git/commit/be46e33f5f3ee86b2b48da20d80ec803ef0f2770))


#### New and Edit

* **Ch*:** 各章のタイトルをSteins;Gateらしくした #107 ([74a09fef](https://github.com/o2project/steins-git/commit/74a09fef5261dfd91f99215b3a41c88705d4c32c))
* **Ch3:**
  * **git-settings:** * SourceTreeとGitHub Appのインストールと設定について書いた ([f8fd4bb5](https://github.com/o2project/steins-git/commit/f8fd4bb57f603b0e52acc334c362d541931a6c2d))
  * **git-settings:** * GitHub Appの設定方法について書いた ([721fbb69](https://github.com/o2project/steins-git/commit/721fbb69ec97c6b1f23cafaa4d0dd689d40b6fa7))
  * **git-settings:** * 「SourceTreeのやり方」と「GitHub for Windows(Mac)」でのやり方という見出しを追加 ([513e8498](https://github.com/o2project/steins-git/commit/513e84981d5cc5cf26e78cf222b890731c4a4350))
  * **git-branch:** git branchをGitHub Appでやる方法を書いた ([e2d0cc85](https://github.com/o2project/steins-git/commit/e2d0cc8540439b77be083977c0b17b13d530891b))
  * **git-checkout:** git checkout [branch名]をGitHub Appでやる方法を書いた ([d7eaf1ce](https://github.com/o2project/steins-git/commit/d7eaf1ce9fba5e621505af4dcf075ffb934ae45d))
  * **git-checkout-file:** git checkout .をGitHub Appでやる方法を書いた ([62db2370](https://github.com/o2project/steins-git/commit/62db2370be7cddd48bba5a27dbf3a71a0e3fe8e0))
  * **git-commit:** git commitをGitHub Appでやる方法を書いた ([7f67bc26](https://github.com/o2project/steins-git/commit/7f67bc2619114e5c8b0d9ade86ee377aeed18488))
  * **git-commit:** GitHub for Windows(Mac)でのコミット方法を書いた ([f1a38d91](https://github.com/o2project/steins-git/commit/f1a38d91b42710ef02b4c8e2f512803dda9efdbd))
  * **git-init:** git initをGitHub Appでやる方法を書いた ([b2f77d04](https://github.com/o2project/steins-git/commit/b2f77d04525308d6d992bfa899dee30666372d1c))
  * **git-sync:** GitHub Appの「Sync」ボタンの説明を追加した ([97054a1f](https://github.com/o2project/steins-git/commit/97054a1fc57e0696bc5563ef3aabd0724983602f))


#### Features

* **index:** Pocketボタンを追加 ([17b5f92e](https://github.com/o2project/steins-git/commit/17b5f92e4d091bf912e9b1980ec5d8131b6fa0b0), [2e79c003](https://github.com/o2project/steins-git/commit/2e79c003dbced3734acb31477c15ea84b4da51b9))
* **package.json:** npm run-scriptsを定義した ([ae3d0fe8](https://github.com/o2project/steins-git/commit/ae3d0fe88cc20982dd6302dc0d6e6ff9b62f5c98))
* **setup:** package.jsonで各種インストールをおこなうようにしたのでsetup.shを削除 ([641c0dfc](https://github.com/o2project/steins-git/commit/641c0dfc91b316d49ad9bfd43f7d86114e4f5e28))


### 1.3.1 (2015-03-16)


#### Bug Fixes

* **distributed-revision-control:** PDFに出力する際にエラーが出ていたのを修正 ([45252240](https://github.com/o2project/steins-git/commit/452522402429849a45a7c97892963c8957a9fb90))
* **travis:** Pull Requestされた際に`rake publish`が実行されていたのを修正 ([be46e33f](https://github.com/o2project/steins-git/commit/be46e33f5f3ee86b2b48da20d80ec803ef0f2770))


#### New and Edit

* **Ch*:** 各章のタイトルをSteins;Gateらしくした #107 ([74a09fef](https://github.com/o2project/steins-git/commit/74a09fef5261dfd91f99215b3a41c88705d4c32c))
* **Ch3:**
  * SourceTreeとGitHub Appのインストールと設定について書いた ([f8fd4bb5](https://github.com/o2project/steins-git/commit/f8fd4bb57f603b0e52acc334c362d541931a6c2d))
  * GitHub Appの設定方法について書いた ([721fbb69](https://github.com/o2project/steins-git/commit/721fbb69ec97c6b1f23cafaa4d0dd689d40b6fa7))
  * 「SourceTreeのやり方」と「GitHub for Windows(Mac)」でのやり方という見出しを追加 ([513e8498](https://github.com/o2project/steins-git/commit/513e84981d5cc5cf26e78cf222b890731c4a4350))
* **git-branch:** git branchをGitHub Appでやる方法を書いた ([e2d0cc85](https://github.com/o2project/steins-git/commit/e2d0cc8540439b77be083977c0b17b13d530891b))
* **git-checkout:** git checkout [branch名]をGitHub Appでやる方法を書いた ([d7eaf1ce](https://github.com/o2project/steins-git/commit/d7eaf1ce9fba5e621505af4dcf075ffb934ae45d))
* **git-checkout-file:** git checkout .をGitHub Appでやる方法を書いた ([62db2370](https://github.com/o2project/steins-git/commit/62db2370be7cddd48bba5a27dbf3a71a0e3fe8e0))
* **git-commit:**
  * git commitをGitHub Appでやる方法を書いた ([7f67bc26](https://github.com/o2project/steins-git/commit/7f67bc2619114e5c8b0d9ade86ee377aeed18488))
  * GitHub for Windows(Mac)でのコミット方法を書いた ([f1a38d91](https://github.com/o2project/steins-git/commit/f1a38d91b42710ef02b4c8e2f512803dda9efdbd))
* **git-init:** git initをGitHub Appでやる方法を書いた ([b2f77d04](https://github.com/o2project/steins-git/commit/b2f77d04525308d6d992bfa899dee30666372d1c))
* **git-sync:** GitHub Appの「Sync」ボタンの説明を追加した ([97054a1f](https://github.com/o2project/steins-git/commit/97054a1fc57e0696bc5563ef3aabd0724983602f))


#### Features

* **index:**
  * Pocketボタンを追加 ([17b5f92e](https://github.com/o2project/steins-git/commit/17b5f92e4d091bf912e9b1980ec5d8131b6fa0b0), [2e79c003](https://github.com/o2project/steins-git/commit/2e79c003dbced3734acb31477c15ea84b4da51b9)
* **package.json:** npm run-scriptsを定義した ([ae3d0fe8](https://github.com/o2project/steins-git/commit/ae3d0fe88cc20982dd6302dc0d6e6ff9b62f5c98))
* **setup:** package.jsonで各種インストールをおこなうようにしたのでsetup.shを削除 ([641c0dfc](https://github.com/o2project/steins-git/commit/641c0dfc91b316d49ad9bfd43f7d86114e4f5e28))


## 1.3.0 (2015-02-24)


#### Bug Fixes

* **Ch2:** Fix typo #117 ([7929de7d](https://github.com/o2project/steins-git/commit/7929de7d1f5872044c01feb7587a0744ac1a2744))
  * 「SVNはGitに比べて流行っていると言えます」 -> 「GitはSVNに比べて流行っていると言えます」


#### Features

* **All:**
  * 原稿の管理を別リポジトリにした ([5ce90670](https://github.com/o2project/steins-git/commit/5ce9067077a21e506c228caf2ea941ee689d56b9), [1d451142](https://github.com/o2project/steins-git/commit/1d4511426c850ced4777c8d1789aaf4a08c79f09), [eb564469](https://github.com/o2project/steins-git/commit/eb564469acc83f9704498f67b050ad43c5ca8dae))
  * PDF用のスタイル指定ファイルを別リポジトリにした ([6522d144](https://github.com/o2project/steins-git/commit/6522d144a3295d1c959c097597df970c6d860c69), [c4a3c848](https://github.com/o2project/steins-git/commit/c4a3c84891fb8f65ea00b8d6a5eb8a3dd3d067b6), [faacfdd5](https://github.com/o2project/steins-git/commit/faacfdd51ed7b6f8e06a5da8dab082765e7a16e9))
* **Ch2:** Gitの読み方について書いた fix #118 ([eac9d3eb](https://github.com/o2project/steins-git/commit/eac9d3eb58ff1a2254895bbd719cc57a8f9ebfee))


## 1.2.0 (2014-09-09)


#### Bug Fixes

* **All:** leveloffsetの設定を削除したのにともない、見出しのレベルを見直した ([bb6e7c76](https://github.com/o2project/steins-git/commit/bb6e7c768a16f38daeda9f09555018938ca4fbd7))
* **epub:** epubcheckでDuplicate resouceのwarningが出ていたのを修正した ([acb0c29d](https://github.com/o2project/steins-git/commit/acb0c29de4e2537f8dd5c51d792d0f42f66ddf1c))
* **index:**
  * PDFへ出力する際に、余計なものを出力しないようにした ([bf8bf37c](https://github.com/o2project/steins-git/commit/bf8bf37c3d70fea5f3ba013d907d50e8fc99eba8))
  * epubcheckerでエラーが出たため、画像のパス指定から「./」を削除した ([85ab0eb8](https://github.com/o2project/steins-git/commit/85ab0eb8bfefcf14615f46ecfb992460f4825501))
* **package.json:** パッケージ名がInvalidになってしまい、npm update時にエラーになっていたのを修正 ([e1962954](https://github.com/o2project/steins-git/commit/e1962954890d6e45d692ac4c6c3cf9e012a74b97))
* **trend:** "の"が一つ多かったのを修正 fix #109 ([da1a8426](https://github.com/o2project/steins-git/commit/da1a8426b5f62dfd40ed349895d434d29e29cc4c))


#### Features

* **Rakefile:** mobi形式での出力に対応した ([97642101](https://github.com/o2project/steins-git/commit/97642101985de7dadaca9675d16a028f0fbf3d34))


## 1.1.0 (2014-08-16)


#### Bug Fixes

* **.gitignore:** 画像を置く場所を変更したのに伴って、ignoreするパスも変更した ([f2bfd723](https://github.com/o2project/steins-git/commit/f2bfd72326a1737f9b45c26d72e8a728234b5a8e))
* **All:**
  * inline code literalの破壊的変更に追従した ([45c48c83](https://github.com/o2project/steins-git/commit/45c48c83dfbd298174ee09f9d06ad73d307e902e))
  * PDF出力でエラーが出てしまっていたのでURLをエスケープするようにした ([930986cc](https://github.com/o2project/steins-git/commit/930986cc6488625d496c36e1421e90bb3b972855))
* **images:** 画像を置く場所が、今までのところだとEPUB出力時に都合が悪かったので、./images以下にまとめて置くようにした ([9efce50a](https://github.com/o2project/steins-git/commit/9efce50af8c04a1d1cdad800bd893b13f62b9457))


#### Features

* **Gemfile:** EPUB形式で出力するためにasciidoctor-epub3を追加 ([51813977](https://github.com/o2project/steins-git/commit/518139773b3c5317249e8fc01c58e5058c808ccf))
* **Rakefile:** EPUB出力に対応した ([01e79c41](https://github.com/o2project/steins-git/commit/01e79c41044601b9a58edbc021bcb47293255d86))


### 1.0.2 (2014-08-05)


#### New and Edit

* **Ch2:** ネットワーク接続がいらないという節の文章の表現を変更 ([f0c4fcac](https://github.com/o2project/steins-git/commit/f0c4fcacd8a76e53ceb28d1530aef31fe2a82d99))


### 1.0.1 (2014-08-05)


#### Features

* **Ch0:** Gitのロゴを追加 ([16ba1356](https://github.com/o2project/steins-git/commit/16ba1356e16a860cc55dbd2c1f5e998d321720e1))


## 1.0.0 (2014-08-04)


#### Bug Fixes

* **All:**
  * PDF版にのみいい感じに折り返しを入れた ([62addbbb](https://github.com/o2project/steins-git/commit/62addbbbb233160e5aa4473080dfbfae1cc5f130))
  * 書籍サイズ変更にともない、画像がはみ出していた部分があったのを修正 ([86cbcd06](https://github.com/o2project/steins-git/commit/86cbcd063231412b059b00fa30f1ec6daac090a9))
  * s/bitbacket/bitbucket/g ([6212589c](https://github.com/o2project/steins-git/commit/6212589c2f06ed28b45ebe10e26c7245ad5ffe8a))
  * s/バグドラッキング/バグトラッキング/g #98 ([cfad3739](https://github.com/o2project/steins-git/commit/cfad37390c28b220eeaa529bf04d061f85c83c66))
  * s/切り替え/切りかえ/g #99 ([263c0cda](https://github.com/o2project/steins-git/commit/263c0cdac50f24627d157e3f15d78737ffc500f6))
  * 各種変更をほどこした ([fb8aec93](https://github.com/o2project/steins-git/commit/fb8aec934ef64df84686a4a72f51e71941512239))
  * 説明が足りていない部分が多々あったので説明を追加した ([5f3089c6](https://github.com/o2project/steins-git/commit/5f3089c6b2cebf4e87b50e995c5f5abd69658b9e))
  * かぎかっこの前の「、」を全て消した ([18a06fb1](https://github.com/o2project/steins-git/commit/18a06fb16b70e57386217399f17b2a92acb3673d))
  * 脚注の書き方で、footnote:[]という記法を使ったほうが良い箇所においてはfootnote:[]を使うようにした ([dcb830c1](https://github.com/o2project/steins-git/commit/dcb830c158362fd28f82104524f5246723243e0a))
* **Ch0:** GiantRobotさんのリンク先を変更 ([59296512](https://github.com/o2project/steins-git/commit/592965126941b0af675cd92880ae937ca24effb6))
* **Ch4:** fruitsnoodleとGiantRobotさんのリンク先変更 ([9350abfb](https://github.com/o2project/steins-git/commit/9350abfbc9588a697eea865d24ca903c336765c8))
* **fo-pdf:**
  * captionの文字サイズを0ptにすることで擬似的に表示させないようにした ([85c7d8d8](https://github.com/o2project/steins-git/commit/85c7d8d8696c4c240bd9e20ad0dc5c66b05e6a91))
  * 目次部分の文字色を黒くした ([4511d133](https://github.com/o2project/steins-git/commit/4511d13330172a5e945ff5e7f11206acdb8ce4e5))
* **git-checkout:** 「。」が1つ多かったのを修正 #96 ([425bd9d9](https://github.com/o2project/steins-git/commit/425bd9d9c9bdebfbf344383b1ff9f3ee56849449))
* **git-checkout-file:** Windowsの場合は「リセット」という単語は「破棄」になっていることを書いた #94 ([8d51c9f0](https://github.com/o2project/steins-git/commit/8d51c9f0a16783abf0361d2a1b429be61d6f25a0))
* **git-clone:** リモートリポジトリに関する説明がなかったので追加した #89 ([22a23bcf](https://github.com/o2project/steins-git/commit/22a23bcffded470d5a94a1c0c809064389b4eb3a))
* **git-clone.png:** なぜかバージョン管理されていなかったので追加 ([d0a8b1b9](https://github.com/o2project/steins-git/commit/d0a8b1b9c3fe192b52cfebb4d059224a28ba90a7))
* **git-init:** リポジトリを作る際の画像でユーザー名をrintarou.oにした ([b972c7f0](https://github.com/o2project/steins-git/commit/b972c7f0a5f8b5403a8dc13c63d532dddab8692e))
* **git-start:** 世界線とはの説明がなかったので「作業履歴が積み重なった世界線」という形で説明した #86 ([3462b8e5](https://github.com/o2project/steins-git/commit/3462b8e5077340821fcaf94b7907c7c7a7658e4f))
* **imgs:** 画像をグレースケール化した #83 ([2f4957a1](https://github.com/o2project/steins-git/commit/2f4957a1f4fa02bdf4d77959ee4808bdce771895))
* **index:** [WIP]を外した ([a639e84d](https://github.com/o2project/steins-git/commit/a639e84d15e827a7f33cd5017e834d9a7648ef3e))
* **package.json:** 名前が正式名称になっていなかったのと、ライセンスが古いままだったのを修正 ([d348a131](https://github.com/o2project/steins-git/commit/d348a131ae003c1fd717491a34477dc679e92be2))


#### New and Edit

* **Ch1:** Gitについて勘違いしていた記述があったので修正。またコマンドラインベースで説明していた名残を消した #84 ([1d887fcb](https://github.com/o2project/steins-git/commit/1d887fcbdfd50ff42369e4fa8b0145d95d97cd45))
* **Ch2:** なぜGitを使うのかの章を全面的に書きなおした ([b4c1d69d](https://github.com/o2project/steins-git/commit/b4c1d69d093fa74cf6967c36ca23cdc2eadb4ae1))
* **git-checkout-file:** 作業内容を無かったことにするの節を追加 ([2194ac01](https://github.com/o2project/steins-git/commit/2194ac01f159a180cd4a2f5714bcda6ae9d3dedf))
* **git-commit:** HEADについて「ダイバージェンスメーター」のようなものという説明を追加した ([815e2523](https://github.com/o2project/steins-git/commit/815e2523c64d1d7a68b276bfabc5073da10e1671))
* **not-need-network-connection:** ネットワーク接続していない時の作業内容は、ネットワーク接続した後にネットワーク上のリポジトリに送ることができる旨を描いた #85 ([561d4ac9](https://github.com/o2project/steins-git/commit/561d4ac9203dba71f9e79973f0cc2c541bd2702c))


#### Features

* **HTML:** HTML版の見た目を変えるためdocinfo.htmlを用意し、CSSも追加した ([14ee7d35](https://github.com/o2project/steins-git/commit/14ee7d35931c3bf3c1692f11f645c84f200531bb))
* **PDF:** PDFの用紙サイズをB5にした ([6bb49c76](https://github.com/o2project/steins-git/commit/6bb49c7633d31985fa645c6cbfa8a604eda4efac))
* **img-gray-scale:** 画像をグレースケール変換するシェルスクリプトを追加 ([11703b7f](https://github.com/o2project/steins-git/commit/11703b7f06463316668c326a424d438da23c2443))
* **img-png-to-jpg:** 画像をJPEGに変換するスクリプトを作った(作りは雑) ([5dc1ccdf](https://github.com/o2project/steins-git/commit/5dc1ccdf53272cf8369b1fc3651b162336649b87))
* **imgs:** 画像をグレースケール化した ([142dac4a](https://github.com/o2project/steins-git/commit/142dac4a709713789f931d3c735a59719bab9674))
* **pdf:** PDF出力時に文字色などを黒にするためfopubからdocbook-xslをコピーしてきた ([0dd14fed](https://github.com/o2project/steins-git/commit/0dd14fedc8a12d316de79ac7b35b77051534e1b5))


### 0.2.1 (2014-08-01)


#### Bug Fixes

* **All:**
  * s/無い/ない/g ([0dfbdd01](https://github.com/o2project/steins-git/commit/0dfbdd01e18d1aadb47dd1b85faf73974b3b291a))
  * s/時/とき/g ([bf5dd423](https://github.com/o2project/steins-git/commit/bf5dd42367424edbc6599efe4494c7987a635f17))
  * s/事/こと/g ([14962e79](https://github.com/o2project/steins-git/commit/14962e793a9933949eab2e6c401dd403450e37bf))


#### New and Edit

* **All:** ラボメンの表記を統一 #75 ([22d09a03](https://github.com/o2project/steins-git/commit/22d09a03c775cca8ce0402f8a62078b09ec4f601))
* **Ch0:** 謝辞に感謝したい人を追加した ([c8b68881](https://github.com/o2project/steins-git/commit/c8b688815feb4a40b4fd955d5d6aeef00a383f1a))


## 0.2.0 (2014-08-01)


#### Bug Fixes

* **index.adoc:** PDFで章番号がずれてしまっていたので、いっそ出力しないことにした ([23970cb9](https://github.com/o2project/steins-git/commit/23970cb9db68f648b5f74e947951dbaf0c74d1c9))


#### New and Edit

* **Ch0:** はじめにを執筆した ([7791a00c](https://github.com/o2project/steins-git/commit/7791a00c5ecbbf0d1f54d9309533ae2500acd6a1))
* **Ch3:**
  * Gitのコマンドを説明する順序を変更した ([5b83289d](https://github.com/o2project/steins-git/commit/5b83289d8dce84bb532a2b49586f58d7c5463cdc))
  * 説明しないものを省いた ([1dec8710](https://github.com/o2project/steins-git/commit/1dec8710b9107bb7edfe5c9f22436a1638282e88))
  * SourceTreeを使った説明に切りかえたことにより、説明しなくなったgit addやgit log、git rmの節を削除 ([5b38932c](https://github.com/o2project/steins-git/commit/5b38932c034f43a50e80a59a1847f07735b84427))
  * リモートリポジトリに関するコマンドの説明を書き始めた ([a20c88aa](https://github.com/o2project/steins-git/commit/a20c88aaf11c95051b50c8001a1dc59d54361fed))
* **Ch4:** あとがきのアウトラインを書いた ([612b60e7](https://github.com/o2project/steins-git/commit/612b60e7c832909b3c06b2534b70860c4acd12e6))
* **Ch4:** あとがきを執筆した ([bce7edd0](https://github.com/o2project/steins-git/commit/bce7edd074eb860df904e96776cb833e456bad25))
* **git-branch:** git branchについての説明を書きかえた ([a165b1d2](https://github.com/o2project/steins-git/commit/a165b1d2f833378c4b4a2a6bb3c7a971112c539c))
* **git-checkout:** git checkoutの説明を書きかえた ([952846ae](https://github.com/o2project/steins-git/commit/952846ae6d48be48ea51414071d77f21ae215800))
* **git-clone:**
  * git cloneの説明を書き換えた ([ecb49790](https://github.com/o2project/steins-git/commit/ecb49790833c5d60ff01c87311e2ed70789719d2))
  * git cloneをSourceTreeを使って説明する形に書き換えた ([e6032cfa](https://github.com/o2project/steins-git/commit/e6032cfac01e945a1afd9a4fdbdf2dce5c33cfe5))
  * git cloneについて書いた ([628009cb](https://github.com/o2project/steins-git/commit/628009cb704486516c5f9d22f580ef6ca2925717))
* **git-commit:** git commitに関する説明を書き直した ([82e7239f](https://github.com/o2project/steins-git/commit/82e7239f2ba658282bd8976fa9a6fddc77d8e225))
* **git-fetch:**
  * git fetchは説明しない事にしたので削除 ([a6c31dc3](https://github.com/o2project/steins-git/commit/a6c31dc3c886c6a5db843d07c7810da2a4c0f02a))
  * git fetchについて書いた ([5c8cb22d](https://github.com/o2project/steins-git/commit/5c8cb22d3922904c37b916a5f85cd813d9a0650a))
* **git-init:**
  * 文章の表現を変更 ([1196d5e0](https://github.com/o2project/steins-git/commit/1196d5e0e2b80425780f7984f04218233cfb9d8a))
  * git initについてSourceTreeを使った形に書きかえた ([ee8b0d08](https://github.com/o2project/steins-git/commit/ee8b0d08c99fffd1c3b192092a42f86769e78a91))
* **git-pull:** git pullについて書いた ([c2f657a7](https://github.com/o2project/steins-git/commit/c2f657a7c3cd2dbe1c41a09c699e3aa0bd8643e3))
* **git-push:** git pushについて書いた ([c2f1e901](https://github.com/o2project/steins-git/commit/c2f1e9019d3dfd210f5efabc84585146de564642))
* **git-remote:**
  * 一人でGitを使い始めて、後から共同作業するという場面があまりないので、git remoteに関する説明は削除 ([8d64622c](https://github.com/o2project/steins-git/commit/8d64622c19e75e9065e293ec02224b494b6834d9))
  * git remoteについて書いた ([152b1569](https://github.com/o2project/steins-git/commit/152b15695439795e429a82dda2043a38d8ee9918))
* **git-start:** SourceTreeのインストールと設定方法を紹介する章を追加 ([a577779c](https://github.com/o2project/steins-git/commit/a577779c83415f20bc62cce8dfbc6e3c7dd6fdb7))
* **git-status:** git statusに関する説明を削除 ([41145404](https://github.com/o2project/steins-git/commit/4114540440d788ffc0bf8b61fa4efceca05355c0))


### 0.1.3 (2014-07-27)


#### Features

* **imgs:** 電子書籍版にのみ各章の最初に載せるラボメンの画像を追加(実際の画像はignoreする) ([368e5446](https://github.com/o2project/steins-git/commit/368e54462eb108e2dce940282f3d92ca8e95afe0))


### 0.1.2 (2014-07-26)

### 0.1.1 (2014-07-26)

#### Bug Fixes

* **easy-to-start:** 「SVNによるバージョン管理は敷居が高い」という書き方ではなく、「手順が増える」という書き方に修正 ([326caa9b](https://github.com/o2project/steins-git/commit/326caa9bbc8585912dbe2ffc2f1c6bae2281aaeb))


#### New and Edit

* **Ch4:** 第四章をあとがきという形に変更した ([c303401d](https://github.com/o2project/steins-git/commit/c303401d00589f546f34100c7dcd812468669b74))


#### Features

* **CHANGELOG.md:** 更新履歴ファイルを追加 ([d4a0c38c](https://github.com/o2project/steins-git/commit/d4a0c38cde37c1213dc016dcc0f261f887c6eb2c))


## 0.1.0 (2014-07-23)


#### Bug Fixes

* **README.md:**
  * http://www.nitroplus.co.jp/license/ に従うため、一旦プレビューサイトへのリンクを削除 ([0e1de234](https://github.com/o2project/steins-git/commit/0e1de23477ea76419910e9f253d2851b7d60ccf3))
  * Contributeの指針を示したファイルのリンク先が間違っていたのを修正 ([59cf1a9a](https://github.com/o2project/steins-git/commit/59cf1a9aec8dab08672965d343a3d73369061041))
* **easiest-to-version-control:** Steins;Gateのゲーム画面に著作権表示を追加した ([a2a1dee1](https://github.com/o2project/steins-git/commit/a2a1dee172e9e1815718d585af1b4097123c8c51))
* **git-branch.png:** 図の作業履歴がフェイリスのDメールうんぬんの話が抜けていたのを修正 ([16a62433](https://github.com/o2project/steins-git/commit/16a6243316e8584201d6d04c0b406b5e7c1a6506))
* **images:** git branchやgit checkoutを説明する画像をSteins;Gateのストーリとの辻褄を合わせた ([4be0b4e2](https://github.com/o2project/steins-git/commit/4be0b4e25f35cb94a9d17cddcf88486ee20c7a30))
* **index.adoc:** ネタバレが含まれていることを明記した ([afad777a](https://github.com/o2project/steins-git/commit/afad777a6e1927c03387202f7cf9a07c556d728f))
* **readme:** SVNを説明する部分はいらなかったので削除した ([7283b2e3](https://github.com/o2project/steins-git/commit/7283b2e383b155174988206513dd5043a7510526))


#### New and Edit

* **Ch2_WhyGit:** 第二章執筆 ([0d7a84da](https://github.com/o2project/steins-git/commit/0d7a84daa34f7c781fbd087c5ccadee1f94457e0))
* **easy-to-start:** SVNに比べGitは手軽に始められるということを書いた ([1990a6e2](https://github.com/o2project/steins-git/commit/1990a6e284145c77467fc2df6005d9c15c6b5fdd))
* **git-add:**
  * git addについて書いた fix #48 ([a0440d12](https://github.com/o2project/steins-git/commit/a0440d1223809003924f93e7331219e1f222cc72))
  * git addについて書いた ([539af8d5](https://github.com/o2project/steins-git/commit/539af8d537be7c6aae53d39d70b919ee4976bd14))
* **git-branch:** git branchについて書いた ([04787c2f](https://github.com/o2project/steins-git/commit/04787c2f019c19ef9dcd7051d6b8225ac18afebd))
* **git-checkout:** git checkoutの節を執筆した ([38a88ac9](https://github.com/o2project/steins-git/commit/38a88ac91892ddf4ea9609f340bf54aebe0bdf5a))
* **git-commit:**
  * git commitについて書いた fix #49 ([08873fee](https://github.com/o2project/steins-git/commit/08873fee48fd08770844f6da7e153e42767e0a18))
  * git commitについて書いた ([0d225a71](https://github.com/o2project/steins-git/commit/0d225a714a8d37ed0e18f1dc84e95fafcfbb4521))
* **git-init:**
  * git initの節を執筆 fix #44 ([42acbf87](https://github.com/o2project/steins-git/commit/42acbf8703361aabd95298d0a5d30086acdee55f))
  * git initについて書いた ([cbc212d1](https://github.com/o2project/steins-git/commit/cbc212d1c5c1cdaac0a30aac8cf016fb5a1efe7b))
* **git-log:**
  * 作業履歴を見る方法について書いた fix #56 ([e5ebab48](https://github.com/o2project/steins-git/commit/e5ebab489ae4cd5b1eaa71a1cf7b60c0dcdac4b8))
  * 作業履歴を見る方法について書いた ([0f107ee8](https://github.com/o2project/steins-git/commit/0f107ee8a8017e7b27d7e8f6ab96c5dce2b0e044))
* **git-merge:**
  * [Ch3-*] git merge fix #38 ([a3568da1](https://github.com/o2project/steins-git/commit/a3568da1ad3c2978166f5c10acdc11a682d9578a))
  * git mergeについて書いた ([1840e4e8](https://github.com/o2project/steins-git/commit/1840e4e8389528746a101236402e9ac70cf44e92))
  * git mergeについて書き始めた ([ba53cb26](https://github.com/o2project/steins-git/commit/ba53cb26e7e182ba68d52459b5778111e3685815))
* **git-rebase:**
  * git rebaseによりコミットメッセージを書き換える方法を書いた ([f2bea43e](https://github.com/o2project/steins-git/commit/f2bea43ebadb11cf68b7c66a356c809eb78489b2))
  * git rebaseの章のうち、複数の作業履歴を一つにまとめるという節を書いた ([fb4550e1](https://github.com/o2project/steins-git/commit/fb4550e153fc7cb52993c88e3fa7886652f9676b))
* **git-reset:**
  * git resetの節を執筆 fix #54 ([1727dbc0](https://github.com/o2project/steins-git/commit/1727dbc01457ffac78eeea55fdd9afbfff13422f))
  * 作業内容のリセット方法について書いた ([c1bce5b5](https://github.com/o2project/steins-git/commit/c1bce5b5a520e97547198f2844763438553477df))
* **git-rm:** ファイルを削除する方法について書いた fix #58 ([290e7b43](https://github.com/o2project/steins-git/commit/290e7b432c36ca5b15d08d4cae8870cddb1fef5f))
* **git-status:** git statusについて書いた ([599a230a](https://github.com/o2project/steins-git/commit/599a230a1b7c9e3c7ff33f5a53e9eabe7e0f1563))
* **not-need-network-connection:** Gitはネットワーク接続がほとんどいらない件について書いた ([2bd7d15a](https://github.com/o2project/steins-git/commit/2bd7d15ad6a9575ff39d0f2a535fd00952929429))
* **readme:**
  * 新しく書いた章を追加した ([c953a570](https://github.com/o2project/steins-git/commit/c953a57031a6b7943b473ca0eb884fccca3cda79))
  * 第二章のはじめの章の文章を変更した ([f4efb94f](https://github.com/o2project/steins-git/commit/f4efb94f6494f1236f578bd32055c0a6d1dadd76))
* **try-out-a-local-repository:** Gitはローカルリポジトリでいろいろと試せるということを書いた ([fd752b85](https://github.com/o2project/steins-git/commit/fd752b8587fdf272d0386021c04351dc40a07172))


#### Features

* **git-branch.png:** git branchについて説明する図を追加 ([91765d55](https://github.com/o2project/steins-git/commit/91765d556b1ead32db1643727589400f4f8895bd))
* **git-checkout-moved-brnach.png:** git checkoutでブランチ移動する時について説明する図を追加 ([ac7c89cc](https://github.com/o2project/steins-git/commit/ac7c89cc99163b9dbc17c39e5add9462bdf66d87))
* **mplus-1c-regular.ttf:** Steins;Gateの画面への著作権表示用フォントを追加 ([917585f0](https://github.com/o2project/steins-git/commit/917585f0c98b510749e722052eb9b96287dc5509))
* **nitro:** Steins;Gateのゲーム画面をリサイズ+著作権表示を追加するスクリプトを追加 ([bc781881](https://github.com/o2project/steins-git/commit/bc78188125f168bb4e51aa08c8ec1d2bbab42ce3))
* **pdf:** PDFで出力できるようにした ([b6c117b4](https://github.com/o2project/steins-git/commit/b6c117b42d41230b5abced70a76b4ff708a7cd77))
* **setup.sh:** 初期設定用の実行ファイルを追加 ([1a084e32](https://github.com/o2project/steins-git/commit/1a084e328cb3646f560e293245f4ff3a126923e3))
