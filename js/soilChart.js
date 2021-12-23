var canvas = document.getElementById('soil');
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');

  var silt = new Path2D();
  silt.arc(30, 35, 30, 0, 2 * Math.PI);
  var siltyLoam = new Path2D();
  siltyLoam.arc(100, 35, 30, 0, 2 * Math.PI);
  var sand = new Path2D();
  sand.arc(170, 35, 30, 0, 2 * Math.PI);
  var sandyLoam = new Path2D();
  sandyLoam.arc(240, 35, 30, 0, 2 * Math.PI);
  var clay = new Path2D();
  clay.arc(310, 35, 30, 0, 2 * Math.PI);
  var clayeyLoam = new Path2D();
  clayeyLoam.arc(380, 35, 30, 0, 2 * Math.PI);

  
  ctx.stroke(silt);
  ctx.fill(silt)
  ctx.stroke(siltyLoam);
  ctx.stroke(sand);
  ctx.stroke(sandyLoam);
  ctx.stroke(clay);
  ctx.stroke(clayeyLoam);
}