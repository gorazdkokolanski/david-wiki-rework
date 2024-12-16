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
        opened = true
    }
    else {
        audioIndex.innerHTML = `
            <div>Audio Index</div>
            <div>+</div>
        `
        midHeart.style.display = "none"
        rightHeart.style.display = "none"
        opened = false
    }
})

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

let mobileOpened = false

const mobileFooterTop = document.querySelector(".heart-footer-top")
const mobileFooter = document.querySelector(".heart-footer")
const mobileIndex = document.querySelector(".mobile-audio-index")
const mobileLines = document.querySelectorAll(".footer-bottom-line")

mobileLines.forEach((line, id) => {
    line.addEventListener("click", () => {
        if (line.classList.contains("selected-mobile-line")) {
            mobileLines.forEach(l => {
                l.querySelector('.footer-line-expansion').style.maxHeight = "0px"
                l.classList.remove("selected-mobile-line")
                l.classList.remove("not-selected-mobile-line")
            })
        }
        else {
            mobileLines.forEach(l => {
                l.querySelector('.footer-line-expansion').style.maxHeight = "0px"
                l.classList.remove("selected-mobile-line")
                l.classList.add("not-selected-mobile-line")
            })
            line.querySelector('.footer-line-expansion').style.maxHeight = `${line.querySelector("img").offsetHeight + 30}px`
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