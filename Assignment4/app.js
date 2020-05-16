new Vue({
    el: '#exercise',
    data: {
        classShrink: false,
        classToAttach: 'pink',
        isVisible: false,
        boolClass: '',
        progressBar: {
            width: '0px',
            backgroundColor: 'red'
        }
    },
    computed: {
        effectClass: function() {
            return {
                shrink: this.classShrink,
                highlight: !this.classShrink
            };
        }
    },
    methods: {
        startEffect: function() {
            var vm = this;

            setInterval(function() {
                vm.classShrink = !vm.classShrink;
            }, 2000);
        },
        startProgress: function() {
            var vm = this;
            var width = 0;

            setInterval(function() {
                width = width + 10;
                vm.progressBar.width = width + 'px';
            }, 500);
        }
    }
});