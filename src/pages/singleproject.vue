<script>
import {store} from '../store.js';
import axios from 'axios';

    export default {
        name: 'SingleProject',
        data(){
            return{
                store,
                project: null,
                loading: true,
            }
        },
        mounted(){
            this.loading = true;
            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
                if(response.data.success){
                    this.project = response.data.project
                    this.loading = false
                }else{
                    this.$router.push({name: 'NotFound'})
                }
            });
        }
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center" v-if="loading">
                <div class="my-5 loader"></div>
            </div>
            <div v-else class="col-12">
                <div class="d-flex justify-content-end my-5">
                    <router-link :to="{name: 'Portfolio'}" class="btn btn-sm btn-success">
                        Torna ai progetti
                    </router-link>
                </div>
                <div class="card mt-5">
                    <div class="card-img-top">
                        <div class="cover-img">
                            <img :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/300/200'" :alt="project.title" class="img-fluid">
                        </div>
                    </div>
                    <div class="card-title mt-3">
                       <h2 class="p-4">{{ project.title }}</h2> 
                    </div>
                    <div class="card-body">
                        <em v-if="project.type"> 
                            <strong>Tipo: </strong> 
                            <span  v-if="project.type">
                                {{ project.type.name }}
                            </span>
                            <span v-else>
                                Nessun tipo
                            </span>
                        </em>
                        <em v-if="project.technologies.length > 0"> 
                            <strong>Tecnologie: </strong> 
                            <span v-if="project.technologies.length > 0">
                                <span class="badge bg-primary mx-1" v-for="item in project.technologies">{{ item.name }}</span>
                            </span>
                            <span v-else>
                                Nessuna tecnologia
                            </span>
                        </em>
                        <p>{{ project.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped> 

    .cover-img{
        width: 300px;
    }

</style>