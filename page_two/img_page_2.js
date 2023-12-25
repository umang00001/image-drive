

let log_out_btn = document.querySelector('.log_out_btn');
let username = sessionStorage.getItem("userdata");

if (username == null) {
    window.location = "../index.html"
}

// profile name
let profile_name = JSON.parse(localStorage.getItem(username)).name
let welcome_name = document.querySelector('.welcome_name');
welcome_name.innerHTML = "welcome" + " " + profile_name

// log out

log_out_btn.onclick = function () {
    this.innerHTML = "please wait...."
    setTimeout(function () {
        sessionStorage.removeItem("userdata")
        window.location = "../index.html"
    }, 1000)

}


// ===========      upload      ======================
let imgurl;
let all_image = []
let img_name;

let upload_input = document.querySelector('.file');

upload_input.onchange = function () {

    let freader = new FileReader();
    freader.onload = function (e) {
        imgurl = e.target.result


        img_name = upload_input.files[0].name

    }
    freader.readAsDataURL(upload_input.files[0]);

}


// store data
let upload_btn = document.querySelector('.upload_btn');
let container = document.querySelector('.container');


upload_btn.onclick = function () {

    if (upload_input.value != "") {


        all_image.push({
            name: img_name,
            imgurl: imgurl
        })
        localStorage.setItem(username + "_list", JSON.stringify(all_image));
        update_data()
        upload_input.value = ""
    } else {
        alert("select image")
    }


}

if (localStorage.getItem(username + "_list") != null) {
    all_image = JSON.parse(localStorage.getItem(username + "_list"));

}
function update_data() {

    container.innerHTML = ""
    all_image.forEach((task, index) => {

        container.innerHTML +=
            `
         <div class="card" index="${index}" >
            <div class="card_header">
                <p>${task.name}</p>
            </div>
            <img src="${task.imgurl}" >
            <div class="footer">
                <button class="view_btn">VIEW</button>
                <button class="delet_btn">delet</button>
            </div>
           </div>`


    });

    // start delet code


    let delet_btn = document.querySelectorAll(".delet_btn");

    let i;
    for (i = 0; i < delet_btn.length; i++) {
        delet_btn[i].onclick = function () {
            let card = this.parentElement.parentElement


            // let index = card.getAttribute("index")

            // all_image.splice(index, 1)
            // localStorage.setItem(username + "_list", JSON.stringify(all_image))
            let index = card.getAttribute("index")
            card.remove();
            all_image.splice(index, 1)

            update_data()
            localStorage.setItem(username + "_list", JSON.stringify(all_image));

        }
    }





    // view code 
    let view_btn = document.querySelectorAll('.view_btn');
    let view_div = document.querySelector('.view_div');



    for (i = 0; i < view_btn.length; i++) {
        view_btn[i].onclick = function () {
            view_div.innerHTML = ""
            let parent = this.parentElement.parentElement
            view_div.classList.toggle('display_none');

            let div_tag = document.createElement("div");
            div_tag.classList = "heading_image";
            let p_tag = document.createElement("p");
            p_tag.innerHTML = "image name"
            let span_tag = document.createElement("span");
            span_tag.classList = "x_mark"
            span_tag.innerHTML = `<i class="fa-solid fa-xmark">`
            let image_src = parent.querySelector('img').src
            let img = document.createElement('img');
            img.classList.add = "";
            div_tag.append(p_tag)
            div_tag.append(span_tag)
            view_div.append(div_tag)
            view_div.append(img);

            document.body.classList.add("black_screen")

            img.src = image_src

            document.body.style.overflowY = "hidden";

            span_tag.onclick = function () {
                view_div.classList.toggle("display_none");
                document.body.classList.toggle("black_screen")
                document.body.style.overflowY = "visible";
            }
        }
    }







}
update_data()


// ==================     profile picture  ================
let profile_pic = document.querySelector('.profile_pic')
let profile_pic_input = document.querySelector('.profile_pic_input');
let img_url;


let str_img = []
profile_pic_input.onchange = function () {


    let freader = new FileReader();
    freader.onload = function (e) {
        img_url = e.target.result
        profile_pic.src = img_url



        let data = [{
            store_img: img_url
        }]

        localStorage.setItem(username + "_profile", JSON.stringify(data))




    }
    freader.readAsDataURL(profile_pic_input.files[0])




}
if (localStorage.getItem(username + "_profile") != null) {
    let image_data = JSON.parse(localStorage.getItem(username + "_profile"));

    image_data.forEach(task => {

        let store_div = document.querySelector('.store_div');
        store_div.innerHTML = ""
        store_div.innerHTML = `
            <div class="image_div">
            <img class="profile_pic" src="${task.store_img}" width="70px" alt="">
            </div>`

    })

}



