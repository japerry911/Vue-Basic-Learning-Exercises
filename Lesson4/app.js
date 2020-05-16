new Vue({
    el: '#app',
    data: {
        attachRed: false,
        color: 'green',
        attachBlue: false,
        colorGray: 'gray',
        colorPink: 'pink'
    },
    computed: {
        divClasses: function() {
            return {
                red: this.attachRed,
                black: !this.attachRed
            };
        },
        myStyle: function() {
            return {
                backgroundColor: this.colorPink,
                width: '100px', 
                height: '100px'
            };
        }
    }
});