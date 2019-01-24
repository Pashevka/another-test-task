class Contact {

    constructor(name, surname, phone, id = null) {
        id == null ? this.id = this.getGUID() : this.id = id;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
    }
    showYourself(container) {
        container.insertAdjacentHTML("afterbegin", this.getHtml());
        refreshClicks();

    }
    killYourself() {
        document.getElementById(this.id).remove();
    }
    getGUID() {
        var array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0];
    }
    getHtml() {
        let tempHTML = '';
        tempHTML += '   <div id="' + this.id + '" class="card">';
        tempHTML += '               <div class="contact row ">';
        tempHTML += '                   <div class="contact__name col-6 col-sm-3 col-xs-3 col-xl-3 pt-1 pb-1">';
        tempHTML += '                       <span class="pl-3">';
        tempHTML += '                           ' + this.name + '';
        tempHTML += '                       </span>';
        tempHTML += '                   </div>';
        tempHTML += '                   <div class="contact__surname col-6 col-sm-4 col-xs-4 col-xl-4 pt-1 pb-1">';
        tempHTML += '                       <span class="pl-2">';
        tempHTML += '                          ' + this.surname + '';
        tempHTML += '                       </span>';
        tempHTML += '                   </div>';
        tempHTML += '                   <div class="contact__phone col-12 col-sm-3 col-md-3 col-xl-3 pt-1 pb-1">';
        tempHTML += '                       <a href="tel:' + this.phone + '" class="pl-2 ">';
        tempHTML += '                           ' + this.phone + '';
        tempHTML += '                       </a>';
        tempHTML += '                   </div>';
        tempHTML += '                   <div class="contact__close col-12 col-sm-2 col-md-2 col-xl-2">';
        tempHTML += '                       <div class="bg-light btn btn-warning m-0 p-0 text-center w-100">';
        tempHTML += '                           <i class="btn close_btn fa fa-close h-100 m-0 p-0 pb-2 pt-2 w-100" disabled_clicks=true aria-hidden="true"></i>';
        tempHTML += '                       </div>';
        tempHTML += '                   </div>';
        tempHTML += '               </div>';
        tempHTML += '           </div>';
        return tempHTML;
    }


}