作業内容を無かった事にする
==========================

岡部は、ダルにメールを送信した後、秋葉原 UPX でタイムマシン理論についての講義を受けましたが、ディスカッションで紅莉栖に完全に論破されてしまいました。

岡部にとって、論破されたという事は無くしたい事象ですが Git であればそれができます。

SourceTree でのやり方
---------------------

方法としては、作業内容を無かった事にするファイルを右クリックで選択し「リセット(Windows の場合は破棄)」を選択します。

![作業内容を無かった事にする](ch3/git-checkout-file/source-tree/before.jpg)

変更を本当に破棄していいか確認の画面が表示されるので「OK」を押します。

![作業内容を無かった事にするか確認がされる](ch3/git-checkout-file/source-tree/confirm.jpg)

これで、紅莉栖に論破されたという事が無くなりました。

![論破された事を無くした後](ch3/git-checkout-file/source-tree/after.jpg)

GitHub for Windows (Mac) でのやり方
-----------------------------------

作業内容を無かった事にするファイルを右クリックで選択し「Discard Changes」を選択します。

![作業内容を無かった事にする](ch3/git-checkout-file/github-app/git-checkout-before.jpg)

変更を本当に破棄していいか確認の画面が表示されるので「Discard Changes」を押します。

![作業内容を無かった事にするか確認画面が表示される](ch3/git-checkout-file/github-app/git-checkout-confirm.jpg)

これで、紅莉栖に論破されたという事が無くなりました。

![作業内容が無かった事にされた](ch3/git-checkout-file/github-app/git-checkout-after.jpg)
