const app = new Vue({
    el:"#app",
        data:{
            slides:[
                {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
        ActiveIndex:0,
        SetActive: false,
    },
    methods: {
         Next(){
             if(this.ActiveIndex===4){
                 this.ActiveIndex=0;
             } else {
                 this.ActiveIndex +=1;
             }
         },
         Prev(){
             if(this.ActiveIndex===0){
                 this.ActiveIndex=4;
             } else {
                 this.ActiveIndex -=1;
             }
         },
    }
})

console.log(slides);