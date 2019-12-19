<template>
    <div id="clock-container">
        <div class="clock">
            <div class="clock-face">
                <div class="hand hour-hand" :style="transformHandStyle(hourDegrees)"></div>
                <div class="hand min-hand" :style="transformHandStyle(minsDegrees)"></div>
                <div class="hand second-hand" :style="transformHandStyle(secondsDegrees)"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Clock",
        data(){
            return{
                secondsDegrees: 0,
                minsDegrees: 0,
                hourDegrees: 0
            }
        },
        mounted() {
            setInterval(this.setDate, 1000);
        },
        methods: {
            transformHandStyle: function (degrees) {
                return { transform: 'rotate(' + degrees + 'deg)' }
            },
            setDate(){
                const now = new Date();

                const seconds = now.getSeconds();
                this.secondsDegrees = ((seconds/60)*360) + 90;

                const mins = now.getMinutes();
                this.minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;

                const hour = now.getHours();
                this.hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
            }
        }
    }
</script>

<style scoped>
#clock-container{
    margin: 0;
    background-image: url("../assets/clock/fond-clock.jpg");
    background-size: cover;
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
}
.clock {
    width: 40rem;
    height: 40rem;
    border: 20px solid rgba(0,0,0,0.8);
    border-radius: 50%;
    margin: 50px auto;
    padding: 2rem;
    box-shadow: inset 0 0 0 4px rgba(0,0,0,0.2), 0 0 10px rgba(0,0,0,0.2);
}
.clock-face {
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateY(-3px);
}
.hand {
    width: 50%;
    height: 6px;
    background: rgba(0,0,0,0.4);
    position: absolute;
    top: 50%;
    transform-origin: 100%;
    transform: rotate(90deg);
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1,2.7,0.58,1);
}
</style>