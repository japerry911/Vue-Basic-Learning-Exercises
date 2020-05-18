<template>
    <div class='row'>
        <quote v-for='(quote, index) in quotes' :key='index' @click.native='deleteQuote(index)'>
            {{ quote }}
        </quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue';

    export default {
        props: {
            quotes: {
                type: Array 
            }
        },
        components: {
            quote: Quote
        },
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', index);
            }
        }
    }
</script>

<style scoped>
</style>