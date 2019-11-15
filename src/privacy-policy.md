# プライバシーポリシー

<script>
  const gaId = window.__gaId__ || '';

  function toggleGAOptoutStatus() {
    if (gaOptout.enabled()) {
      gaOptout.disable();
      return;
    }

    gaOptout.enable();
  }

  function showGAOptoutStatus() {
    const outputElement = document.querySelector('#google-analytics-tracking-status')
    outputElement.textContent = gaOptout.enabled() ? '無効' : '有効';
  }

  function onClickGAOptoutButton() {
    gaOptout.gaId = gaId;
    toggleGAOptoutStatus();
    showGAOptoutStatus();
  }

  document.addEventListener('DOMContentLoaded', showGAOptoutStatus);
</script>

当Webサイトでは内容の改善を目的として、Google アナリティクスによるアクセス分析をおこなっています。

Google アナリティクスは Cookie を使い匿名のトラフィックデータを収集しています。
Cookie に含まれるデータは利用者の個人情報を特定しません。また利用者は Cookie を無効にした状態で当サイトにアクセスできます。

詳しくは[Google のサービスを使用するサイトやアプリから収集した情報の Google による使用 – ポリシーと規約 – Google](https://policies.google.com/technologies/partner-sites)を参照してください。

## Google Analytics によるトラッキングの状態を変更する

Google アナリティクスは以下のボタンから無効・有効を切り替えできます。

<button onclick="onClickGAOptoutButton()">Google アナリティクスのオプトアウト状況を変更する</button>

現在 Google アナリティクスによるトラッキングは<output><em id="google-analytics-tracking-status">有効<em></output>になっています。
