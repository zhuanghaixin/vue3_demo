<template>
    <h1>组件化</h1>
    <Rate :value="5"></Rate>
    <Rate theme="blue" :value="2"></Rate>
    <Rate theme="red" :value="4"></Rate>================================================
    <Rate1 :value="3.5"></Rate1>
    <h1>你的评分是{{ score }}</h1>
    <!-- <Rate1 :value="score" @update-rate="update"></Rate1> -->
    <Rate1 v-model="score"></Rate1>
</template>

<script setup>
import { ref } from 'vue'
import Rate from '../components/Rate.vue'
import Rate1 from '../components/Rate1.vue'
let score = ref(3.5)
function update(num) {
    score.value = num
}

</script>