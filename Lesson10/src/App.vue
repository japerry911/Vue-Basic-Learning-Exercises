<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Strong Text</strong>'"></p>
            </div>
            <hr>
            <div class='row'>
                <div class='col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3'>
                    <h1>Custom Directives</h1>
                    <p v-highlight:background.delayed="'red'">Color this</p>
                </div>
            </div>
            <div class='row'>
                <div class='col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3'>
                    <h1>Local Custom Directives</h1>
                    <p v-localHighlight:background.delayed.blink="{mainColor: 'red', secondColor: 'yellow', delay: 500}">Color this</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            localHighlight: {
                bind(el, binding, vnode) {
                    //el.style.backgroundColor = 'limegreen';
                    var delay = 0;

                    if (binding.modifiers['delayed']) {
                        delay = 3000;
                    }

                    if (binding.modifiers['blink']) {
                        setTimeout(() => {
                            var bool = true;
                            setInterval(() => {
                                if (binding.arg === 'background') {
                                    el.style.backgroundColor = bool ? binding.value.mainColor : binding.value.secondColor;
                                }
                                bool = !bool;
                            }, binding.value.delay)
                        }, delay);
                    } else {
                        setTimeout(() => {
                            if (binding.arg === 'background') {
                                el.style.backgroundColor = binding.value;
                            }
                        }, delay);
                    }
                }
            }
        }
    }
</script>

<style>

</style>
