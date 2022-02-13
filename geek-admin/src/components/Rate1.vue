
<template>
    <div :style="fontStyle">
        <div class="rate" @mouseout="mouseOut">
            <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
            <span class="hollow" :style="fontwidth">
                <span @click="onRate(num)" v-for="num in 5" @mouseover="mouseOver(num)" :key="num">★</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed, ref, defineEmits } from 'vue';
let props = defineProps({
    value: Number,
    theme: {
        type: String,
        default: 'orange'
    }
})
let width = ref(props.value);
function mouseOver(i) {
    console.log('mouseOVer')
    console.log(i)
    width.value = i
    console.log('width.value===', width.value)
}
function mouseOut() {

    width.value = props.value
    console.log('width.value', width.value)
    console.log('props.value', props.value)
}
const themeObj = {
    'black': '#00',
    'white': '#fff',
    'red': '#f5222d',
    'orange': '#fa541c',
    'yellow': '#fadb14',
    'green': '#73d13d',
    'blue': '#40a9ff',
}
let fontStyle = computed(() => {

    return `color:${themeObj[props.theme]}`
})
const fontwidth = computed(() => `width:${width.value}em;`)

// 定义发射的数据
let emits = defineEmits('update-rate')
function onRate(num) {
    emits('update-rate', num)
}
</script>
<style scoped>
.rate {
    position: relative;
    display: inline-block;
}
.rate > span.hollow {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
}
</style>