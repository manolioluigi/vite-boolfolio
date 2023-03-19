<script>
    export default {
        name: 'ThankYou'
    }
</script>

<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-12 my-5 py-5 text-center">
                <h2>Grazie per averci contattato!</h2>
            </div>
            <p class="text-center">Puoi continuare a visualizzare i nostri progetti cliccando sul seguente link:</p>
            <router-link :to="{name: 'Portfolio'}" class="btn btn-sm btn-success portfolio">
                Vedi tutti i progetti
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .portfolio{
        width: fit-content;
    }
</style>