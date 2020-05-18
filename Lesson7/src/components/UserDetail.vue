<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }} - {{ switchName() }}</p>
        <p>User Age: {{ age }}</p>
        <button @click='resetName'>Reset Name</button>
        <button @click='resetFn()'>Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: {
            name: {
                type: String,
                required: false,
                default: 'Sky'
            },
            resetFn: {
                type: Function
            },
            age: {
                type: Number
            }
        },
        methods: {
            switchName() {
                return this.name.split('').reverse().join('');
            },
            resetName() {
                this.name = 'Jack';
                this.$emit('nameWasReset', this.name);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', age => {
                this.age = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
