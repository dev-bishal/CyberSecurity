
/*For Back to top starts*/
window.addEventListener('scroll', function () {
    // mybutton = document.getElementById("BackToTop");
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 10) {
        /* mybutton.classList.add("opacity-100");
        mybutton.classList.remove("opacity-0");   */      
        this.document.querySelector("header").classList.add("bg-[#000a229a]");
        this.document.querySelector("header").classList.add("backdrop-blur-sm");
    } else {
       /*  mybutton.classList.remove("opacity-100");
        mybutton.classList.add("opacity-0"); */
        this.document.querySelector("header").classList.remove("bg-[#000a229a]");
        this.document.querySelector("header").classList.remove("backdrop-blur-sm");
    }        
})

function bringToView(sectionElement){
    element = document.querySelector(sectionElement);
    element.scrollIntoView();
}
