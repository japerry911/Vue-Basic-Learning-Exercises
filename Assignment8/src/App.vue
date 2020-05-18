<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click='selectedColor = "app-blue"'>Load Blue Template</button>
                <button class="btn btn-success" @click='selectedColor = "app-green"'>Load Green Template</button>
                <button class="btn btn-danger" @click='selectedColor = "app-red"'>Load Red Template</button>
                <hr>
                <component :is='selectedColor'>
                    <span slot='content'>{{ content[selectedColor] }}</span>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selectedColor: 'app-blue',
                content: {
                    'app-blue': 'BLUE',
                    'app-green': 'GREEN',
                    'app-red': 'RED'
                }
            };
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
