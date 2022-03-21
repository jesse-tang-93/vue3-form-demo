import { createApp, defineComponent, createVNode } from 'vue'
// import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

// h = createElement
const imgs = require('./assets/logo.png') // eslint-disable-line
const App = defineComponent({
  render() {
    return createVNode('div', { id: 'divIds' }, [
      createVNode('img', { src: imgs, alt: 'vue logo' }),
      createVNode(HelloWorld, {
        msg: 'hello',
        age: 123,
      }),
    ])
  },
})

createApp(App).mount('#app')
