<!-- **** options api -->
<script>
//import router from '../router/Index';
import { useApiStore } from '../store/index';
//import {router-link} from 'vue-router';
import {decodeCredential, googleLogout} from "vue3-google-login"
export default {
    data() {
        return {
            num: 1,
            apiStore: useApiStore(),
            queList: {},
            loggedIn:false,
            user:null,
            callback:(response) => {
                console.log("Logged in");
                this.loggedIn=true;
                this.user=decodeCredential(response.credential);
            },
        };
    },
    created() {
        this.loadData();
        console.log("####", this.apiStore.apiData.value);
    },
    methods: {
        async loadData() {
            await this.apiStore.getApiData();
        },
        logout(){
            googleLogout();
            this.loggedIn=false;
        }
    },
    //components: { router }
}
</script> 
<!-- 
<script setup>
import { useApiStore } from '../store/index';
import { computed,createHydrationRenderer,onMounted,ref } from "vue";

 const num=ref(1);
const apiStore=useApiStore();
let queList=ref({});

 onMounted(()=>{
    loadData()
    console.log("####",apiStore.apiData.value)
    // queList=apiStore.apiData;
}) 

async function loadData() {
    await apiStore.getApiData();
}
</script> -->

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <router-link :to="{name:'contact-us'}" arget="_blank" >Contact</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
   
        <h1>google login:</h1>
        
        <div v-if="loggedIn">
            <button @click="logout">Logout</button>
        <p>The user currently logged in is: {{ user.name }}</p>
        </div>
        <div v-else>
            <GoogleLogin :callback="callback" prompt auto-login></GoogleLogin>
        </div>
    <!-- <h2>{{ apiStore.apiData }}</h2> -->
  <h3>data from store: {{ apiStore.count }} {{ apiStore.doubleCount }}</h3>
    <button @click="apiStore.incrementData">click</button> 
  </div>
</template>

<style></style>
