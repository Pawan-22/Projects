console.log("Welcome to Spotify")

let songIndex = 0
let audioElement = new Audio('./songs/1.mp3')  // inserts audio
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'))


let songs = [
    {songName: "Big Jet Plane (Acoustic) - Angus and Julia Stone", filePath: "./songs/1.mp3", coverPath: "./covers/10.jpg", timeStamp: `4:21`},
    {songName: "Blood - Exhibitionist", filePath: "./songs/2.mp3", coverPath: "./covers/1.jpg", timeStamp: `3:04`},
    {songName: "Calm Down - Rema, Selena Gomez", filePath: "./songs/3.mp3", coverPath: "./covers/2.jpg", timeStamp: `3:59`},
    {songName: "Collard Greens (Explicit) ft. Kendrick Lamar - SchoolBoy Q", filePath: "./songs/4.mp3", coverPath: "./covers/3.jpg", timeStamp: `4:51`},
    {songName: "FLOWER - JISOO", filePath: "./songs/5.mp3", coverPath: "./covers/4.jpg", timeStamp: `3:04`},
    {songName: "Harleys In Hawaii - Katy Perry", filePath: "./songs/6.mp3", coverPath: "./covers/5.jpg", timeStamp: `3:19`},
    {songName: "It's A Shame ft. Pink Feathers -RAC", filePath: "./songs/7.mp3", coverPath: "./covers/6.jpg", timeStamp: `3.05`},
    {songName: "No Wahala (Remix) feat. Kizz Daniel & Tiwa Savage", filePath: "./songs/8.mp3", coverPath: "./covers/7.jpg", timeStamp: `3:03`},
    {songName: "Rush - Ayra Starr", filePath: "./songs/9.mp3", coverPath: "./covers/8.jpg", timeStamp: `3:05`},
    {songName: "Under The Influence -Chris Brown", filePath: "./songs/10.mp3", coverPath: "./covers/9.jpg", timeStamp: `3:11`},
    
]

songItems.forEach((element, i)=>{
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
    // element.getElementsByClassName("timeStamp")[0].innerText = songs[i].timeStamp

})


// audioElement.play()

// Handle Play/Pause image click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')  // selects class and removes it
        masterPlay.classList.add('fa-circle-pause')    // selects class and adds it
        gif.style.opacity = 1

    }
    else  {
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0

    }
})

// Event Listeners
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate')

    // update progressBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    // console.log(progress)
    myProgressBar.value= progress
   
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       makeAllPlays()
       songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `./songs/${songIndex+1}.mp3`
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0
        audioElement.play()
        gif.style.opacity = 1
        masterPlay.classList.remove('fa-circle-play')  
        masterPlay.classList.add('fa-circle-pause') })


    })




    



    


// next button
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1
    }
    audioElement.src = `./songs/${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play')  
    masterPlay.classList.add('fa-circle-pause')  
})

// back button
document.getElementById('back').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')  
    masterPlay.classList.add('fa-circle-pause')  
})