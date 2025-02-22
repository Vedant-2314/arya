// Function to Create a Floating Balloon 🎈
function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.innerHTML = "🎈";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = Math.random() * 3 + 4 + "s"; // 4-7s
    document.querySelector(".balloons-container").appendChild(balloon);
    
    setTimeout(() => {
        balloon.remove();
    }, 7000);
}

// Function to Create a Twinkling Star ✨
function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.innerHTML = "✨";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDuration = Math.random() * 2 + 1 + "s";
    document.querySelector(".stars-container").appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, 3000);
}

// Start Animations
setInterval(createBalloon, 500);
setInterval(createStar, 1000);
