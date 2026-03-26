var typed = new Typed('#element', {
    strings: [
        'B.Tech CSE Student',
        'Frontend Developer',
        'Python Learner',
        'Data Science Learner'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: false
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});



const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = form.querySelector("input[type='email']").value.trim();
    const name = form.querySelector("input[type='text']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (email === "" || name === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Enter a valid email!");
        return;
    }

    alert("Message sent successfully! ✅");
    form.reset();
});


function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section, .first").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});



document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});