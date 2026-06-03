// =======================
// Dark Mode Toggle
// =======================

const themeToggle =
document.getElementById("themeToggle");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark");

    themeToggle.innerHTML = "☀️";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(
        document.body.classList.contains("dark")
    ){

        themeToggle.innerHTML = "☀️";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }else{

        themeToggle.innerHTML = "🌙";

        localStorage.setItem(
            "theme",
            "light"
        );
    }

});


// =======================
// Scroll Reveal Animation
// =======================

function revealElements(){

    const reveals =
    document.querySelectorAll(".reveal");

    reveals.forEach((element)=>{

        const windowHeight =
        window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(
            elementTop <
            windowHeight - revealPoint
        ){

            element.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    revealElements
);

revealElements();


// =======================
// Animated Counters
// =======================

const counters =
document.querySelectorAll(".counter");

let counterStarted = false;

function runCounters(){

    if(counterStarted) return;

    const impactSection =
    document.getElementById("impact");

    const sectionTop =
    impactSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){

        counterStarted = true;

        counters.forEach(counter=>{

            const target =
            +counter.dataset.target;

            let count = 0;

            const increment =
            target / 80;

            function updateCounter(){

                if(count < target){

                    count += increment;

                    counter.innerText =
                    Math.ceil(count) + "+";

                    requestAnimationFrame(
                        updateCounter
                    );

                }else{

                    counter.innerText =
                    target + "+";
                }

            }

            updateCounter();

        });

    }

}

window.addEventListener(
    "scroll",
    runCounters
);

runCounters();


// =======================
// Navbar Blur on Scroll
// =======================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.12)";

    }else{

        navbar.style.boxShadow =
        "none";
    }

});


// =======================
// Smooth Button Feedback
// =======================

const buttons =
document.querySelectorAll(
    ".btn-primary,.btn-secondary,.cta-btn"
);

buttons.forEach(button=>{

    button.addEventListener(
        "mouseenter",
        ()=>{

            button.style.transform =
            "translateY(-4px) scale(1.02)";
        }
    );

    button.addEventListener(
        "mouseleave",
        ()=>{

            button.style.transform =
            "translateY(0) scale(1)";
        }
    );

});


// =======================
// Console Welcome
// =======================

console.log(
`
🌸 She Can Foundation

Empowering Women,
Transforming Lives.

Frontend Internship Project
Created by Utkarsh Agarwal
`
);