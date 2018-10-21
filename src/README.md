# はじめに

本書は「Git の使い方を Steins;Gate の世界観を通して説明する」ことを目的に執筆しました。
また本書は「Steins;Git」「Steins;Git 0」を元に内容を再構成したものです。

想定の対象読者は「Steins;Gate と Steins;Gate 0 のゲームで全てのエンディングを見た、もしくはアニメを全話見た」人です。
対象読者が「Git に触れた事が無い、もしくは触り始めたばかりという人が、使い方を知るきっかけになる」事を本書の目標としています。

構成上、次の 3 作品において核心に触れるネタバレが含まれているため、読む際はご注意ください。

- Steins;Gate
- Steins;Gate 負荷領域のデジャブ
- Steins;Gate 0

なお、本書は Git が持つ機能のうち、自分が普段使う機能を中心に説明しています。

## 謝辞

元々 Steins;Git は@kyo_ago がしたツイートで書こうと思いました[^1]。

> 結局「シュタゲで覚える git」って誰も書かなかったんですか？
> 2013 年 12 月 19 日 https://twitter.com/kyo_ago/status/413586733008044032

@kyo_ago には Twitter 上で様々な助言をいただいたり、@watilde も交えてレビュー会をしていただきました。

Gitter というチャットサービス上では、構成について yosiwo さんから助言をもらいました。
また、@GeckoTang には GitHub 上で誤字の指摘をしていただきました。

表紙と各章のイラストを描いた GiantRobot さんには非常に助けられました。本当にありがとうございます。
最後に、進捗管理・イラスト発注・印刷業者への確認・本書のレビューと、さまざまな作業を担ってくれた fruitsnoodle に感謝を伝えたいと思います。

## 本書の構成

本書は全部で三章あります。

1. 第一章では、バージョン管理システムについて説明します。また数あるバージョン管理システムの中から Git について説明します。
2. 第二章では、なぜ Git を使ってバージョン管理をおこなうのかを利点・欠点を挙げて説明します。
3. 第三章では、Git にある機能のうち、自分が普段よく使う機能について SourceTree というソフトウェアとコマンドラインを使って説明します。

## お問い合わせ先

本書に関するお問い合わせは ta2+sgr@o2p.jp、または Twitter で@o2pjp へお問い合わせください。

## 免責事項

本書に記載された内容は情報の提供のみを目的としています。
したがって、本書を用いた開発・製作・運用は必ずご自身の責任と判断によっておこなってください。
これらの情報による開発・製作・運用の結果について著者はいかなる責任も負いません。

[^1] ちなみに「Steins;Git」という言葉をたどると https://twitter.com/ruedap/status/82250750268420096 が最古のツイートとして出てきます。