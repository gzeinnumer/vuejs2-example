var app = new Vue({
    el: "#app",
    data : {
        msg : "Hello Zein -> Directive v-on",
        content : "",
        vehicles : ["mobil","motor","sepeda"]
    }, 
    methods: {
        addVehicles: function(){
            this.vehicles.push(this.content);
            this.content = "";
        },
        removeVehicle : function(index){
            this.vehicles.splice(index, 1);
        }
    },
})

//cari tau kode as key