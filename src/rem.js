~ function () {
  let evt = 'onorientationchange' in window ? 'orientationchange' : 'resize';

  function computed() {
    let HTML = document.documentElement,
    deviceW = HTML.clientWidth,
    designW = 750,
    ratio = deviceW / designW * 100;
    if (deviceW >= designW) ratio = 100;
    HTML.style.fontSize = ratio + 'px';
    computed();
    window.addEventListener(evt,computed)
  }
}