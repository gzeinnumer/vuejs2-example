var app = new Vue({
    el: "#app",
    data : {
        msg : "Hello Zein",
        int1 : 1,
        int2 : 2,
        result : null
    }, 
    methods: {
        sumProcess: function(int3, int4){
            return this.result = this.int1 + this.int2 + int3 + int4
        }
    },
    computed: {
        sum: function(){
            return this.int1 + this.int2            
        },
    },

})