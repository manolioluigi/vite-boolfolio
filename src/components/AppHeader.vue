<script>
    export default {
        name: 'AppHeader',
        data(){
            return{
                menuItems:[
                    {
                        label: 'Homepage',
                        routeName: 'homepage'
                    },
                    {
                        label: 'Portfolio',
                        routeName: 'portfolio'
                    },
                ],
            }
        }
    }
</script>

<template>
    <nav class="navbar navbar-expand-md background-nav">
        <div class="container">
            <div class="navbar-brand">
                <img src="/img/logo.png" class="img-fluid logo" alt="logo">
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                        <router-link :to="{name: item.routeName}" class="nav-link text-white">
                            {{ item.label }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    .background-nav{
        background-color: rgb(3,100,3);
    }

    .logo{
        width: 200px;
    }
</style>