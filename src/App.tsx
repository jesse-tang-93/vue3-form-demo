// h 等同于 react中的 createElement
import { defineComponent, reactive } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
  setup() {
    const state = reactive({
      name: 'ttt'
    })
    return () => {
      // return jsx
      return (
        <div id="app">
          <img src=""></img>
          {state.name}
          <HelloWorld msg="jsx msg" age={12}></HelloWorld>
          <div></div>
        </div>
      )
    }
  }
  // render() {
  //   return <div>1123</div>
  // },
})
