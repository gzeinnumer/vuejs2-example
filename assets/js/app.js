var app = new Vue({
    el: "#app",
    data : {
        msg : "Hello Zein -> watch untuk memantau sebuah inputan text, jika di masukan value, maka akan memanggil watch dan mengeksekusi function sesuai nama variable",
        km : 0,
        m : 0
    }, 
    watch: {
        km : function(p1){
            this.km = p1
            this.m = p1 * 1000
        },
        m : function(p1){
            this.km = p1/1000
            this.m = p1
        }
    },

})