var app = new Vue({
    el: "#app",
    data : {
        msg : "Hello Zein -> Directive v-on",
        message : ""
    }, 
    methods: {
        escKey : function(){
            this.message = "escKey"
        },
        spaceKey : function(){
            this.message = "spaceKey"
        },
        upKey : function(){
            this.message = "upKey"
        },
        downKey : function(){
            this.message = "downKey"
        },
        aKey : function(){
            this.message = "'a' Key"
        },
    },
})

//cari tau kode as key