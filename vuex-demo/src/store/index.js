import { createStore } from 'vuex'
// 创建一个数据存储
const store = createStore({
  state () {
    return {
      count: 666
    }
  },
  mutations: {
    add (state) {
      state.count++
    }
  }
})

export default store
