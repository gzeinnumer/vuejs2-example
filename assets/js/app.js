

Vue.component('button-center', {
    data : function(){
        return{
            count : 0
        }
    },
    template : "<button v-on:click='count++'>Clicked Me {{ count }} Times</button>"
});

var app = new Vue({
    el: "#app",
    data : {
        msg : "Hello Zein -> Component ",
    }, 
});