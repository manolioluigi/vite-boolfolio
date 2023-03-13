<script>
import axios from 'axios';
import { store } from '../store';

    export default {
        name: 'contacts',
        data() {
            return {
                store,
                name: '',
                surname: '',
                email: '',
                phone: '',
                message: '',
                errors: null
            }
        },
        methods:{
            sendForm(){
                const data = {
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    phone: this.phone,
                    message: this.message
                }
                axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                    if(!this.success){
                        this.errors = response.data.errors
                    }else{
                        this.name = '';
                        this.surname = '';
                        this.email = '';
                        this.phone = '';
                        this.message = '';
                    }
                });
            }
        }
    }
</script>

<template>
  <div class="container">
    <div class="row my-5">
        <div class="col-12">
            <h2 class="text-center my-5">Pagina contatti</h2>
        </div>
        <div class="col-12">
            <h5 class="text-center my-5">Informazioni di contatto</h5>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="text-center d-flex flex-column">
                        <div class="my-2">
                            <strong>
                                <i class="fas fa-map me-2"></i>
                                Indirizzo
                            </strong>
                            Via NomeVia, Num, Città CAP (Sigla provincia)
                        </div>
                        <div class="my-2">
                            <strong>
                                <i class="fas fa-book me-2"></i>
                                Partita Iva:
                            </strong> 
                            12345678786123
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="text-center d-flex flex-column">
                        <div class="my-2">
                            <strong>
                                <i class="fas fa-phone me-2"></i>
                                Telefono
                            </strong>
                            123145542525
                        </div>
                        <div class="my-2">
                            <strong>
                                <i class="fas fa-envelope me-2"></i>
                                Email:
                            </strong> 
                            info@boolfolio.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="background-contacts py-3 my-3">
            <div class="container">
                <div class="col-12 my-5">
                    <h5 class="text-center my-3">Scrivici</h5>
                    <form @submit.prevent="sendForm()">
                        <div class="row">
                            <div class="col-12 col-md-6 my-2">
                                <label for="nome" class="control-label">Inserisci il nome</label>
                                <input type="text" class="form-control" name="nome" id="nome" placeholder="Nome" v-model="name">
                            </div>
                            <div class="col-12 col-md-6 my-2">
                                <label for="cognome" class="control-label">Inserisci il cognome</label>
                                <input type="text" class="form-control" name="cognome" id="cognome" placeholder="Cognome" v-model="surname">
                            </div>
                            <div class="col-12 col-md-6 my-2">
                                <label for="email" class="control-label">Inserisci la mail</label>
                                <input type="mail" class="form-control" name="email" id="email" placeholder="Email" v-model="email">
                            </div>
                            <div class="col-12 col-md-6 my-2">
                                <label for="telefono" class="control-label">Inserisci il numero di telefono</label>
                                <input type="phone" class="form-control" name="telefono" id="telefono" placeholder="Telefono" v-model="phone">
                            </div>
                            <div class="col-12 my-2">
                                <label for="messaggio" class="control-label">Inserisci un messaggio</label>
                                <textarea class="form-control" name="messaggio" id="messaggio" placeholder="messaggio" cols="30" rows="5" v-model="message"></textarea>
                            </div>
                            <div class="col-12 mt-3 text-center">
                                <button type="submit" class="send-email">Invia</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .background-contacts{
        background-color: rgb(3,100,3);
        color: white;
        border-radius: 50px;
    }

    .send-email{
        background-color: white;  
        color: rgb(3,100,3);
        border: none;
        padding: 10px 50px;
        transition: 1s all;
        &:hover{
            background-color: rgb(1, 54, 1);
            color: white;
        }
    }
</style>