const topBar = document.querySelector("#top-bar")
const exteriorColorSection = document.querySelector("#exterior-buttons")
const InteriorColorSection = document.querySelector("#interior-buttons")
const exteriorImage = document.querySelector("#exterior-image")
const InteriorImage = document.querySelector("#interior-image")


// Handle Top Bar On Scroll
const handleScroll = () =>{
    const atTop = window.scrollY === 0
    topBar.classList.toggle("visible-bar", atTop)
    topBar.classList.toggle("hidden-bar", !atTop)
}


// event Listener
window.addEventListener("scroll", () => requestAnimationFrame(handleScroll))