リモートリポジトリの変更内容を自分のPC上のリポジトリに取り込む
--------------------------------------------------------------

他の人がおこなった変更をリモートリポジトリから取得し、自分のPC上のリポジトリに取り込むコマンドとなります。

リモートリポジトリでは、岡部以外にもラボメンが作業しています。この例だと、紅莉栖が、岡部の様子がおかしいのでタイムリープしてきたかどうか聞いていたり、マイフォークが欲しいということを言ったということを記録していたりします。

その場合、自分のPC上のリポジトリ(鈴羽を引き止めた世界線)に比べ、リモートリポジトリ(origin/鈴羽を引き止めた世界線)が2つ進んでいます。

![紅莉栖が作業している](images/ch3/git-pull-before.jpg)

ここで、画面上部の「プル」を押します。たいていの場合は表示された画面内の「OK」を押せば大丈夫です。

![pullしてくるブランチを選んでいる状態](images/ch3/git-pull-select.jpg)

「OK」を押すことにより、リモートリポジトリと自分のPC上の作業履歴が同期されます。

![自分のPC上のリポジトリとリモートリポジトリの同期をとった](images/ch3/git-pull-after.jpg)