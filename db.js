class db {

    constructor() {
        this.Contacts = [];
    }

    showContacts() {
        console.log(this.Contacts)
    }
    saveContact(contact) {

        this.Contacts.push(contact);
        let storage = JSON.parse(localStorage.getItem("db"))
        let usualELem = {
            id: contact.id,
            name: contact.name,
            surname: contact.surname,
            phone: contact.phone
        }
        storage.push(usualELem);
        localStorage.setItem("db", JSON.stringify(storage));

    }
    removeContact(contact) {
        this.Contacts.splice(this.Contacts.indexOf(contact), 1)
        var storage = JSON.parse(localStorage.getItem("db"))
        for (let i = 0; i < storage.length; i++) {
            if (storage[i].id == contact.id) {
                storage.splice(i, 1);
            }
        }
        localStorage.setItem("db", JSON.stringify(storage));
    }
    getContact(GUID) {
        for (let item of this.Contacts) {
            if (item.id == GUID)
                return item
        }
        return null;
    }
    loadFromLocalStorage(filename, container) {

        var storageArray = JSON.parse(localStorage.getItem("db"));
        for (let item of storageArray) {
            let tempContact = new Contact(item.name, item.surname, item.phone, item.id);
            tempContact.showYourself(container);
            this.Contacts.push(tempContact);
        }
    }

    loadFromJsonFile(filename, container) {
        this.loadJSON(
            filename,
            function (response, context) {
                var json = JSON.parse(response);
                let outHTML = '';
                for (let defaultContact of json) {
                    let name = defaultContact.name;
                    let surname = defaultContact.surname;
                    let phone = defaultContact.phone;

                    let newContact = new Contact(name, surname, phone);
                    newContact.showYourself(container)
                    context.Contacts.push(newContact)
                }


                localStorage.setItem("db", JSON.stringify(context.Contacts));
            }
        )
    };
    loadJSON(filename, callback) {
        var context = this;
        if (window.location.href.indexOf("file:///") < 0) {
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', filename, true);
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                    console.log(xobj.responseText);
                    callback(xobj.responseText, context);
                }
            };
            xobj.send(null);
        } else {
            let notLocalhostOpening = [{
                "name": "Аполлинария ",
                "surname": "Лапина ",
                "phone": "89453652635"
            }, {
                "name": "Екатерина ",
                "surname": "Ивановна ",
                "phone": "89895645328"
            }, {
                "name": "Майя ",
                "surname": "Анатольевна ",
                "phone": "89176983147"
            }, {
                "name": "Галактион",
                "surname": "Сергеевич",
                "phone": "89003225687"
            }, {
                "name": "Мстислава",
                "surname": "Сергеевна ",
                "phone": "89745632145"
            }, {
                "name": "Алёна ",
                "surname": "Вячеславовна ",
                "phone": "89093007256"
            }, {
                "name": "Жанна ",
                "surname": "Тарасовна ",
                "phone": "89745632102"
            }]
            notLocalhostOpening = JSON.stringify(notLocalhostOpening);
            callback(notLocalhostOpening, context);
        }

    }


}