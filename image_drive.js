let sign_up_tab = document.querySelector('.sign_up_tab');
let log_in_tab = document.querySelector('.log_in_tab');
let sign_up = document.querySelector('.sign_up');
let log_in = document.querySelector('.log_in');


log_in_tab.onclick = function () {

    log_in_tab.classList.toggle('active_btn');
    sign_up_tab.classList.toggle('active_btn');
    sign_up.classList.toggle('display_none');
    log_in.classList.toggle('display_none')
}


sign_up_tab.onclick = function () {
    log_in_tab.classList.toggle('active_btn');
    sign_up_tab.classList.toggle('active_btn');
    sign_up.classList.toggle('display_none');
    log_in.classList.toggle('display_none')
}



// ===========================================    store data localstrorage  (sign UP)  ============================================
let first_name_input = document.querySelector('.first_name_input');
let last_name_input = document.querySelector('.last_name_input');
let username_input = document.querySelector('.username_input');
let password_input = document.querySelector('.password_input');
let number_input = document.querySelector('.number_input');
let register_btn = document.querySelector('.register');
let sign_up_data = []
let sign_up_notice = document.querySelector('#sign_up_notice')



register_btn.onclick = function () {
    if (username_input.value != "" && password_input.value != "") {
        if (localStorage.getItem(username_input.value) == null) {
            sign_up_data = {
                name: first_name_input.value,
                l_name: last_name_input.value,
                username: username_input.value,
                password: password_input.value,
                number: number_input.value
            }






            sign_up_notice.innerHTML = "registration succes";
            sign_up_notice.style.color = "green";
            setInterval(() => {
                sign_up_notice.innerHTML = ""
            }, 3000);

            localStorage.setItem(username_input.value, JSON.stringify(sign_up_data));
            first_name_input.value = ""
            last_name_input.value = ""
            username_input.value = ""
            password_input.value = ""
            number_input.value = ""
        }
        else {
            sign_up_notice.innerHTML = "userallready exist";
            sign_up_notice.style.color = "red"
            setInterval(() => {
                sign_up_notice.innerHTML = ""
            }, 3000);
        }

    } else {
        sign_up_notice.innerHTML = "please fill data";
        sign_up_notice.style.color = "red"
        setInterval(() => {
            sign_up_notice.innerHTML = ""
        }, 3000);
    }




}


// ===========================================    store data localstrorage  (log in)  ============================================

let log_in_usr_input = document.querySelector('.log_in_usr_input');
let log_in_pass_input = document.querySelector('.log_in_pass_input');
let log_in_btn = document.querySelector('.log_in_btn');
let log_in_notice = document.querySelector('#log_in_notice');



log_in_btn.onclick = function () {



    if (log_in_usr_input.value != "" && log_in_pass_input.value != "") {




        if (localStorage.getItem(log_in_usr_input.value) != null) {

            let list = localStorage.getItem(log_in_usr_input.value)

            let password = JSON.parse(list).password

            if (log_in_pass_input.value == password) {
                window.location = "./page_two/img_page_2.html";
                sessionStorage.setItem("userdata",log_in_usr_input.value)
                log_in_usr_input.value = ""
                log_in_pass_input.value = ""
                
            }
            else {
                log_in_notice.innerHTML = "password not match";
                log_in_notice.style.color = "red";
                setInterval(() => {
                    log_in_notice.innerHTML = ""
                }, 3000);
            }
        }
        else {
            log_in_notice.innerHTML = "username not found";
            log_in_notice.style.color = "red";
            setInterval(() => {
                log_in_notice.innerHTML = ""
            }, 3000);
        }


    } else {
        log_in_notice.innerHTML = "please fill data";
        log_in_notice.style.color = "red";
        setInterval(() => {
            log_in_notice.innerHTML = ""
        }, 3000);
    }
}



