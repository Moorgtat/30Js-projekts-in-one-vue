<template>
    <div id="arraycardio-container">
         <div id="table-inventors">
             <li v-for="inventor in inventors" :key="inventor">
                 {{ inventor.first }}
             </li>
         </div>
        <div id="table-peoples">
            <li v-for="people in peoples" :key="people">
                {{people}}
            </li>
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
    }
    }
</script>

<style scoped>

</style>