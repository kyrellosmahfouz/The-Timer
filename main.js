function static() {
    birsec = new Date("April 8 , 2023 00:00:00").getTime()

    datenow = new Date().getTime()

    daysleft = Math.floor((birsec - datenow) / 1000 / 60 / 60 / 24);

    document.querySelector("#days").innerHTML = daysleft;

    hoursleft = Math.floor((birsec - datenow) % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);

    document.querySelector("#hours").innerHTML = hoursleft;

    minleft = Math.floor((birsec - datenow) % (1000 * 60 * 60) / 1000 / 60);

    document.querySelector("#minutes").innerHTML = minleft;

    secleft = Math.floor((birsec - datenow) % (1000 * 60) / 1000);

    document.querySelector("#seconds").innerHTML = secleft;
}

let counter = setInterval(static, 1000);