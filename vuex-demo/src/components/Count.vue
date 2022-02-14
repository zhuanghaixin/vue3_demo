<template>
    <div @click="add">{{ count }}</div>
</template>
<script setup>
import { computed } from 'vue'
// import { useStore } from 'vuex'
import { useStore } from '../store/gvuex'
// store获取数据源
let store = useStore()
let count = computed(() => store.state.count)
function add() {
    store.commit('add')
}
</script>