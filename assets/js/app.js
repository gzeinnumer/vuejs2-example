//cuma render text
var app = new Vue({
    el: "#app",
    data : {
        msg : "<i>Hello Zein</i>"
    }
})

//render dengan tag htmlnya yang tereksekusi
var app2 = new Vue({
    el: "#app2",
    data : {
        msg : "<i>Hello Zein</i>"
    }
})

//render dengan tag htmlnya yang diabaikan
var app3 = new Vue({
    el: "#app2",
    data : {
        msg : "<i>Hello Zein</i>"
    }
})
