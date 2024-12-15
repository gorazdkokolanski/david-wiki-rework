// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { initializeAnalytics , getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmPS-Ye92k1hQtARvYrGAX1Wb_IvVBMzI",
  authDomain: "david-5fef5.firebaseapp.com",
  projectId: "david-5fef5",
  storageBucket: "david-5fef5.appspot.com",
  messagingSenderId: "967518678640",
  appId: "1:967518678640:web:0794259f0a3aac7bd30eb5",
  measurementId: "G-M5XH6QCT07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth()
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

console.log("path name: ", window.location.pathname)



if(localStorage.getItem("folder_x") != null){
    console.log(localStorage.getItem("folder_x") + "px")
    document.getElementById("folder").style.left = localStorage.getItem("folder_x") + "px"
    document.getElementById("folder").style.top = localStorage.getItem("folder_y") + "px"
}else{
    console.log("nay")
    localStorage.setItem("folder_x", document.getElementById("folder").getBoundingClientRect().x.toString())
    localStorage.setItem("folder_y", document.getElementById("folder").getBoundingClientRect().y.toString())
}

if(localStorage.getItem("_folder_x") != null){
    console.log(localStorage.getItem("folder_x") + "px")
    document.getElementById("folder_").style.left = localStorage.getItem("_folder_x") + "px"
    document.getElementById("folder_").style.top = localStorage.getItem("_folder_y") + "px"
}else{
    console.log("nay")
    localStorage.setItem("_folder_x", document.getElementById("folder_").getBoundingClientRect().x.toString())
    localStorage.setItem("_folder_y", document.getElementById("folder_").getBoundingClientRect().y.toString())
}


let mouse = { x: 0, y: 0 }
let folder = ""
// 
let folder_x = document.getElementById("folder").getBoundingClientRect().x
let folder_y = document.getElementById("folder").getBoundingClientRect().y
let old_folder_x = document.getElementById("folder").getBoundingClientRect().x
let old_folder_y = document.getElementById("folder").getBoundingClientRect().y
// 
let _folder_x = document.getElementById("folder_").getBoundingClientRect().x
let _folder_y = document.getElementById("folder_").getBoundingClientRect().y
let _old_folder_x = document.getElementById("folder_").getBoundingClientRect().x
let _old_folder_y = document.getElementById("folder_").getBoundingClientRect().y
let mouse_change = { x: 0, y: 0 }
let drag = false
var current_drag = null;


const music = new Audio('./assets/bestill.mp3');


document.getElementById("img").addEventListener("click", ev => {
    console.log(document.getElementById("img").src.toString())
    if(document.getElementById("img").src.toString().includes("no")){
        document.getElementById("img").src = document.getElementById("img").src.toString().replace("nomusic", "music")
        music.play()
    }else if(!document.getElementById("img").src.toString().includes("no") && document.getElementById("img_eye").style.display == "none" && window.innerWidth > 525){
        document.getElementById("img_eye").style.display = "inline-block"
    }
    else if(!document.getElementById("img").src.toString().includes("no") && document.getElementById("img_eye_mobile").style.display == "none" && window.innerWidth <= 525){
        document.getElementById("img_eye_mobile").style.display = "inline-block"
    }
    else{
        document.getElementById("img").src = document.getElementById("img").src.toString().replace("music", "nomusic")
        document.getElementById("img_eye").style.display = "none"
        document.getElementById("img_eye_mobile").style.display = "none"
        music.pause();
    }
})

document.getElementById("folder").addEventListener("click", ev => {
    // window.location = "/general"
}, false)

document.getElementById("folder").addEventListener("mousedown", ev => {
    folder = "folder"
    old_folder_x = document.getElementById("folder").getBoundingClientRect().x
    old_folder_y = document.getElementById("folder").getBoundingClientRect().y    
    drag = true
}, false)

document.getElementById("folder").addEventListener("touchstart", ev => {
    folder = "folder"
    old_folder_x = document.getElementById("folder").getBoundingClientRect().x
    old_folder_y = document.getElementById("folder").getBoundingClientRect().y    
    drag = true
}, false)


// NEW FOLDER FUNCTIONS

document.getElementById("folder_").addEventListener("mousedown", ev => {
    folder = "folder_"
    _old_folder_x = document.getElementById("folder_").getBoundingClientRect().x
    _old_folder_y = document.getElementById("folder_").getBoundingClientRect().y    
    drag = true
}, false)

document.getElementById("folder_").addEventListener("touchstart", ev => {
    folder = "folder_"
    _old_folder_x = document.getElementById("folder_").getBoundingClientRect().x
    _old_folder_y = document.getElementById("folder_").getBoundingClientRect().y    
    drag = true
}, false)


window.addEventListener("mouseup", ev => {
    drag = false
    if(folder == "folder"){
        folder_x = document.getElementById("folder").getBoundingClientRect().x
        folder_y = document.getElementById("folder").getBoundingClientRect().y
        localStorage.setItem("folder_x", folder_x.toString())
        localStorage.setItem("folder_y", folder_y.toString())
        console.log(ev.clientY > document.getElementById("folder").getBoundingClientRect().y && ev.clientY < document.getElementById("folder").getBoundingClientRect().y + 70)
        if(folder_x == old_folder_x && folder_y == old_folder_y && ev.clientX > document.getElementById("folder").getBoundingClientRect().x && ev.clientX < document.getElementById("folder").getBoundingClientRect().x+90 && ev.clientY > document.getElementById("folder").getBoundingClientRect().y && ev.clientY < document.getElementById("folder").getBoundingClientRect().y + 60){
            window.location = "/general"
        }
    }else if(folder == "folder_"){
        _folder_x = document.getElementById("folder_").getBoundingClientRect().x
        _folder_y = document.getElementById("folder_").getBoundingClientRect().y
        localStorage.setItem("_folder_x", _folder_x.toString())
        localStorage.setItem("_folder_y", _folder_y.toString())
        console.log(ev.clientY > document.getElementById("folder_").getBoundingClientRect().y && ev.clientY < document.getElementById("folder_").getBoundingClientRect().y + 70)
        if(_folder_x == _old_folder_x && _folder_y == _old_folder_y && ev.clientX > document.getElementById("folder_").getBoundingClientRect().x && ev.clientX < document.getElementById("folder_").getBoundingClientRect().x+90 && ev.clientY > document.getElementById("folder_").getBoundingClientRect().y && ev.clientY < document.getElementById("folder_").getBoundingClientRect().y + 60){
            window.location = "home.html"
        }
    }
}, false)

window.addEventListener("touchend", ev => {
    console.log("bi")
    drag = false
    if(folder == "folder"){
        folder_x = document.getElementById("folder").getBoundingClientRect().x
        folder_y = document.getElementById("folder").getBoundingClientRect().y
        localStorage.setItem("folder_x", folder_x.toString())
        localStorage.setItem("folder_y", folder_y.toString())
        if(folder_x == old_folder_x && folder_y == old_folder_y){
            // window.location = "/general"
        }
    }else if(folder == "folder_"){
        _folder_x = document.getElementById("folder_").getBoundingClientRect().x
        _folder_y = document.getElementById("folder_").getBoundingClientRect().y
        localStorage.setItem("_folder_x", _folder_x.toString())
        localStorage.setItem("_folder_y", _folder_y.toString())
        if(_folder_x == _old_folder_x && _folder_y == _old_folder_y){
            // window.location = "/general"
        }
    }
}, false)

window.addEventListener("mousemove", ev => {
    if(folder == "folder"){
        if(drag){
            document.getElementById("folder").style.left = Math.min(Math.max(ev.clientX-45, 0), (window.innerWidth - 64)) + "px"
            document.getElementById("folder").style.top = Math.min(Math.max(ev.clientY-45, 0), (window.innerHeight - 64)) + "px"
        }else if(!drag){
            mouse.x = ev.clientX
            mouse.y = ev.clientY
        }
    }else if(folder == "folder_"){
        if(drag){
            document.getElementById("folder_").style.left = Math.min(Math.max(ev.clientX-45, 0), (window.innerWidth - 64)) + "px"
            document.getElementById("folder_").style.top = Math.min(Math.max(ev.clientY-45, 0), (window.innerHeight - 64)) + "px"
        }else if(!drag){
            mouse.x = ev.clientX
            mouse.y = ev.clientY
        }
    }
})

window.addEventListener("touchmove", ev => {
    if(folder == "folder"){
        if(drag){
            // Math.min(Math.max(folder_x + (ev.targetTouches[0].clientX - mouse.x), 0), (window.screen.width - 64)) + "px"
            document.getElementById("folder").style.left = Math.min(Math.max(0, ev.targetTouches[0].clientX-45), window.screen.width - 94) + "px"
            document.getElementById("folder").style.top = Math.min(Math.max(0, ev.targetTouches[0].clientY-45), window.screen.height - 94) + "px"
        }else if(!drag){
            mouse.x = ev.changedTouches[0].clientX
            mouse.y = ev.changedTouches[0].clientY
        }
    }else if(folder == "folder_"){
        if(drag){
            // Math.min(Math.max(folder_x + (ev.targetTouches[0].clientX - mouse.x), 0), (window.screen.width - 64)) + "px"
            document.getElementById("folder_").style.left = Math.min(Math.max(0, ev.targetTouches[0].clientX-45), window.screen.width - 94) + "px"
            document.getElementById("folder_").style.top = Math.min(Math.max(0, ev.targetTouches[0].clientY-45), window.screen.height - 94) + "px"
        }else if(!drag){
            mouse.x = ev.changedTouches[0].clientX
            mouse.y = ev.changedTouches[0].clientY
        }
    }
})


