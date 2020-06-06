Vue.component('blog-post', {
    props : ['post'],
    template : `
        <div> 
            <h3>{{ post.title }}</h3>
            <div v-html="post.content"></div>
        </div>
    `
});

var app = new Vue({
    el: "#app",
    data : {
        msg : "Hello Zein -> Component ",
        posts_ : [
            { id: 1, title: "GZeinNumer1", content:"M. Fadli Zein1"},
            { id: 2, title: "GZeinNumer2", content:"M. Fadli Zein2"},
            { id: 3, title: "GZeinNumer3", content:"M. Fadli Zein3"},
        ]
    }, 
});