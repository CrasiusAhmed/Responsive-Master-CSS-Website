let User = document.getElementById('user')
let userName = document.getElementById('username')

function process(e) {
    userName.value = e.target.value.replace(/\s/g, '-');
}
User.addEventListener("input", process);




let Name = document.getElementById('name')
let profileName = document.getElementById('profile-name')

function process2(e) {
    profileName.value = e.target.value.replace(/\s/g, '-');
}
Name.addEventListener("input", process2);




let lastName = document.getElementById('lastname')
let profileLastName = document.getElementById('profile-lastname')

function process3(e) {
    profileLastName.value = e.target.value.replace(/\s/g, '-');
}
lastName.addEventListener("input", process3);





let Email = document.getElementById('email')
let profileEmail = document.getElementById('profile-email')

function process4(e) {
    profileEmail.value = e.target.value.replace(/\s/g, '-');
}
Email.addEventListener("input", process4);


let User2 = document.getElementById('user2')
let userName2 = document.getElementById('username2')

function process5(e) {
    userName2.value = e.target.value.replace(/\s/g, '-');
}
User2.addEventListener("input", process5);


let bg1 = document.querySelector('.bg-color1')
let bg2 = document.querySelector('.bg-color2')
let bg3 = document.querySelector('.bg-color3')
let bg4 = document.querySelector('.bg-color4')

let contact = document.querySelector('.contact')
let contact2 = document.querySelector('.contact2')


let circle1 = document.querySelector('.circle1')
let circle2 = document.querySelector('.circle2')


let profile = document.querySelector('.profile')
let profile2 = document.querySelector('.profile2')

let form1 = document.getElementById('form1')
let form2 = document.getElementById('form2')

function signIn()
{
    bg1.style = "right: -60%;"
    bg2.style = "left: -60%;"
    bg3.style = "right: 0%;"
    bg4.style = "left: 0%;"

    circle1.style = "opacity: 0;"
    circle2.style = "opacity: 1;"

    profile.style = "transform: translateX(-250%);"
    profile2.style = "transform: translateX(0%);"

    contact.style = "z-index: -2;"
    contact2.style = "z-index: 2;"

    form1.style = "transform: translateX(250%);"
    form2.style = "transform: translateX(0%);"
}

function signUp()
{
    bg1.style = "right: 0%;"
    bg2.style = "left: 0%;"
    bg3.style = "right: -60%;"
    bg4.style = "left: -60%;"

    circle1.style = "opacity: 1;"
    circle2.style = "opacity: 0;"

    profile.style = "transform: translateX(0%);"
    profile2.style = "transform: translateX(250%);"

    contact.style = "z-index: 2;"
    contact2.style = "z-index: -2;"

    form1.style = "transform: translateX(0%);"
    form2.style = "transform: translateX(-250%);"
}