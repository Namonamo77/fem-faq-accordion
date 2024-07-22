let allAccordions = document.querySelectorAll("#show-btn")

function toggleAccordions(){
    this.children[1].classList.toggle("inactive")
    this.children[2].classList.toggle("active")
    this.nextElementSibling.classList.toggle("active")
}

for (const accordion of allAccordions){
    accordion.addEventListener("click", toggleAccordions)
}
