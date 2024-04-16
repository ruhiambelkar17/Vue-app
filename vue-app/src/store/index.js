
import {defineStore} from "pinia";
import { computed,ref } from "vue";
import axios from "axios";

//using options api
 export const useApiStore= defineStore('apiStore',{
    state:()=>({
        count:5,
        apiData:{}
    }),  //data if the store
    // state(){
    //     return {
    //      count:5,
    //      apiData:{}
    //     }
    //  }, 
    getters:{
        doubleCount: (state) => state.count * 2,
    }, // computed properties of the store, we can change the value of state e.g double the state value
    actions:{
        incrementData(){
            this.count++;
        },
    async  getApiData(){
            const resp= await axios.get("http://localhost:1337/api/html-questions").
            then((response)=>response.data);
            this.apiData=resp;
            console.log("api data",this.apiData);
        }
    } // actions are nothing but the methods we can write logic here
 })

 //composition api
//  export const useApiStore=defineStore('apiStore',()=>{
//     let count=ref(5);
//     let apiData=ref({});
    
//     const doubleCount= computed(()=> count.value * 2); //getter

//     // const incrementData=()=>{
//     //     count.value++;
//     // }

//     function incrementData(){
//         count.value++;
//     }
//     async function getApiData(){
//         const resp= await axios.get("http://localhost:1337/api/html-questions").
//         then((response)=>response.data);
//         apiData=resp;
//         console.log("api data",apiData);
//     }

// return {count, doubleCount,apiData,incrementData,getApiData}
//  })

