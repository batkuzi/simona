// ================================
// LOVE STORY - SIMONA ❤️
// script.js
// ================================
console.log("НОВИЯТ SCRIPT Е ЗАРЕДЕН");

// Елементи

const startBtn = document.getElementById("startBtn");
const story = document.getElementById("story");



// Стартиране на историята

startBtn.addEventListener("click", () => {

    // Скриваме началния екран

    document.querySelector(".intro").classList.add("fade-out");


    setTimeout(() => {

        document.querySelector(".intro").style.display = "none";

        story.classList.remove("hidden");

        story.classList.add("show");





    }, 1200);


});



// =================================
// Поява на секциите при скрол
// =================================


const pages = document.querySelectorAll(".page");


const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("visible");


}


});


},

{
threshold:0.25
}



);



pages.forEach(page=>{

observer.observe(page);

});




// =================================
// Падащи сърца ❤️
// =================================


const heartsContainer = document.getElementById("hearts");


function createHeart(){


const heart=document.createElement("span");


heart.className="heart";


heart.innerHTML="❤️";



heart.style.left=Math.random()*100+"vw";


heart.style.animationDuration=

(4+Math.random()*6)+"s";



heart.style.fontSize=

(10+Math.random()*25)+"px";



heartsContainer.appendChild(heart);



setTimeout(()=>{


heart.remove();


},10000);



}




setInterval(createHeart,450);




// =================================
// Фото ефект
// =================================


const photos=document.querySelectorAll(".photo");


const photoObserver=new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("photo-show");


}


});


},

{
threshold:0.4
}


);



photos.forEach(photo=>{

photoObserver.observe(photo);

});




// =================================
// Плавно връщане към началото
// =================================


window.addEventListener("beforeunload",()=>{


window.scrollTo(0,0);


});
