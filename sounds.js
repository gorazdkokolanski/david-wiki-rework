const lines = document.querySelectorAll(".mid-heart-line")
const image = document.querySelector(".right-heart-image")
const midHeart = document.querySelector(".mid-heart")
const rightHeart = document.querySelector(".right-heart")
const audioIndex = document.querySelector(".audio-index")
const audio = document.querySelector("audio"); // Global audio element

let currentlyPlayingLine = null;

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

    line.addEventListener("click", () => {
        const lineAudioSrc = `sounds/${id + 1}.m4a`;

        // If clicking the same line that's currently playing
        if (currentlyPlayingLine === id) {
            if (!audio.paused) {
                // Pause if currently playing
                audio.pause();
            } else {
                // Resume if currently paused
                audio.play();
            }
        } else {
            // Different line clicked:
            audio.src = lineAudioSrc;
            audio.play();
            currentlyPlayingLine = id;
        }
    });
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

window.addEventListener("mousemove", (e) => {
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

let mobileOpened = false

const mobileFooterTop = document.querySelector(".heart-footer-top")
const mobileFooter = document.querySelector(".heart-footer")
const mobileIndex = document.querySelector(".mobile-audio-index")
const mobileLines = document.querySelectorAll(".footer-bottom-line")

mobileLines.forEach((line, id) => {
    const handleLineClick = () => {
        if (line.classList.contains("selected-mobile-line")) {
            mobileLines.forEach(l => {
                l.querySelector('.footer-line-expansion').style.maxHeight = "0px";
                l.classList.remove("selected-mobile-line");
                l.classList.remove("not-selected-mobile-line");
            });
        } else {
            mobileLines.forEach(l => {
                l.querySelector('.footer-line-expansion').style.maxHeight = "0px";
                l.classList.remove("selected-mobile-line");
                l.classList.add("not-selected-mobile-line");
            });
            line.querySelector('.footer-line-expansion').style.maxHeight = `${line.querySelector("img").offsetHeight + 300}px`;
            line.classList.add("selected-mobile-line");
            line.classList.remove("not-selected-mobile-line");
        }

        const lineAudioSrc = `sounds/${id + 1}.m4a`;
        if (currentlyPlayingLine === id) {
            if (!audio.paused) {
                audio.pause();
            } else {
                audio.play();
            }
        } else {
            audio.src = lineAudioSrc;
            audio.play();
            currentlyPlayingLine = id;
        }
    };

    // Add both click and touchstart events
    line.addEventListener("click", handleLineClick);
    line.addEventListener("touchstart", (e) => {
        e.preventDefault(); // Prevent ghost clicks
        handleLineClick();
    });
});

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