<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server
                v-for='server in servers'
                :key='server.id'
                :server='server'
            ></app-server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue'
    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'normal' },
                    { id: 2, status: 'critical' },
                    { id: 3, status: 'unknown' },
                    { id: 4, status: 'normal' }
                ]
            };
        },
        components: {
            appServer: Server
        }
    };
</script>

<style>

</style>
