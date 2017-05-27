/**
 * Created by Administrator on 2017/5/27.
 */
// var box = document.getElementById("box")
var lis = document.getElementsByTagName("li");
for (var i=0; i<lis.length; i++) {
    lis[i].style.width=336-(i*28)+"px";
    lis[i].style.top=14*i+"px";
    lis[i].style.height=336-(i*28)+"px";
    lis[i].style.left=14*i+"px";
    lis[i].style.animationDelay=0.05*i+"s";
}
// var off = true;
// box.onmousemove = function(){
//
//     if(off){
//         for (var i=0; i<lis.length; i++) {
//             lis[i].style.transitionDelay = 0.1*i+"s";
//             lis[i].style.transform = "rotateY(0deg)";
//
//         }
//         off = false;
//     }
// }
// box.onmouseout = function(){
//     if(!off){
//         for (var i=0; i<lis.length; i++) {
//             lis[i].style.transitionDelay = 1.1/i+"s";
//             lis[i].style.transform = "rotateY(80deg)";
//             console.log(Math.floor(1.1/i))
//         }
//         off = true;
//     }
// }