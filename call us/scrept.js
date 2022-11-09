const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

let button = document.getElementById('but')
button.onclick = function(){
    window.scrollTo(0,0);
}




const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   const serviceID = 'default_service';
   const templateID = 'template_oqhsv9o';
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ارسال';
    }, (err) => {
      btn.value = 'ارسال';
      alert(JSON.stringify(err));
    });
});