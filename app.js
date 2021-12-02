console.log("hello");

const timeArray = []

let submit = document.getElementById("submit");
submit.addEventListener("click", savedata);



function savedata() {
    var today = new Date();

    let a = Math.floor(document.getElementById("hour").value);
    let b = Math.floor(document.getElementById("minute").value);
    let c = 0;
    var time = new Date(today.getFullYear(), today.getMonth(), today.getDate(), a, b, c);

    timeArray.push(time);
    timeArray.sort();

    let html = [];
    for (let i = 0; i < timeArray.length; i++) {
        html += `
    <li>${timeArray[i]}</li>
    `
    }
    html = "<ul>" + html + "</ul>";

    document.getElementById("list_of_times").innerHTML = html;
}

// setInterval and setTimeout
setInterval(checker, 1000);

function checker() {
    
    let now = new Date();

    let flag = false;

    for (let i = 0; i < timeArray.length; i++) {

        if (now.getMinutes() == timeArray[i].getMinutes() && now.getHours() == timeArray[i].getHours() ) {
            flag = true;
            break ;
        }
    }


    if (flag == true) {
        console.log("ALARM RINGING !!!");

        var snd = new Audio("audio.wav");
        snd.play();

        for (let i = 0; i < timeArray.length; i++) {
            if (timeArray[i].getMinutes() == now.getMinutes() && timeArray[i].getHours()==now.getHours() ) {
                timeArray.splice(i, 1);
                break ;
            }
        }
        let html = [];
        for (let i = 0; i < timeArray.length; i++) {
            html += `
        <li>${timeArray[i]}</li>
        `
        }
        html = "<ul>" + html + "</ul>";

        document.getElementById("list_of_times").innerHTML = html;


    }
}