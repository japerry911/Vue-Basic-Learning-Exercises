new Vue({
    el: '#exercise',
    data: {
        name: 'Jack',
        age: 25,
        imageLink: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg'
    },
    methods: {
        random: function() {
            return Math.random();
        }
    }
});