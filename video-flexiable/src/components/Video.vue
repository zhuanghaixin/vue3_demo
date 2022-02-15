

<template>
    <div>
        <div :style="styleObject"></div>
    </div>
</template>
<script setup>
import { defineProps, ref, reactive, computed } from 'vue'
let props = defineProps({
    width: {
        type: Number,
        default: 100
    },
    height: {
        type: Number,
        default: 50
    },
    color: {
        type: String,
        default: 'red'
    }
})
// let width = ref(props.width)
// let height = ref(props.height)
// let color = ref(props.color)
let styleObject = computed(() => {
    return {
        // width: `${width.value}px`,
        // height: `${height.value}px`,
        // backgroundColor: `${color.value}`
        width: `${props.width}px`,
        height: `${props.height}px`,
        backgroundColor: `${props.color}`
    }
})
console.log(11, styleObject)

</script>
<style>
</style>
