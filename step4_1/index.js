(function() {
  var mapData = [
    {cx: 197, cy: 42, r: 30}, // 北海道
    {cx: 187, cy: 108, r: 22}, // 東北北部
    {cx: 177, cy: 138, r: 22}, // 東北南部
    {cx: 173, cy: 174, r: 22}, // 関東
    {cx: 155, cy: 158, r: 22}, // 中部北陸
    {cx: 144, cy: 180, r: 22}, // 近畿
    {cx: 126, cy: 166, r: 22}, // 中国地方東部
    {cx: 104, cy: 173, r: 22}, // 中国地方西部
    {cx: 57, cy: 196, r: 22}, // 九州
  ];

  // SVG要素の参照を取得
  var svgElm = document.getElementById('map');

  // g要素の生成
  var gElm = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgElm.appendChild(gElm);

  // 地図の描画
  for (var i = 0; i < mapData.length; i++) {
    // circle要素の生成
    var circleElm = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    // 属性の設定
    circleElm.setAttribute("cx", mapData[i].cx);
    circleElm.setAttribute("cy", mapData[i].cy);
    circleElm.setAttribute("r", mapData[i].r);

    // SVG要素に追加
    gElm.appendChild(circleElm);
  }

  // Pan
  gElm.setAttribute("transform", "translate(150, 150)");
})();

