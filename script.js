var dataBase = new db()
document.addEventListener("DOMContentLoaded", function (e) {
    if (localStorage.getItem("db") == undefined || localStorage.getItem("db") == "") {
        dataBase.loadFromJsonFile("default_contacts.json", document.getElementById("contact_container"));
    } else {
        dataBase.loadFromLocalStorage("default_contacts.json", document.getElementById("contact_container"));
    }

    document.getElementById("add_contact").addEventListener("click", function (e) {
        let name = document.getElementById("add_name").value;
        let surname = document.getElementById("add_surname").value;
        let phone = document.getElementById("add_phone").value;
        let container = document.getElementById("contact_container");


        if (name.length == 0) {
            alert("Имя не может быть пустым")
            return
        }
        if (surname.length == 0) {
            alert("Фамилия не может быть пустой")
            return
        }
        if (phone.length == 0) {
            alert("Телефон не может быть пустым")
            return
        }
        let newContact = new Contact(name, surname, phone);
        newContact.showYourself(container);
        dataBase.saveContact(newContact);

    })
})

function refreshClicks() {
    for (let i of document.querySelectorAll(".close_btn[disabled_clicks=true]")) {
        i.setAttribute("disabled_clicks", false);
        i.addEventListener("click", function () {
            let almostDeadContact = dataBase.getContact(this.closest(".card").id)
            almostDeadContact.killYourself();
            dataBase.removeContact(almostDeadContact);
        })

    }
}