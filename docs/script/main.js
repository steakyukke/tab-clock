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
