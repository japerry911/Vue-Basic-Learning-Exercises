new Vue({
    el: '#exercise',
    data: {
        keyboardValue: ''
    },
    methods: {
        showAlert: function() {
            alert('Button clicked!');
        },
        recordKeyboard: function(event) {
            this.keyboardValue = event.target.value;
        }
    }
});