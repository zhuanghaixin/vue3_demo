// import { createStore } from 'vuex'
import { createStore } from './gvuex'
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
