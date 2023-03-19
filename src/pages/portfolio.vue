<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import {store} from '../store.js';

    export default{
        name: "Portfolio",
        components:{
            ProjectCard,
        },
        data(){
            return{
                store,
                projects: [],
                currentPage: 1,
                lastPage: null,
                loading: true,
            }
        },
        methods:{
            getProjects(project_page){
                this.loading = true;
                axios.get(`${this.store.baseUrl}/api/projects`, { params: {page: project_page}}).then((response) => {
                    if(response.data.success){
                        this.projects = response.data.results.data;
                        this.currentPage = response.data.results.current_page;
                        this.lastPage = response.data.results.last_page;
                        this.loading = false;
                    }else{
                        alert('La chiamata non è andata a buon fine')
                    }
                    
                });
            }
        },
        mounted(){
            this.getProjects(this.currentPage);
        }
    }
</script>

<template>

    <div class="container">
        <div class="row">
            <div>
                <div v-if="loading" class="col-12 d-flex justify-content-center">
                    <div class="my-5 loader"></div> 
                </div>
                <div v-else class="col-12 d-flex justify-content-center flex-wrap">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4" v-for="project in projects" :key="project.id">
                            <ProjectCard :project="project"></ProjectCard>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <nav>
                                <ul class="pagination">
                                    <li :class="currentPage == 1 ? 'disabled' : 'page-item'">
                                        <button class="page-link" @click="getProjects(currentPage - 1)">Prev</button>
                                    </li>
                                    <li :class="currentPage == i ? 'disabled' : 'page-item'" v-for="i in lastPage">
                                        <button class="page-link" @click="getProjects(i)">{{ i }}</button>
                                    </li>
                                    <li :class="currentPage == lastPage ? 'disabled' : 'page-item'">
                                        <button class="page-link" @click="getProjects(currentPage + 1)">Next</button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">

    .card-img-top{
        img{
            max-width: 300px;
        }
    }
</style>