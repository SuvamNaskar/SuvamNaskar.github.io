const loader = document.getElementById("preloader");
const blur = document.querySelectorAll(".blur");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener("load", function(){
    loader.style.display = "none";
});

window.addEventListener("load", function(){
    blur.style.filter = "blur(0)";
});