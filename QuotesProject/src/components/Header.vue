<template>
    <div class='row'>
        <div class='col-sm-12'>
            <h3>Quotes Added</h3>
            <div class='progress'>
                <div class='progress'>
                    <div class='progress-bar' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' :style="{width: (totalQuotes / maxQuotes) * 100 + '%'}">
                        {{ totalQuotes }} / {{ maxQuotes }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            totalQuotes: Number,
            maxQuotes: Number
        }
    }
</script>

<style scoped>
</style>
