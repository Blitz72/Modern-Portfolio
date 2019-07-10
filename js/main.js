// Quotes and text

const quotes = [
    {
        quote: "If I have seen further it is by standing on the shoulders of giants.",
        author: "Isaac Newton"
    },
    {
        quote: "Be so good they can't ignore you.",
        author: "Steve Martin"
    },
    {
        quote: "If you want to build a ship, don't drum up people to collect wood and don't assign them tasks and work, but rather teach them to long for the endless immensity of the sea.",
        author: "Antoine de Saint-Exupery"
    },
    {
        quote: "He who receives an idea from me receives it without lessening me, as he who lights his candle at mine receives light without darkening me.",
        author: "Thomas Jefferson"
    },
    {
        quote: "The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        author: "Tom Cargill"
    },
    {
        quote: "Failure is only the opportunity to begin again more intelligently.",
        author: "Henry Ford"
    },
    {
        quote: "Do well by doing good.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Hardware eventually fails. Software eventually works.",
        author: "Michael Hartung"
    },
    {
        quote: "Far and away the best prize that life has to offer is the chance to work hard at work worth doing.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "I am driven by two main philosophies, know more today about the world than I knew yesterday. And lessen the suffering of others. You'd be surprised how far that gets you.",
        author: "Neil deGrasse Tyson"
    },
    {
        quote: "I do not think there is any thrill that can go through the human heart like that felt by the inventor as he sees some creation of the brain unfolding to success.",
        author: "Nikola Tesla"
    }
];

// Select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const bioQuote = document.querySelector('#bio-quote');
const bioQuoteAuthor = document.querySelector('#bio-quote-author');
// const mouseOverEmail = document.querySelector('#email-text');

// Set Initial State of Menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
// mouseOverEmail.addEventListener('mousemove', getXY);
// mouseOverEmail.addEventListener('mouseleave', mouseLeave());

function toggleMenu() {
    if (!showMenu) {

        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        // Set Menu State
        showMenu = true;

    } else {

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        // Set Menu State
        showMenu = false;

    }
}

// Insert random quote into about.html
let indexer = Math.floor(Math.random() * quotes.length);

bioQuote.innerHTML = quotes[indexer].quote;
bioQuoteAuthor.innerHTML = quotes[indexer].author;

function emailTextCopy() {

    let myText = document.querySelector('#email-text').firstChild.nodeValue;
    console.log(myText);
    document.execCommand("copy");

}

function gmailTextCopy() {

    let myText = document.getElementById('gmail-text').innerHTML;
    console.log(myText);
    document.execCommand("copy", true, myText);

}


// function getXY() {
//     let originalBG = $("#email-text").css("background-color");
//     console.log(originalBG);
//     let x = event.pageX -this.offsetLeft;
//     let y = event.pageY - this.offsetTop;
//     let xy = x + ' ' + y;
//     console.log("X: " + x + ", Y: " + y);

//     bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", 35, from(rgba(0,0,0,0.5)), to(rgba(255,255,255,0.0))), " + originalBG;
//     bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, rgba(0, 0, 0, 0) 0%, " + originalBG + " " + 5 + "px)";
    
//     $(this)
//       .css({ background: bgWebKit })
//       .css({ background: bgMoz });
// }

// function mouseLeave() {
//     let originalBG = $("#email-text").css("background-color");
//     $(this).css({ background: originalBG });
// }
