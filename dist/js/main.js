// Select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
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
