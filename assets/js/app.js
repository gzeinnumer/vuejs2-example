Vue.component('greeting', {
    template : "<b>Hay Zein, by component</b>"
});

Vue.component('greeting2', {
    template : `
        <div>
            <b>Hello Zein</b> <br>
            <i>Hello Zein</i> <br>
            <u>Hello Zein</u>
        </div>
    `
});
//petik dekat angka 1 pada keyboard

var app = new Vue({
    el: "#app",
    data : {
        msg : "Hello Zein -> Component ",
    }, 
});

//cari tau kode as key