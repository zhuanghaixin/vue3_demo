

<template>
    <div>
        实际宽度{{ x }} - 实际高度{{ y }}
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
// 判断
let x = computed(() => {
    let w = ref(props.allObject.width) // 视频宽度
    let h = ref(props.allObject.height) // 视频高度
    let w2 = ref(props.allObject.width2) // 设备宽度
    let h2 = ref(props.allObject.height2) //设备高度
    let videoRatio = w.value / h.value
    console.log('v', videoRatio)
    let screenRatio = w2.value / h2.value
    console.log('s', screenRatio)
    let x = null; //实际在设备显示的宽度
    let y = null; //实际在设备显示高度
    if (videoRatio == screenRatio) {
        x = w2.value
        y = h2.value
    }
    if (videoRatio > screenRatio) {
        x = w2.value
        y = w2.value * h.value / w.value
    }
    if (videoRatio < screenRatio) {
        x = w.value * h2.value / h.value
        y = h2.value
    }

    return Number(x).toFixed(2)
})

let y = computed(() => {
    let w = ref(props.allObject.width) // 视频宽度
    let h = ref(props.allObject.height) // 视频高度
    let w2 = ref(props.allObject.width2) // 设备宽度
    let h2 = ref(props.allObject.height2) //设备高度
    let videoRatio = w.value / h.value
    console.log('v', videoRatio)
    let screenRatio = w2.value / h2.value
    console.log('s', screenRatio)
    let x = null; //实际在设备显示的宽度
    let y = null; //实际在设备显示高度
    if (videoRatio == screenRatio) {
        x = w2.value
        y = h2.value
    }
    if (videoRatio > screenRatio) {
        x = w2.value
        y = w2.value * h.value / w.value
    }
    if (videoRatio < screenRatio) {
        x = w.value * h2.value / h.value
        y = h2.value
    }

    return Number(y).toFixed(2)
})

console.log('x', x, 'y', y)

let inner = computed(() => {
    // 判断
    let w = ref(props.allObject.width) // 视频宽度
    let h = ref(props.allObject.height) // 视频高度
    let w2 = ref(props.allObject.width2) // 设备宽度
    let h2 = ref(props.allObject.height2) //设备高度
    let videoRatio = w.value / h.value
    console.log('v', videoRatio)
    let screenRatio = w2.value / h2.value
    console.log('s', screenRatio)
    let x; //实际在设备显示的宽度
    let y; //实际在设备显示高度
    if (videoRatio == screenRatio) {
        x = w2.value
        y = h2.value
    }

    if (videoRatio > screenRatio) {
        x = w2.value
        y = w2.value * h.value / w.value
    }
    if (videoRatio < screenRatio) {
        x = w.value * h2.value / h.value
        y = h2.value
    }

    // 固定值
    return {
        left: '50%',
        top: '50%',
        transform: `translate(-50%,-50%)`,
        position: 'absolute',
        width: `${x}px`,
        height: `${y}px`,
        // width: `${props.allObject.width}px`,
        // height: `${props.allObject.height}px`,
        backgroundColor: `${props.allObject.color}`
    }
})



</script>
<style>
</style>
