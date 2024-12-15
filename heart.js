const lines = document.querySelectorAll(".mid-heart-line")
const image = document.querySelector(".right-heart-image")
const midHeart = document.querySelector(".mid-heart")
const rightHeart = document.querySelector(".right-heart")
const audioIndex = document.querySelector(".audio-index")

lines.forEach((line, id) => {
    line.addEventListener("mouseover", () => {
        lines.forEach(l => {
            l.classList.remove("selected-heart-line")
            l.classList.add("not-selected-heart-line")
        })
        line.classList.add("selected-heart-line")
        line.classList.remove("not-selected-heart-line")
        image.src = `img/rh${id + 1}.jpg`
    })
})

midHeart.addEventListener("mouseout", () => {
    lines.forEach(l => {
        l.classList.remove("selected-heart-line")
        l.classList.remove("not-selected-heart-line")
    })
})

let opened = false

audioIndex.addEventListener("click", () => {
    if (!opened) {
        audioIndex.innerHTML = `
            <div>Audio Index</div>
            <div>-</div>
        `
        midHeart.style.display = "flex"
        rightHeart.style.display = "flex"
        document.querySelector(".abs-heart").style.display = "none"
        opened = true
    }
    else {
        audioIndex.innerHTML = `
            <div>Audio Index</div>
            <div>+</div>
        `
        midHeart.style.display = "none"
        rightHeart.style.display = "none"
        document.querySelector(".abs-heart").style.display = "flex"
        opened = false
    }
})

window.addEventListener("mousemove", (e) => {
    document.querySelector(".left-arr").style.left = `${e.clientX - document.querySelector(".abs-heart-div").getBoundingClientRect().left}px`
    document.querySelector(".left-arr").style.top = `${e.clientY - document.querySelector(".abs-heart-div").getBoundingClientRect().top}px`
    document.querySelector(".right-arr").style.left = `${e.clientX - document.querySelector(".abs-heart-div").getBoundingClientRect().left - document.querySelector(".abs-heart-div").offsetWidth / 2}px`
    document.querySelector(".right-arr").style.top = `${e.clientY - document.querySelector(".abs-heart-div").getBoundingClientRect().top}px`
    if (opened) {
        if (midHeart.contains(e.target)) {
            document.querySelector("body").classList.remove("no-cursor");
        } else {
            document.querySelector("body").classList.add("no-cursor");
            document.querySelector(".closex").style.left = `${e.clientX}px`
            document.querySelector(".closex").style.top = `${e.clientY}px`
        }
    }
    else {
        document.querySelector("body").classList.remove("no-cursor");
    }
});

document.addEventListener("click", () => {
    if (opened && document.querySelector("body").classList.contains("no-cursor")) {
        audioIndex.innerHTML = `
            <div>Audio Index</div>
            <div>+</div>
        `
        midHeart.style.display = "none"
        rightHeart.style.display = "none"
        opened = false
        document.querySelector("body").classList.remove("no-cursor");
    }
})

let currPhoto = 0
let numberOfPhotos = 5

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

let mobileOpened = false

const mobileFooterTop = document.querySelector(".heart-footer-top")
const mobileFooter = document.querySelector(".heart-footer")
const mobileIndex = document.querySelector(".mobile-audio-index")
const mobileLines = document.querySelectorAll(".footer-bottom-line")

mobileLines.forEach((line, id) => {
    line.addEventListener("click", () => {
        if (line.classList.contains("selected-mobile-line")) {
            mobileLines.forEach(l => {
                l.classList.remove("selected-mobile-line")
                l.classList.remove("not-selected-mobile-line")
            })
        }
        else {
            mobileLines.forEach(l => {
                l.classList.remove("selected-mobile-line")
                l.classList.add("not-selected-mobile-line")
            })
            line.classList.add("selected-mobile-line")
            line.classList.remove("not-selected-mobile-line")
        }
    })
})

mobileFooterTop.addEventListener("click", () => {
    if (!mobileOpened) {
        mobileFooter.classList.add("opened-footer")
        mobileIndex.innerHTML =
            `
            <div>Audio Index</div>
            <div>-</div>
        `
        mobileOpened = true
    }
    else {
        mobileFooter.classList.remove("opened-footer")
        mobileIndex.innerHTML =
            `
            <div>Audio Index</div>
            <div>+</div>
        `
        mobileOpened = false
    }
})