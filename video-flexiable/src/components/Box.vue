

<template>
    <div>
        <div class="outer" :style="outer">
            <div class="inner" :style="inner"></div>
        </div>
    </div>
</template>
<script setup>
import { defineProps, ref, reactive, computed } from 'vue'
let props = defineProps({
    allObject: {
        type: Object,
        default: {
            width: '100px',
            height: '50px',
            color: 'red',
            width2: '200px',
            height2: '100px',
            color: 'blue'
        }
    }
})
let outer = computed(() => {
    return {
        width: `${props.allObject.width2}px`,
        height: `${props.allObject.height2}px`,
        backgroundColor: `${props.allObject.color2}`,
        position: 'relative',

    }
})

let inner = computed(() => {
    return {
        left: '50%',
        top: '50%',
        transform: `translate(-50%,-50%)`,
        position: 'absolute',
        width: `${props.allObject.width}px`,
        height: `${props.allObject.height}px`,
        backgroundColor: `${props.allObject.color}`
    }
})



</script>
<style>
</style>
