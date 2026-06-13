(function () {
  var canvas = document.getElementById('tree-bg');
  if (!canvas) return;

  function draw() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.width  = w;
    canvas.height = h;

    var ctx = canvas.getContext('2d');
    ctx.globalAlpha = 0.13;

    function branch(x1, y1, angleDeg, len, level) {
      if (level > 6) return;
      var rad = angleDeg * Math.PI / 180;
      var x2  = x1 + len * Math.sin(rad);
      var y2  = y1 - len * Math.cos(rad);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = '#1B2B4B';
      ctx.lineWidth   = Math.max(0.6, 7 - (level - 1));
      ctx.lineCap     = 'round';
      ctx.stroke();

      branch(x2, y2, angleDeg - 36, len * 0.80, level + 1);
      branch(x2, y2, angleDeg + 36, len * 0.80, level + 1);
    }

    branch(w / 2, h + 10, 0, h * 0.30, 1);
  }

  window.addEventListener('resize', draw);
  window.addEventListener('orientationchange', function () {
    setTimeout(draw, 100);
  });
  draw();
}());
