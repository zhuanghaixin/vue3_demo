<template>
    <div>
        <input type="text" v-model="title" @keydown.enter="addTodo" />
        <button v-if="active" @click="clear">清理</button>
        <ul v-if="todos.length > 0">
            <li v-for="todo in todos">
                <input type="checkbox" v-model="todo.done" />
                <span :class="{ done: todo.done }">{{ todo.title }}</span>
            </li>
        </ul>
        <div v-else>暂无数据</div>
        <div>
            全选
            <input type="checkbox" v-model="allDone" />
            <span>{{ active }} / {{ all }}</span>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, watchEffect } from 'vue'
import useStorage from '../utils/useStorage.js'
let title = ref('')
// let todos = ref([
//     {
//         title: '学习Vue',
//         done: false
//     }
// ])
// todo 刷新后本地存储和todolist同步
console.log('111', localStorage.getItem('todo'))
let todoArr = [
    {
        title: 'xxxx',
        done: false
    }
]
let todos = ref(JSON.parse(localStorage.getItem('todos') || JSON.stringify(todoArr)))
console.log('todos', todos)
watchEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
}
)
// let todos = ref(JSON.parse(localStorage.getItem('todos') || '[]'))
// watchEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos.value))
// })

// let todos = useStorage('todos', '[]')


let active = computed(() => {
    return todos.value.filter(v => v.done).length
})
let all = computed(() => todos.value.length)
let allDone = computed({
    get: function () {
        return active.value === todos.value.length && active.value !== 0
    },
    set: function (value) {
        todos.value.forEach(todo => {
            todo.done = value
        })
    }
})
function addTodo() {
    todos.value.push({
        title: title.value,
        done: false
    })
    title.value = ''
}
function clear() {
    console.log(333)
    todos.value = todos.value.filter(v => !v.done)
}
</script>
<style scoped></style>
