var app = new Vue({
    el: "#app",
    data : {
        msg : "Hello Zein",
        int1 : 1,
        int2 : 2
    }, 
    computed: {
        sum: function(){
            return this.int1 + this.int2            
        },
    },
})