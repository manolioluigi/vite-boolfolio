<script>
import {store} from '../store.js';
    export default {
        name: "ProjectCard",
        props:{
            project: Object,
        },
        data(){
            return{
                store,
            }
        },
    }
</script>

<template>
  <div class="card my-3">
    <div class="card-body">
        <div class="card-img-top d-flex justify-content-center">
            <img :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/300/200'" :alt="project.title" class="img-fluid">
        </div>
        <div class="card-title py-1 d-flex flex-column">
            <h5>{{ project.title }}</h5>
            <em> 
                <strong>Tipo: </strong> 
                <span  v-if="project.type">
                    {{ project.type.name }}
                </span>
                <span v-else>
                    Nessun tipo
                </span>
            </em>
            <em> 
                <strong>Tecnologie: </strong> 
                <span v-if="project.technologies.length > 0">
                    <span class="badge bg-primary mx-1" v-for="item in project.technologies">{{ item.name }}</span>
                </span>
                <span v-else>
                    Nessuna tecnologia
                </span>
            </em>
        </div>
        <div class="card-text py-1">
            {{ project.content }}
        </div>
        <router-link :to="{ name: 'SingleProject', params: { slug: project.slug } }" class="btn btn-sm btn-success my-3">
            Continua a leggere
        </router-link>
    </div>
</div>
</template>

<style>

</style>