<template>
    <div>
        <input v-model='filterText'>
        <ul>
            <li v-for='fruit in filteredFruits' :key='fruit'>{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [fruitMixin],
        created() {
            console.log('created inside list hook, not a mixin');
        }
    }
</script>

<style scoped>
</style>
