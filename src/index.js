import './components/style.css';
import ExpandIcon from './components/expand.svg';
import BstImg from './components/binary-search-trees.png';
import KtImg from './components/knights-travails.png';
import BsImg from './components/battleship.png';
import TlImg from './components/todo-list.png';
import GmailIcon from './components/gmail.svg';
import WspIcon from './components/whatsapp.svg';
import GithIcon from './components/github.svg';
import LkdnIcon from './components/linkedin.svg';
import xIcon from './components/twitterx.svg';

document.body.innerHTML = `<div class="cont-main">
<nav class="nav-main">
    <h1>LCA</h1>
    <ul class="nav-items">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
<main>
    <header id="home">
        <div class="text-header">
            <p>Hey!</p>
            <div class="cont-desc-header">
                <p class="desc-header"></p>
            </div>
        </div>
        <div class="expand">
            <img src="${ExpandIcon}" alt="expand">
        </div>
    </header>
    <section id="about">
        <h2>#ABOUT</h2>
        <p>I live in Buenos Aires, Argentina. Since I was a child, I have had an interest in computing, logic, design, and video games. From the age of 20 until today, I have dedicated myself to the exciting world of trading, where finance, decision-making, risk management, and behavioral economics intersect. In mid-2023, I sought a way to enhance my skills and merge my interests, and that's when I found software development.</p> 
    </section>
    <section id="skills">
        <h2>#SKILLS</h2>
        <div class="skill-cont">
            <p class="skills-desc">Aspiring to be Fullstack, studying at <span>The Odin Project</span>.</p>
            <p><span>Core:</span> HTML, CSS, JavaScript</p>
            <p><span>Frameworks:</span> React.js (current)</p>
            <p><span>Tools:</span> VS Code, Git, Webpack, Jest, Linux</p>
            <p class="skills-desc-two">Objective upon completing the course:</p>
            <p class="skills-objective">Full-stack JavaScript</p>
            <p> > Front-end (React framework)</p>
            <p> > Back-end Node.js (Express framework / MongoDB DBMS)"</p>


        </div>
    </section>
    <section id="projects">
        <h2>#PROJECTS</h2>
        <div class="cont-projs">
            <div clas="proj-module">
                <h3>Binary-Search-Trees</h3>
                <div class="img-proj">
                    <img src="${BstImg}">
                </div>
                <p>Data structures. Implementation of a binary tree with binary search methods, insertion, deletion, rebalancing.</p>
            </div>
            <div clas="proj-module">
                <h3>Knights-Travails</h3>
                <div class="img-proj">
                    <img src="${KtImg}">
                </div>
                <p>Data structure. Implementation of graphs to search for potential shortest paths for a knight on a chessboard.</p>
            </div>
            <div clas="proj-module">
                <h3>Battleship</h3>
                <div class="img-proj">
                    <img src="${BsImg}">
                </div>
                <p>Abstraction and encapsulation. Implementation of classes to develop the logic of a naval battle game.</p>
            </div>
            <div clas="proj-module">
                <h3>Todo-list</h3>
                <div class="img-proj">
                    <img src="${TlImg}">
                </div>
                <p>DOM manipulation and JSON data loading into LocalStorage.</p>
            </div>
        </div>
    </section>
</main>
<footer id="contact">
    <h2>#CONTACT</h2>
    <div class="cont-footer">
        <p class="footer-desc">If you are interested in my profile, feel free to ask me a question through the following means.</p>
        <ul>
            <li>
                <img src="${GmailIcon}">
                <p>lucascarovano@gmail.com</p>
            </li>
            <li>
                <img src="${WspIcon}">
                <p>+54 9 11 5317-3806</p>
            </li>
            <li>
                <img src="${GithIcon}">
                <p>github.com/lucashub5</p>
            </li>
            <li>
                <img src="${LkdnIcon}">
                <p>linkedin.com/in/lucas-carovano</p>

            </li>
            <li>
                <img src="${xIcon}">
                <p>x.com/lucascarovano</p>
            </li>
        </ul>
    </div>
    <p>By Lucas Carovano</p>
</footer>
</div>`;

typeWriter('Welcome!', 50);

function typeWriter(text, speed, end = false) {
    flicker(true);
    let i = 0;
    const interval = setInterval(() => {
      document.querySelector('.desc-header').textContent = text.substring(0, i + 1) + "|";
      i++;
      if (i > text.length) {
        clearInterval(interval);
        flicker(false);

        if (end) {
            return;
        }

        setTimeout(() => {
            eraseText(speed);
        }, 500);
      }
    }, speed);
}

function eraseText(speed) {
    flicker(true);
    let text = document.querySelector('.desc-header').textContent;
    let i = text.length;
    const interval = setInterval(() => {
        document.querySelector('.desc-header').textContent = text.substring(0, i - 1) + "|";
        i--;
        if (i === 0) {
            clearInterval(interval);
            flicker();
            setTimeout(() => {
                typeWriter(`I'm Lucas Carovano, a developer.`, 50, true);
            }, 500);
        }
    }, speed);
}

let flickerTimer;

function flicker(clear = false) {
    let textElement = document.querySelector('.desc-header');
    let text = textElement.textContent;

    if (clear) {
        if (text.charAt(text.length - 1) !== '|') {
            text += "|";
        }
        clearInterval(flickerTimer);
        textElement.textContent = text; // Actualizar el texto en el elemento HTML
        return;
    }

    flickerTimer = setInterval(() => {
        if (text.charAt(text.length - 1) !== '|') {
            text += '|';
        } else {
            text = text.slice(0, -1);
        }
        textElement.textContent = text; // Actualizar el texto en el elemento HTML
    }, 500);
}

window.addEventListener('scroll', function() {
    //Effect 1
    const textHeader = document.querySelector('.text-header');
    const textHeaderInfo = textHeader.getBoundingClientRect();
    const vhHeight = window.innerHeight;
    const position = textHeaderInfo.top / vhHeight;
    let scale = 1;
    if (position > 0.3) {
        scale = 1;
    } else if (position < 0.99) {
        scale = 1 + (1 * (0.5 - position));
    }
    textHeader.style.transform = `scale(${scale})`;

    //Effect 2
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        var sectionPosition = section.getBoundingClientRect().top;

        if (sectionPosition < vhHeight) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

document.querySelectorAll('.nav-items a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});