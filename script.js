
// side menu

var menuBtn = document.getElementById("menuBtn")
var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu")

sidenav.style.right = "-250px";

menuBtn.onclick = function () {
    if (sidenav.style.right == "-250px") {
        sidenav.style.right = "0";
        menu.src = "closemenu.png"
    }
    else {
        sidenav.style.right = "-250px";

        menu.src = "menu.png"
    }

}



// smooth scroll

var scroll = new SmoothScroll('a[href*="#"]', {
speed: 1000,
speedAsDuration: true
});




// Songs for trending section


    // let mamaSaid = document.getElementById("mamaSaid");
    // let musicIcon = document.getElementById("musicIcon");

    // musicIcon.onclick = function mamaSaidplay(){
    //     if(mamaSaid.paused){
    //         mamaSaid.play();
    //         musicIcon.src = "pause.png";
    //     }
    //     else{
    //         mamaSaid.pause();
    //         musicIcon.src = "play.png";
    //     }
    // }

   
    // let alag = document.getElementById("alag");
    // let musicIcon2 = document.getElementById("musicIcon2");

    // musicIcon2.onclick = function alagplay(){
    //     if(alag.paused){
    //         alag.play();
    //         musicIcon2.src = "pause.png";
    //     }
    //     else{
    //         alag.pause();
    //         musicIcon2.src = "play.png";
    //     }
    // }

   

    