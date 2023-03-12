<script>
    export default {
        name: 'notfound'
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 my-5 py-5 text-center">
                <h2>Pagina non trovata</h2>
            </div>
            <router-link :to="{name: 'portfolio'}" class="btn btn-sm btn-success">
                Vedi tutti i progetti
            </router-link>
        </div>
    </div>
</template>

<style>

</style>