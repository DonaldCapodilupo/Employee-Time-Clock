/*jshint esversion: 6 */
/* global console*/

const employees = {
    "0000000001": "Nick",
    "0000000002": "Keith",
    "0000000003": "Chris",
    "0000000004": "Dragan",
    "0000000005": "Dave",
    "0000000006": "Connor",
    "0000000007": "Donald",
    "0000000008": "Shayne",
};



function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (hours > 12) {
        hours = hours - 12;
    }


    var t_str = hours + ":" + minutes + ":" + seconds + " ";
    if (hours > 11) {
        t_str += "PM";
    } else {
        t_str += "AM";
    }
    document.getElementById('time_span').innerHTML = t_str;

}

function punch_In_User() {

    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();


    if (hours > 12) {
        hours = hours - 12;
    }


    var t_str = hours + ":" + minutes + ":" + seconds + " ";
    if (hours > 11) {
        t_str += "PM";
    } else {
        t_str += "AM";
    }



    let user_input = document.getElementById("employee_id").value;

    const confirmation_div = document.getElementById("Confirmation-Div");
    const confirmation_prompt = document.getElementById("Confirmation-Prompt-Div")

    //Checks to see if user input is in the verified employees Object.
    if (user_input && employees[user_input]) {
        console.log("Logging in " + employees[user_input]);
        present_employees.push(employees[user_input]);
        confirmation_div.innerHTML +=

            '<input type="text" name="' + employees[user_input] + '" id="" value="'+ t_str+'" hidden>';

        confirmation_prompt.innerHTML +=
            employees[user_input] + ' has punched in at ' + t_str + '<br />';


    } else {
        console.log(user_input + " is not a valid user number");
    }


}


function setupHTML() {

    var input = document.getElementById("employee_id");
    input.addEventListener("keypress", function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            punch_In_User();
        }
    });
}


