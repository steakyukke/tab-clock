// 背景画像の表示
function showBackgroundImage() {
  const url = [
    'https://images.unsplash.com/photo-1527267207156-3372670819dc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2002&q=80',
    'https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2141&q=80',
    'https://images.unsplash.com/photo-1560625693-36619f571dca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2688&q=80',
    'https://images.unsplash.com/photo-1577640837437-6da1ca585dcd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1578831021444-63db07012cf1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1563507533193-2767eb866f39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1543948475-f14990265e15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80',
    'https://images.unsplash.com/photo-1604334532792-04708f86e69e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1542&q=80',
    'https://images.unsplash.com/photo-1590393581117-0e382bb68fb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2467&q=80',
    'https://images.unsplash.com/photo-1600416918462-7d038e6ebd91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80',
    'https://images.unsplash.com/photo-1591552649157-0a9c15c3f07a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1467521335787-2f0fc0f0e9a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2645&q=80',
    'https://images.unsplash.com/photo-1525026676804-72d45d8276f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2467&q=80',
    'https://images.unsplash.com/photo-1558104676-514f67db17b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1602940659805-770d1b3b9911?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3289&q=80',
    'https://images.unsplash.com/photo-1536703965899-85f65f163d58?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3302&q=80',
    'https://images.unsplash.com/photo-1542649350-a24209ce01b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3367&q=80',
    'https://images.unsplash.com/photo-1512531123205-560f5974e686?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80',
    'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3360&q=80',
    'https://images.unsplash.com/photo-1584172307312-437cb8095965?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3310&q=80',
    'https://images.unsplash.com/photo-1561039678-d9181ffb82ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80',
    'https://images.unsplash.com/photo-1504425242947-c2ba76435df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3421&q=80',
    'https://images.unsplash.com/photo-1563641676291-9f01de32c82d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80',
    'https://images.unsplash.com/photo-1563842740060-55bea0187b84?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3300&q=80',
    'https://images.unsplash.com/photo-1454238554694-bb0049b8dc5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80',
    'https://images.unsplash.com/photo-1460647847717-b1b1fa4f1092?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3072&q=80',
    // --- 以下、自然・水・建築の落ち着いた色調の画像 ---
    'https://images.unsplash.com/photo-1480497490787-505ec076689f?auto=format&fit=crop&w=2500&q=80', // ドロミテ湖に映る雪山
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2500&q=80', // 雪を頂いた山々と谷と森林
    'https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=2500&q=80', // 澄んだ青い水域
    'https://images.unsplash.com/photo-1495012379376-194a416fcc5f?auto=format&fit=crop&w=2500&q=80', // 白いクラゲが泳ぐ
    'https://images.unsplash.com/photo-1550757750-4ce187a65014?auto=format&fit=crop&w=2500&q=80', // 泡立ちを伴う荒れた海の波
    'https://images.unsplash.com/photo-1559825477-6f38d6332bb6?auto=format&fit=crop&w=2500&q=80', // 青く澄んだ水の下の灰色の砂
    'https://images.unsplash.com/photo-1465634836201-1d5651b9b6d6?auto=format&fit=crop&w=2500&q=80', // 水中写真
    'https://images.unsplash.com/photo-1583030225577-329fe6cc80d6?auto=format&fit=crop&w=2500&q=80', // 青と白のウォータースプラッシュ
    'https://images.unsplash.com/photo-1549074862-6173e20d02a8?auto=format&fit=crop&w=2500&q=80', // 青い水の写真
    'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=2500&q=80', // 水域のそばの緑と灰色の岩層
    'https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?auto=format&fit=crop&w=2500&q=80', // 島の近くでヨットセーリング
    'https://plus.unsplash.com/premium_photo-1677347335105-1bd16607a25e?auto=format&fit=crop&w=2500&q=80', // 草が茂った丘の上に沈む太陽
    'https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?auto=format&fit=crop&w=2500&q=80', // 緑の松の木の近くの木製の海のドック
    'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2500&q=80', // 高層ビル都市景観
    'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2500&q=80', // 昼間の白と茶色の街の建物
    'https://images.unsplash.com/photo-1504119089809-1d5100a33f27?auto=format&fit=crop&w=2500&q=80', // ビルを見上げるワームの目線
    'https://images.unsplash.com/photo-1550510537-89d5433de5cb?auto=format&fit=crop&w=2500&q=80', // ガラス窓の建物
    'https://plus.unsplash.com/premium_photo-1725408023469-d0659e7f3545?auto=format&fit=crop&w=2500&q=80', // フランクフルトの近代的な銀行塔
    'https://images.unsplash.com/photo-1634043858159-113e50b6560b?auto=format&fit=crop&w=2500&q=80', // 高層ビルの隣の川を下るボート
  ];

  const randomIndex = Math.floor(Math.random() * url.length);
  console.log('randomIndex:' + randomIndex);
  const el = document.getElementById('bg');
  el.style.backgroundImage = 'url(' + url[randomIndex] + ')';
}

// デジタル時計の表示
function showClock() {
  const weeks = ['Sun', 'Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat'];
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let week = weeks[now.getDay()];
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  // 表示用文字列作成
  const date = `${year}/${('0' + month).slice(-2)}/${('0' + day).slice(-2)} (${week})`;
  const time = `${('0' + hour).slice(-2)}:${('0' + min).slice(-2)}`;

  // 日付・時刻表示
  document.getElementById('d-clock_date').innerHTML = date;
  document.getElementById('time').innerHTML = time;
  document.getElementById('d-clock').style.fontSize = `${window.innerWidth / 10}px`;
  showAnalogClockSecond(sec);

  // タイトル変更
  document.title = time;
}

// アナログ時計(秒針のみ)の表示
function showAnalogClockSecond(sec) {
  const degS = sec * (360 / 60);
  const elS = document.getElementById('a-clock-sec');
  elS.style.transform = `rotate(${degS}deg)`;
}

// 初期表示
showBackgroundImage();
showClock();

// タイマー
setInterval(showClock, 1000);
