<template>
    <div id="spacy-container">
        <h2>Update CSS Variables with <span :style="spanStyle">JS</span></h2>

        <div class="controls">
            <label for="spacing">Spacing:</label>
            <input id="spacing" type="range" min="10" max="200" v-model="spacing">

            <label for="blur">Blur:</label>
            <input id="blur" type="range" name="blur" min="0" max="25" v-model="blur">

            <label for="base">Base Color</label>
            <input id="base" type="color" v-model="base">
        </div>

        <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" :style="imageStyle">
    </div>
</template>

<script>
    export default {
        name: "Spacy",
        data() {
            return {
                spacing: 10,
                blur: 10,
               base: "#ffc600"
            }
        },
        computed: {
            spanStyle () {
                return {color: this.base}
            },
            imageStyle () {
                return {
                    padding: `${this.spacing}px`,
                    background : this.base,
                    filter: `blur(${this.blur}px)`
                }
            }
        }
    }
</script>

<style scoped>

#spacy-container{
    padding-top: 20px;
    padding-bottom: 150px;
    text-align: center;
    background: #193549;
    color: white;
    font-family: 'helvetica neue', sans-serif;
    font-weight: 100;
    font-size: 50px;
}
.controls {
    margin-bottom: 50px;
}
input {
    width:100px;
}
</style>