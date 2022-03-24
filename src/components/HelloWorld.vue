<template>
  <div class="hello">
    <h1>{{ age }}</h1>
    {{ msg }}
    <div />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
const propType = {
  age: {
    type: Number as PropType<number>,
    required: true
  },
  msg: {
    type: String as PropType<string>,
    required: true
  }
} as const // 设置为只读（readonly）

export default defineComponent({
  name: 'HelloWorld',
  props: propType,
  mounted() {
    this.age
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
