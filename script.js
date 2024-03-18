let serviceBox = document.getElementById("otherServiceBoxParent")
let serviceBtn = document.getElementById("serviceBtn")
let navbar = document.getElementById("navbar")

serviceBtn.addEventListener("click" , () => {
    console.log("working");
    if(serviceBox.style.display == "flex"){
        serviceBox.style.display = "none"
        serviceBtn.innerHTML = "View All Services"
    }else{
        serviceBox.style.display = "flex"
        serviceBtn.innerHTML = "Hide Services"
        window.scrollBy(0, 150);
    }
})

window.addEventListener('scroll' , () => {
    if(window.scrollY >= 50){
        navbar.style.backgroundColor = "white"
    }else{
        navbar.style.backgroundColor = "transparent"
    }
})