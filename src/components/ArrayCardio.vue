<template>
    <div id="arraycardio-container">
         <div id="table-container">
             <h1>Liste des inventeurs</h1>
             <button class="button" @click="SortByDeath">SortByDeathBefore1900</button>
             <button class="button" @click="SortByBirth">SortByBirthBefore1870</button>
             <button class="button" @click="Reset">Reset</button>
             <table id="table-inventors">
                 <tr>
                     <th>Nom</th>
                     <th>Prénom</th>
                     <th>Naissance</th>
                     <th>Mort</th>
                 </tr>
                 <tbody name="fade" is="transition-group">
                 <tr v-for="inventor in inventors" :key="inventor">
                     <th>{{ inventor.first }}</th>
                     <th>{{ inventor.last }}</th>
                     <th>{{ inventor.year }}</th>
                     <th>{{ inventor.passed }}</th>
                 </tr>
                 </tbody>
             </table>
         </div>
        <div id="list-peoples">
            <h1>Liste des célébrités</h1>
            <button class="button" @click="Shuffle()">Mélanger</button>
            <transition-group name="flip-list" tag="ul">
            <li v-for="people in peoples" :key="people">
                {{people}}
            </li>
            </transition-group>
        </div>
    </div>
</template>

<script>
    import {inventors, peoples} from "@/js/ArrayCardioData";
    export default {
        name: "ArrayCardio",
    data() {
            return {
                inventors,
                peoples
            }
    },
    methods: {
        Reset () {
            return this.inventors = inventors
        },
        SortByDeath () {
            this.inventors = inventors.filter((inventor) => inventor.passed < 1900)
        },
        SortByBirth () {
            this.inventors = inventors.filter((inventor) => inventor.year < 1870)
        },
        Shuffle () {
            return this.peoples.sort(function() { return 0.5 - Math.random() });
            }
      }
    }
</script>

<style scoped>
#arraycardio-container{
    margin: 80px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
#table-inventors{
    padding: 10px;
    font-size: 15px;
}
th{
    padding: 10px;
}
.button {
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    border: none;
    color: black;
    margin: 10px;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
}
.button:hover {
    background-color: black;
    color: white;
}
.flip-list-move {
    transition: transform 1s;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>