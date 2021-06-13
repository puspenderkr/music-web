  // side menu

  var menuBtn = document.getElementById("menuBtn")
  var sidenav = document.getElementById("sidenav")
  var menu = document.getElementById("menu")

  sidenav.style.right = "-250px";

  menuBtn.onclick = function () {
      if (sidenav.style.right == "-250px") {
          sidenav.style.right = "0";
          menu.src = "images/closemenu.png"
      }
      else {
          sidenav.style.right = "-250px";

          menu.src = "images/menu.png"
      }

  }



//   function playAudio(audiold, icon) {
//       var audio = document.getElementById(audiold);
//       var musicIcon = document.getElementById(icon);
//       if (audio.paused) {
//           audio.play();
//           musicIcon.src = "images/pause.png";
//       }
//       else {
//           audio.pause();
//           musicIcon.src = "images/play.png";
//       }

//   }


var divlength = document.querySelectorAll('.song').length;
// console.log(divlength);
var musicIcon = document.getElementById(musicIcon);
for(var i = 0; i < divlength; i++){

    var demo = document.querySelectorAll('.song')[i].addEventListener('click', playsong);
    var demo = document.querySelectorAll('.song')[i].addEventListener('dblclick', pausesong);
}

let song1 = new Audio();
song1.src = "media/Lukas Graham - Mama Said [Official Music Video].mp3";

let song2 = new Audio();
song2.src = "media/Anuv Jain - ALAG AASMAAN (a song on the ukulele).mp3";

let song3 = new Audio();
song3.src = "media/Avicii - Wake Me Up (Lyric Video).mp3";

let song4 = new Audio();
song4.src = "media/Lewis Capaldi - Lost On You (Official Audio).mp3";

function playsong(){
    
    var songId = this.innerHTML;
    // console.log(songId);

    switch (songId){
        case "1" :
            song1.play();
          
            break;
        case "2" :
            song2.play();
           
            break;
        case "3" :
            song3.play();
             
            break;
        case "4" :
            song4.play();
             
            break;

            default:
                console.log("wrong input");
                break;
    }
}
function pausesong(){
    
    var songId = this.innerHTML;

    switch (songId){
        case "1" :
            song1.pause();
             
            break;
        case "2" :
            song2.pause();
             
            break;
        case "3" :
            song3.pause();
             
            break;
        case "4" :
            song4.pause();
             
            break;

            default:
                console.log("wrong input");
                break;
    }
}

// ----------------------------------------------------------------------------------

const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");
const progress_div = document.getElementById("progress_div");

const songs = [
    {
        name: "Alag Aasmaan",
        title: "Alag Aasmaan",
        artist: "Anuv Jain",
    },
    {
        name: "Mama Said",
        title: "Mama Said",
        artist: "Lukas Graham",
    },
    {
        name: "Lost On You",
        title: "Lost On You",
        artist: "Lewis Capladi",
    }
]

let isPlaying = false;

//  for play fuctionality
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('animes');
};

//  for pause fuctionality
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('animes');
};

play.addEventListener("click", () => {
    if (isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
});

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images2/" + songs.name + ".jpg";
};

// loadSong(songs[1]);

songIndex = 0;



const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
const previousSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

// progress js works

music.addEventListener('timeupdate', (event) =>{
    // console.log(event);
    const {currentTime, duration} = event.srcElement;
    // console.log(currentTime);
    // console.log(duration);

    let progress_time = (currentTime / duration) * 100;
    progress.style.width = ` ${progress_time}% `;

    // music duration update
     let min_duration = Math.floor(duration / 60);
     let sec_duration = Math.floor(duration % 60);
     
     let  tot_duration = ` ${min_duration} : ${sec_duration}`;
     if(duration){
    total_duration.textContent = ` ${tot_duration}`
     }
    // music current duration update
     let min_currentTime = Math.floor(currentTime / 60);
     let sec_currentTime = Math.floor(currentTime % 60);
     
     if(sec_currentTime < 10){
         sec_currentTime = `0${sec_currentTime} `;
        }
        let  tot_currentTime = ` ${min_currentTime} : ${sec_currentTime}`;
     
    current_time.textContent = ` ${tot_currentTime}`
     

})
// progress onclick funtionalilty

progress_div.addEventListener('click', (event) =>{
    // console.log(event);
    const {duration} = music;

    let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
    music.currentTime = move_progress;
})


music.addEventListener('ended', nextSong);

next.addEventListener('click', nextSong);
prev.addEventListener('click', previousSong);


