Vue.component('button-center', {
    data : function(){
        return{
            count : 0
        }
    },
    template : "<button v-on:click='count++'>Clicked Me {{ count }} Times</button>"
});

Vue.component('button-center1', {
    template: "#template-1",
    data : function(){
        return{
            count1 : 0
        }
    },
})

var app = new Vue({
    el: "#app",
    data : {
        msg : "Hello Zein -> Component ",
    }, 
});