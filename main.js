let allAccordions = document.querySelectorAll(".accordion-btn")

function toggleAccordions(){
    this.children[1].classList.toggle("inactive")
    this.children[2].classList.toggle("active")
    this.nextElementSibling.classList.toggle("active")
}

for (const accordion of allAccordions){
    accordion.addEventListener("click", toggleAccordions)
}
