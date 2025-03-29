const registerBtn = document.getElementById("register")
const learnMoreMathsButton = document.getElementById("lm-maths")
const learnMoreCodingButton = document.getElementById("lm-coding")
let isOverlayOpen = false;


const closeModal = () => {
    let overlay = document.body.querySelector(".overlay");
    document.body.removeChild(overlay)
    isOverlayOpen = !isOverlayOpen
    
}

const createModal = () => {
    const modal = document.createElement("div")
    const closeButton = document.createElement("button")

    closeButton.addEventListener("click", closeModal)


    modal.setAttribute("id", "modal")
    closeButton.setAttribute("class", "closebtn")

    modal.appendChild(closeButton)

    return modal;

}

const toggleOverlay = () => {
    if (!isOverlayOpen){
    
        overlay = document.createElement("div");
        overlay.className = "overlay";
    
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.position = "fixed";
        overlay.style.display = "block"
        overlay.style.top = "0"
        overlay.style.left = "0"
    
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        let modal = createModal()
        overlay.appendChild(modal)
        document.body.appendChild(overlay);
        isOverlayOpen = !isOverlayOpen;
    }


}





const openModal = () => {
    toggleOverlay()
}




registerBtn.addEventListener("click", () => {

    registerBtn.style.transition = "box-shadow 0.5s ease-out";
    registerBtn.style.boxShadow = "none";
    registerBtn.style.boxShadow = "";
    
    
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
})


registerBtn.addEventListener("mouseover", () => {
    registerBtn.style.opacity = "0.8"

});

registerBtn.addEventListener("mouseout", () => {
    registerBtn.style.opacity = "1"

});


learnMoreCodingButton.addEventListener("click", openModal)

learnMoreMathsButton.addEventListener("click", openModal)

