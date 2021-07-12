canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color = "red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,150,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(n){
    color = document.getElementById("color").value;
console.log(color);
    x=n.clientX-canvas.offsetLeft;
    y=n.clientY-canvas.offsetTop;
    console.log("x="+x+",y="+y);
    circle(x,y);
}
function circle(x,y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2
ctx.arc(x,y,40,0,2*Math.PI);
ctx.stroke();
}