<template>
    <h1>组件化</h1>
    <Rate :value="5"></Rate>
    <Rate theme="blue" :value="2"></Rate>
    <Rate theme="red" :value="4"></Rate>
</template>

<script setup>

import Rate from '../components/Rate.vue'
console.log(Rate)
</script>