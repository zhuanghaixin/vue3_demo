

<template>
  <div>
    <div>
      宽度
      <input v-model="width" />
      高度
      <input v-model="height" />
      颜色
      <input v-model="color" />
    </div>

    <hr />
    <Video :width="Number(width)" :height="Number(height)" :color="color"></Video>
    <hr />
    <div>
      宽度
      <input v-model="width2" />
      高度
      <input v-model="height2" />
      颜色
      <input v-model="color2" />
    </div>
    <hr />
    <Video :width="Number(width2)" :height="Number(height2)" :color="color2"></Video>
    <hr />转换后
    <Box :allObject="allObject"></Box>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from 'vue'
import Video from './components/Video.vue'
import Box from './components/Box.vue'
let width = ref(100)
let height = ref(50)
let color = ref('red')

let width2 = ref(200)
let height2 = ref(100)
let color2 = ref('#ccc')

let allObject = reactive({
  width, height, color, width2, height2, color2
})

</script>
<style>
</style>
