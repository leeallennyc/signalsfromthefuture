<template>
    <div>
        <button @click="onClick()" :style= "{ 
        background: color }" class = "changeButton">{{text}}
        </button>
    </div>
</template>

<script>
 export default {
    name: 'Button',
    props: {
        text: String,
        color: String
    },
    methods: {
        onClick(){
            console.log('click');
        }
    }
 }
</script>

<style>
.changeButton {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
</style>