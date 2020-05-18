<template>
    <div class="container">
        <app-header :totalQuotes='quotes.length' :maxQuotes='maxQuotes'></app-header>
        <new-quote @quoteAdded='newQuote'></new-quote>
        <quote-grid :quotes='quotes' @quoteDeleted='deleteQuote'></quote-grid>
        <div class='row'>
            <div class='col-sm-12 text-center'>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';

    export default {
        data: function() {
            return {
                maxQuotes: 10,
                quotes: ['Just a Quote to see something']
            };
        },
        components: {
            quoteGrid: QuoteGrid,
            newQuote: NewQuote,
            appHeader: Header
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) return alert('Please delete a quote before adding a new one.');
                this.quotes.push(quote);
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
