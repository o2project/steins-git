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

