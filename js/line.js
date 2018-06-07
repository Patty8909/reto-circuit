var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var cw = canvas.width = 1000;
var ch = canvas.height = 50;
var cx = cw / 2,
  cy = ch / 2;
var rad = Math.PI / 180;

ctx.strokeStyle = "black";
ctx.lineWidth = 3;

ctx.setLineDash([4, 10]);
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(1000, 10);
ctx.stroke();

