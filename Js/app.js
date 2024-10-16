let menuIn = document.querySelector('.menu-in')
let menu = document.querySelector('.menu2')
menuIn.onclick = function(){
    menu.classList.toggle('active')
}

let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let box4 = document.querySelector('.box4')

let line1 = document.querySelector('.line1')
let line2 = document.querySelector('.line2')
let line3 = document.querySelector('.line3')
let line4 = document.querySelector('.line4')

let firstShow1 = document.querySelector('.first-show1')
let firstShow2 = document.querySelector('.first-show2')
let firstShow3 = document.querySelector('.first-show3')
let firstShow4 = document.querySelector('.first-show4')

/* Styling */


let Style1 = {
    background: "#0a121d",
    boxShadow: "0px 0px 10px #219cf3, 3px 3px 1px #00e9de, inset 10px 0px 20px #080a11, inset -96px -30px 100px #090912, inset 6px -26px 120px #0b83ff",
    border: "2px solid transparent"
}
let StyleLineShow = {
    top: "100%",
    opacity: "1",
    transition: ".6s ease-out .3s"
}
let StyleLineHide = {
    top: "50%",
    opacity: "0",
    transition: ".2s ease-out"
}
let styleBoxShow = {
    transform: "translateY(0px)",
    opacity: "1",
    transition: ".6s ease-out .3s",
    zIndex: "1"
}
let styleBoxHide = {
    transform: "translateY(20px)",
    opacity: "0",
    transition: ".2s ease-out",
    zIndex: "-1"
}


/* Styling */


box1.onmouseenter = function() {
    Object.assign(box1.style, Style1);
    box2.style = 'unset'
    box3.style = 'unset'
    box4.style = 'unset'


    Object.assign(line1.style, StyleLineShow);
    Object.assign(line2.style, StyleLineHide);
    Object.assign(line3.style, StyleLineHide);
    Object.assign(line4.style, StyleLineHide);
    
    Object.assign(firstShow1.style, styleBoxShow);
    Object.assign(firstShow2.style, styleBoxHide);
    Object.assign(firstShow3.style, styleBoxHide);
    Object.assign(firstShow4.style, styleBoxHide);
}
box2.onmouseenter = function() {
    box1.style = 'border: 2px solid #666666; box-shadow: unset; background: unset;'
    Object.assign(box2.style, Style1);
    box3.style = 'unset'
    box4.style = 'unset'

    Object.assign(line1.style, StyleLineHide);
    Object.assign(line2.style, StyleLineShow);
    Object.assign(line3.style, StyleLineHide);
    Object.assign(line4.style, StyleLineHide);


    Object.assign(firstShow1.style, styleBoxHide);
    Object.assign(firstShow2.style, styleBoxShow);
    Object.assign(firstShow3.style, styleBoxHide);
    Object.assign(firstShow4.style, styleBoxHide);
}

box3.onmouseenter = function() {
    box1.style = 'border: 2px solid #666666; box-shadow: unset; background: unset;'
    box2.style = 'unset'
    Object.assign(box3.style, Style1);
    box4.style = 'unset'

    Object.assign(line1.style, StyleLineHide);
    Object.assign(line2.style, StyleLineHide);
    Object.assign(line3.style, StyleLineShow);
    Object.assign(line4.style, StyleLineHide);


    Object.assign(firstShow1.style, styleBoxHide);
    Object.assign(firstShow2.style, styleBoxHide);
    Object.assign(firstShow3.style, styleBoxShow);
    Object.assign(firstShow4.style, styleBoxHide);
}

box4.onmouseenter = function() {
    box1.style = 'border: 2px solid #666666; box-shadow: unset; background: unset;'
    box2.style = 'unset'
    box3.style = 'unset'
    Object.assign(box4.style, Style1);

    Object.assign(line1.style, StyleLineHide);
    Object.assign(line2.style, StyleLineHide);
    Object.assign(line3.style, StyleLineHide);
    Object.assign(line4.style, StyleLineShow);

    Object.assign(firstShow1.style, styleBoxHide);
    Object.assign(firstShow2.style, styleBoxHide);
    Object.assign(firstShow3.style, styleBoxHide);
    Object.assign(firstShow4.style, styleBoxShow);
}




/* Project */

let design1 = document.getElementById("design1")
let design2 = document.getElementById("design2")
let design3 = document.getElementById("design3")
let design4 = document.getElementById("design4")
let design5 = document.getElementById("design5")


let selectSquare = document.querySelector('.select-square')

let forFigma = document.querySelector('.for-figma')
let forWordpress = document.querySelector('.for-wordpress')
let forCss = document.querySelector('.for-css')
let forPython = document.querySelector('.for-python')
let forJavascript = document.querySelector('.for-javascript')


design1.onmouseenter = function() {
    selectSquare.style.top = '8%'


    forFigma.classList.add('java-figma')
    forWordpress.classList.remove('java-wordpress')
    forCss.classList.remove('java-css')
    forPython.classList.remove('java-python')
    forJavascript.classList.remove('java-javascript')
} 


design2.onmouseenter = function() {
    selectSquare.style.top = '28%'


    forFigma.classList.remove('java-figma')
    forWordpress.classList.add('java-wordpress')
    forCss.classList.remove('java-css')
    forPython.classList.remove('java-python')
    forJavascript.classList.remove('java-javascript')
}


design3.onmouseenter = function() {
    selectSquare.style.top = '48%'

    
    forFigma.classList.remove('java-figma')
    forWordpress.classList.remove('java-wordpress')
    forCss.classList.add('java-css')
    forPython.classList.remove('java-python')
    forJavascript.classList.remove('java-javascript')
}


design4.onmouseenter = function() {
    selectSquare.style.top = '68%'


    forFigma.classList.remove('java-figma')
    forWordpress.classList.remove('java-wordpress')
    forCss.classList.remove('java-css')
    forPython.classList.add('java-python')
    forJavascript.classList.remove('java-javascript')
}


design5.onmouseenter = function() {
    selectSquare.style.top = '88%'


    forFigma.classList.remove('java-figma')
    forWordpress.classList.remove('java-wordpress')
    forCss.classList.remove('java-css')
    forPython.classList.remove('java-python')
    forJavascript.classList.add('java-javascript')
} 


/* ____________MENU___________ */

let lin1 = document.getElementById('lin1')
let lin2 = document.getElementById('lin2')
let lin3 = document.getElementById('lin3')
let lin4 = document.getElementById('lin4')

let cardScale = document.querySelector('.card-scale')
/* cardScale = window.matchMedia("(max-width: 700px)") */


lin1.onmouseenter = function(){
    cardScale.style.width = '0'
    cardScale.style.height = '0'
    cardScale.style.top = '38%'
    cardScale.style.left = '61%'
}
lin1.onmouseleave = function(){
    cardScale.style = 'unset'
}


lin2.onmouseenter = function(){
    cardScale.style.width = '0'
    cardScale.style.height = '0'
    cardScale.style.top = '38%'
    cardScale.style.left = '61%'
}
lin2.onmouseleave = function(){
    cardScale.style = 'unset'
}

lin3.onmouseenter = function(){
    cardScale.style.width = '0'
    cardScale.style.height = '0'
    cardScale.style.top = '38%'
    cardScale.style.left = '61%'
}
lin3.onmouseleave = function(){
    cardScale.style = 'unset'
}

lin4.onmouseenter = function(){
    cardScale.style.width = '0'
    cardScale.style.height = '0'
    cardScale.style.top = '38%'
    cardScale.style.left = '61%'
}
lin4.onmouseleave = function(){
    cardScale.style = 'unset'
}

/* scroll function */

const fourBox = document.querySelector('.four-box');
const detail = document.querySelector('.detail');
const textAll = document.querySelectorAll('.text');
const textFlex = document.querySelector('.text-flex');
const squareScroll1 = document.querySelector('.square1');
const squareScroll2 = document.querySelector('.square2');
const menuProject = document.querySelector('.menu-project');
const textCenter = document.querySelector('.text-center');
const company = document.querySelector('.grid');
const form = document.getElementById('form')
const footer = document.querySelector('.footer');
const logoShow = document.querySelector('.logo-show');




window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
   const triggerBottom = (window.innerHeight / 4) * 3;

    const scroll1 = fourBox.getBoundingClientRect().top;
    const scroll2 = detail.getBoundingClientRect().top;
    const scroll3 = textFlex.getBoundingClientRect().top;
    const scroll5 = squareScroll1.getBoundingClientRect().top;
    const scroll6 = squareScroll2.getBoundingClientRect().top;
    const scroll7 = menuProject.getBoundingClientRect().top;
    const scroll8 = textCenter.getBoundingClientRect().top;
    const scroll9 = company.getBoundingClientRect().top;
    const scroll10 = form.getBoundingClientRect().top;
    const scroll11 = footer.getBoundingClientRect().top;
    const scroll12 = logoShow.getBoundingClientRect().top;
    
    if (scroll3 < triggerBottom) {
        textFlex.classList.add('show');
    } else {
        textFlex.classList.remove('show');
    }


    if (scroll1 < triggerBottom) {
    fourBox.classList.add('show');
    } else {
    fourBox.classList.remove('show');
    }


    if (scroll2 < triggerBottom) {
    detail.classList.add('show');
    } else {
    detail.classList.remove('show');
    }


    textAll.forEach((text) => {
        const scroll4 = text.getBoundingClientRect().top;
  
        if (scroll4 < triggerBottom) {
           text.classList.add('show');
        } else {
            text.classList.remove('show');
        }
    });


    if (scroll5 < triggerBottom) {
        squareScroll1.classList.add('show');
    } else {
        squareScroll1.classList.remove('show');
    }

    if (scroll6 < triggerBottom) {
        squareScroll2.classList.add('show');
    } else {
        squareScroll2.classList.remove('show');
    }

    if (scroll7 < triggerBottom) {
        menuProject.classList.add('show');
    } else {
        menuProject.classList.remove('show');
    }

    if (scroll8 < triggerBottom) {
        textCenter.classList.add('show');
    } else {
        textCenter.classList.remove('show');
    }

    if (scroll9 < triggerBottom) {
        company.classList.add('show');
    } else {
        company.classList.remove('show');
    }

    if (scroll10 < triggerBottom) {
        form.classList.add('show');
    } else {
        form.classList.remove('show');
    }

    if (scroll11 < triggerBottom) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }

    if (scroll12 < triggerBottom) {
        logoShow.classList.add('show');
    } else {
        logoShow.classList.remove('show');
    }
}
