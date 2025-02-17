document.addEventListener("DOMContentLoaded", function () {
    function startGame() {
        document.querySelector('.title').style.display = 'none';
        document.querySelector('.intro').style.display = 'none';
        document.querySelector('.press-start').style.display = 'none';
        document.querySelector('.menu').style.display = 'block';
        document.getElementById("menu").style.display = "flex";
        document.getElementById("avatar1").style.display = 'none';
        document.getElementById("avatar2").classList.add("move");
        document.getElementById("about-me").style.display = "block";
    }    

    document.querySelector(".press-start").addEventListener("click", startGame);
});
document.addEventListener("DOMContentLoaded", function () {
    const text = "I'm Rahul Das, a passionate SDET exploring the digital world.";
    let index = 0;
    const speed = 50; // Typing speed in ms
    
    function typeWriter() {
        if (index < text.length) {
            document.getElementById("about-text").textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
});

document.querySelector(".btn[href='#aboutMe']").addEventListener("click", function() {
    document.getElementById("about-me").style.display = "block";
    document.getElementById("ComingSoon").style.display = "none";
    document.getElementById("projects").style.display = "none";
});

function closeAboutMe() {
    document.getElementById("about-me").style.display = "none";
   
}

  document.querySelector(".btn[href='#achievements']").addEventListener("click", function() {
    
    document.getElementById("projects").style.display = "none";
    document.getElementById("ComingSoon").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("about-me").style.display = "none";
});

document.querySelector(".btn[href='#gallery']").addEventListener("click", function() {
    
    document.getElementById("projects").style.display = "none";
    document.getElementById("ComingSoon").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("about-me").style.display = "none";

});

document.querySelector(".btn[href='#blog']").addEventListener("click", function() {
    
    document.getElementById("projects").style.display = "none";
    document.getElementById("ComingSoon").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("about-me").style.display = "none";

});