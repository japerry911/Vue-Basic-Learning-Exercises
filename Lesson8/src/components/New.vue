<template>
    <div class='box'>
        <h3>New Quote</h3>
        <button @click='counter++'>Click me!</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>   
    export default {
        data: function() {
            return {
                counter: 0
            };
        },
        deactivated() {
            console.log('deactivated');
        },
        activated() {
            console.log('activated');
        }
    };
</script>
