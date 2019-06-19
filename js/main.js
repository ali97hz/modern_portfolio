// Select DOM(document object module : which is basicly like the UI structure
//,,, all the html tags , the attribute ,...) Items

//querySelector mese jquery amal mikone va dar inja mitor classes or ides
//or just elements or ... ro select mikone
//har chio khasti select mikone barat
//masalan inja .xxx be manaye classe xxx hast

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
//ina item haii hastan ke toie menu button vojod darn
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
//overlay ii ke vaqti menu zade mishe miad
//baste shodan menu : false
//baz shodan menu : true
//let ham moteqayere resign sho bod :D
let showMenu = false;

//vaqti ro dokme click shd, tabee toggleMenu ro ejra kn
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  //age showMenu false bod, yani overlaye bottun nabod
  if (!showMenu) {
    //adding a class
    //hame chizaye qadimio close krdim inja
    //va 4 ta item ke qarar bod to menu bashan ro show krdim :)
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    //beacuse the navLinks is more than one
    //and up here we use querySelectorAll
    //so the way to handle this we need to loop through
    //all of the items and then add the show class foreach one
    //also az arrowFunction use krdim so
    //foreach navItems we wanna show the add class
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    //daqiqan az balaii copy krdim va amale ax ro anjam dadim
    //bejaye karaye sakht omadim tasire kar qablemon ke "add"
    //bod ro "remove" krdim :)
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

//hameie kar haii k inja krdim roie DOM menipulation hast
//va hich tasiri roie UI nmizare
//so to handle UI we need sass(css)
//ro bottun menu darim kar mikonim pas mirim be-> _menu.scss
//qesmate "// Rotate Into X With Menu Lines"
