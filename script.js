let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")
let start = setInterval(function(){
    let time = new Date()
    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()
     
    let rotateHR = (h * 30) + ((m*6)/360)
    let rotateMN = (m * 6) + ((s*6)/360)
    let rotateS = s * 6

    hour.style.transform = `rotate(${rotateHR}deg)` ;
    minute.style.transform = `rotate(${rotateMN}deg)` ;
    second.style.transform = `rotate(${rotateS}deg)` ;
},1000)


// digital clock

var hourdg = document.querySelector(".hourdg")
var minutedg = document.querySelector(".minutedg")
var seconddg = document.querySelector(".seconddg")
var title = document.querySelector(".title")


function myClock (){

var time = new Date();

var h = hourdg.innerHTML=  time.getHours();
var m =  time.getMinutes();
var s =  time.getSeconds();
m = add0(m)
s = add0(s)
minutedg.innerHTML= m
seconddg.innerHTML= s


}


setInterval(myClock, 1000)
function add0(i) {
    if (i < 10) {
        i = "0" + i
    }; 
    return i;
  }
