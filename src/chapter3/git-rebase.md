## 作業内容を改変する

作業内容を改変します。例えるならば、タイムリープマシンを使って過去の作業をやり直す感じです。

電話レンジ(仮)を改造してタイムリープマシンができた後、萌郁やラウンダー達の襲撃もしくは他の要因により、まゆりが何度も死んでしまった状態の最新の作業内容ですが「ラウンダー追ってきて、まゆりが刺されて死んだ」となっています。

![まゆりが何度も死んでしまったときの作業内容](/images/ch3/git-rebase/source-tree/message-edit-before.jpg)

## コミットメッセージを修正する

まず始めに、コミットメッセージを修正してみます。

先ほどの最新の作業内容を記録したコミットが「ラウンダー追ってきて」と、間に「が」が足りないメッセージになっています。これを修正するため、直したい対象の一つ前の作業内容を右クリックで選択し「"コミット番号" の子を対話形式でリベース」を選びます。

![対話形式でリベースを選択している状態](/images/ch3/git-rebase/source-tree/message-edit-select.jpg)

すると、対象となる作業内容が表示されるので、コミットメッセージを直したい作業内容を選び、画面下部の「Edit message」を押します。すると、コミットメッセージを編集する画面が表示されます。

![コミットメッセージを編集している状態](/images/ch3/git-rebase/source-tree/message-edit-now.jpg)

任意のコミットメッセージを書いた後「OK」ボタンを押すとコミットメッセージが修正されます。

![コミットメッセージを編集し終えた状態](/images/ch3/git-rebase/source-tree/message-edit-after.jpg)

## 複数の作業内容を一つにまとめる

次に、まゆりが死んだと書かれた複数の履歴を一つにまとめます。直したい対象の一つ前の作業内容を右クリックで選択し「"コミット番号" の子を対話形式でリベース」を選びます。

![git rebase squash するべく親となるコミットを選択している状態](/images/ch3/git-rebase/source-tree/squash-right-click.jpg)

今回は四つの作業内容を対象としました。ここから作業内容をまとめるには「Squash with previous」を三回押します。「まとめる作業内容の数 - 一回 Squash with previous を押す」と覚えるといいかもしれません。

![git rebase squash しようとしている状態](/images/ch3/git-rebase/source-tree/squash-before.jpg)

その後、まとめた作業内容のコミットメッセージを編集するために「Edit message」を押します。

![コミットをまとめた後コミットメッセージを編集している状態](/images/ch3/git-rebase/source-tree/squash-message-edit.jpg)

これで、まゆりが死んだと書かれた複数の履歴がまとめられました。

![git rebase squashした状態](/images/ch3/git-rebase/source-tree/squash-after.jpg)
