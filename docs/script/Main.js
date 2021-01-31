// 背景画像の表示
function showBackgroundImage() {
  var url = [
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
  ];

  var randomIndex = Math.floor(Math.random() * url.length);
  console.log('randomIndex:' + randomIndex);
  var el = document.getElementById('bg');
  el.style.backgroundImage = 'url(' + url[randomIndex] + ')';
}

// デジタル時計の表示
function showClock() {
  var weeks = new Array('Sun', 'Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat');
  var now = new Date();
  var y = now.getFullYear();
  var mo = now.getMonth() + 1;
  var d = now.getDate();
  var w = weeks[now.getDay()];
  var h = now.getHours();
  var mi = now.getMinutes();
  var s = now.getSeconds();

  if (mo < 10) mo = '0' + mo;
  if (d < 10) d = '0' + d;
  if (mi < 10) mi = '0' + mi;

  document.getElementById('d-clock_date').innerHTML = y + '/' + mo + '/' + d + ' (' + w + ')';
  document.getElementById('time').innerHTML = h + ':' + mi;
  document.getElementById('d-clock').style.fontSize = window.innerWidth / 10 + 'px';

  showAnalogClockSecond(s);
}

// アナログ時計(秒針のみ)の表示
function showAnalogClockSecond(s) {
  const degS = s * (360 / 60);
  const elS = document.getElementById('a-clock-sec');
  elS.style.transform = `rotate(${degS}deg)`;
}

// 初期表示
showBackgroundImage();
showClock();

// タイマー
setInterval(showClock, 1000);
