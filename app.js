
// local data
const galeria = [
    {
        id: 1,
        author: "Abdallah Lebron",
        img: "./img/abdallah.jpg",
        job: "Developer",
        text: "I am a web developer, and my role revolves around crafting the digital experiences you encounter when you surf the web. I combine my creative flair with technical prowess to design, build, and maintain websites and web applications, ensuring they are functional, visually appealing, and user-friendly. "
    },
    {
        id: 2,
        author: "James Bonaparte",
        img: "./img/james.webp",
        job: "UX/UI",
        text: "I'm the person who bridges the gap between technology and users, ensuring that websites and applications are not just functional, but also a joy to interact with."
    },
    {
        id: 3,
        author: "Sara Trujillo",
        img: "./img/sara.jpg",
        job: "Marketing",
        text: "Marketing is the process of creating, promoting, and delivering products or services to customers or clients. It encompasses a wide range of activities and strategies aimed at attracting, engaging, and retaining customers while achieving specific business objectives."
    },
    {
        id: 4,
        author: "Anonimus",
        img: "./img/anonimus.jpg",
        job: "Hacker",
        text: "Gray hat hackers fall somewhere in between white hat and black hat hackers. They may identify and exploit security vulnerabilities without authorization but do so with a mix of ethical and non-malicious intentions. These hackers may reveal security flaws to organizations but without formal permission to do so, potentially operating in a legal gray area."
    }
];

// Select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const text = document.getElementById('info');

// Buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Estado inicial del item
let currentItem = 0;

// Load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

// Mostrar perfil basado la posicion del item
function showPerson() {
    const item = galeria[currentItem];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;
}

// Mostrar siguiente perfil
nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > galeria.length -1) {
        currentItem = 0;
    }
    showPerson();
});

// Mostrar perfil previo
prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = galeria.length -1;
    }
    showPerson();
});

// Mostrar perfil aleatorio
randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * galeria.length);
    showPerson();
});