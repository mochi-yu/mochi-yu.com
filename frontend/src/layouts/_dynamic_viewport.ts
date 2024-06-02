// 以前の幅からwidthの変更が必要かどうかを確認する
var beforeWidth = 'device-width';
const newViewportContent = () => {
  const width = window.outerWidth;
  if (1200 >= width && width > 620) return '1200';
  else if (width <= 320) return '320';
  else return 'device-width';
};

const resizeEventHandler = () => {
  var currentViewport = newViewportContent();
  if (currentViewport != beforeWidth) setViewport(currentViewport);

  beforeWidth = currentViewport;
};

function setViewport(viewportContent: string) {
  document
    .querySelector('meta[name="viewport"]')!
    .setAttribute('content', 'width=' + viewportContent);
}

window.addEventListener('load', function () {
  resizeEventHandler();
});
window.addEventListener('resize', resizeEventHandler);
