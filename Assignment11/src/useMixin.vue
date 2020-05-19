<template>
    <div>
        <h1>Filters & Mixins</h1>
        <!-- EXERCISE 4 -->

        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <p>{{ text | reverseText }}</p>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p>{{ text | appendLength }}</p>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <p>{{ reverseTextComputed }}</p>
        <p>{{ appendLengthComputed }}</p>
    </div>
</template>

<script>
    import { assignmentMixin } from './assignmentMixin';    

    export default {
        mixins: [assignmentMixin]
    }
</script>

<style scoped>
</style>