<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :age="3" msg="23" />
  {{ state.name }}
  {{ nameComputedRef }}
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watchEffect } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',

  components: {
    HelloWorld
  },
  setup(props, { slots, attrs, emit }) {
    let state = reactive({ name: 'txq' })

    const nameComputedRef = computed(() => {
      return state.name + 2
    })

    // setInterval(() => {
    //   state.name += 1
    // }, 1000)
    // watchEffect 只监听函数内部使用到的状态值的改变。不会因为未使用到的状态发生改变，而执行内部函数
    watchEffect(() => {
      console.log(state.name)
    })
    return {
      state,
      nameComputedRef
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
