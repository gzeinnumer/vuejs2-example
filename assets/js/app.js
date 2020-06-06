var app = new Vue({
    el: "#app",
    data : {
        msg : "Hello Zein -> Directive v-on",
        message : ""
    }, 
    methods: {
        showAlert: function(){
            alert('Alert!');
        }
    },

})