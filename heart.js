window.addEventListener("mousemove", (e) => {
    document.querySelector(".left-arr").style.left = `${e.clientX - document.querySelector(".abs-heart-div").getBoundingClientRect().left}px`
    document.querySelector(".left-arr").style.top = `${e.clientY - document.querySelector(".abs-heart-div").getBoundingClientRect().top}px`
    document.querySelector(".right-arr").style.left = `${e.clientX - document.querySelector(".abs-heart-div").getBoundingClientRect().left - document.querySelector(".abs-heart-div").offsetWidth / 2}px`
    document.querySelector(".right-arr").style.top = `${e.clientY - document.querySelector(".abs-heart-div").getBoundingClientRect().top}px`
});

let currPhoto = 0
let numberOfPhotos = 4

document.querySelector(".left-abs-heart").addEventListener("click", () => {
    if (currPhoto == 0) {
        currPhoto = numberOfPhotos + 1
    }
    currPhoto--
    document.querySelector(".abs-heart-img").src = `img/heart-${currPhoto}.jpg`
})

document.querySelector(".right-abs-heart").addEventListener("click", () => {
    if (currPhoto == numberOfPhotos) {
        currPhoto = 0
    }
    currPhoto++
    document.querySelector(".abs-heart-img").src = `img/heart-${currPhoto}.jpg`
})