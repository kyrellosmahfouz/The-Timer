// Start Header Menu
var menu_icon = document.querySelector("#menu_icon")
var header_menu = document.querySelector("#header_menu")
function display_menu() {
    menu_icon.onclick = function () {
        header_menu.style.display = "block"
        menu_icon.onclick = function () {
            header_menu.style.display = "none"
            display_menu()
        }
    }
}
display_menu()
// End Header Menu


var checkbox_for_birthday = document.getElementById("cbfbir")
var birthday_section = document.getElementById("birthday")
checkbox_for_birthday.onclick = birthday_display
function birthday_display() {
    if (checkbox_for_birthday.checked == true) {
        birthday_section.style.display = "flex";
        window.localStorage.birthday_display = true
    } else {
        birthday_section.style.display = "none";
        window.localStorage.birthday_display = false
    }
}

window.onload = _ => {
    if (window.localStorage.birthday_display == "false") {
        birthday_section.style.display = "none"
        checkbox_for_birthday == false
    }
}

// Start Reset Birthday
// var input_birthday = document.getElementById("input_Birthday")
// var Reset_Birthday_Button = document.getElementById("Reset-Birthday-Button")
// Reset_Birthday_Button.addEventListener("click", Reset_Birthday)
// function Reset_Birthday() {
//     birsec = new Date(`${input_birthday.value} 00:00:00`).getTime()
//     console.log(birsec)
//     return birsec
// }
// birsec = Reset_Birthday
// End Reset Birthday

function birthday() {
    var birsec = new Date("Apr 8 , 2023 00:00:00").getTime()

    datenow = new Date().getTime()

    daysleft = Math.floor((birsec - datenow) / 1000 / 60 / 60 / 24);

    document.querySelector("#birdays").innerHTML = daysleft;

    hoursleft = Math.floor((birsec - datenow) % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);

    document.querySelector("#birhours").innerHTML = hoursleft;

    minleft = Math.floor((birsec - datenow) % (1000 * 60 * 60) / 1000 / 60);

    document.querySelector("#birminutes").innerHTML = minleft;

    secleft = Math.floor((birsec - datenow) % (1000 * 60) / 1000);

    document.querySelector("#birseconds").innerHTML = secleft;

    if (daysleft < 0) {
        document.querySelector("#birdays").innerHTML = 0;
        document.querySelector("#birhours").innerHTML = 0;
        document.querySelector("#birminutes").innerHTML = 0;
        document.querySelector("#birseconds").innerHTML = 0;
    }
}

let counter = setInterval(birthday, 1000);

function End_of_the_year() {
    eoty = new Date(" DEC 31,2023 23:59:59 ").getTime()

    datenow = new Date().getTime()

    daysleft = Math.floor((eoty - datenow) / 1000 / 60 / 60 / 24);

    document.querySelector("#eotydays").innerHTML = daysleft;

    hoursleft = Math.floor((eoty - datenow) % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);

    document.querySelector("#eotyhours").innerHTML = hoursleft;

    minleft = Math.floor((eoty - datenow) % (1000 * 60 * 60) / 1000 / 60);

    document.querySelector("#eotyminutes").innerHTML = minleft;

    secleft = Math.floor((eoty - datenow) % (1000 * 60) / 1000);

    document.querySelector("#eotyseconds").innerHTML = secleft;

    if (daysleft < 0) {
        document.querySelector("#eotydays").innerHTML = 0;
        document.querySelector("#eotyhours").innerHTML = 0;
        document.querySelector("#eotyminutes").innerHTML = 0;
        document.querySelector("#eotyseconds").innerHTML = 0;
    }
}

eotytimer = setInterval(End_of_the_year, 1000)