function color() { 
    var r = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    
    var bgcolor = "rgb(" + r + "," + b + "," +  g + ")"
    document.body.style.background = bgcolor
}