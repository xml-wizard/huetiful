// JavaScript Document
var r = new Rune({ container: "#canvas", width: 800, height: 500, debug: true});+IAs-var size = 80;+IAs-// WRONG

for(var i = 0; i < 10; i+-+-) { r.rect(i * size, 0, size, r.height/2) .fill('hsv', 0, 0, i * 10) .stroke(false)}+IAs

// RIGHT

for(var i = 0; i < 10; i+-+-) {+IAs

 // create the color in LAB and convert to RGB 
 var rgb = Rune.Color.Convert.lab2rgb(i * 10, 0, 0);+IAs r.rect(i * size, r.height/2, size, r.height/2) .fill(rgb[0], rgb[1], rgb[2]) .stroke(false)}+IAs-r.draw();