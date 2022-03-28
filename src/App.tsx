// h 等同于 react中的 createElement
import { defineComponent, reactive, ref, Ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import { createUseStyles } from 'vue-jss'
import MonacoEdiror from '@/components/MonacoEdiror'

function toJoson(data: any) {
  return typeof data === 'object' ? JSON.stringify(data, null, 2) : '{}'
}

const schema = {
  type: 'string'
}

const useStyles = createUseStyles({
  editor: {
    minHeight: 400,
    width: 800
  }
})

export default defineComponent({
  setup() {
    const schemaRef: Ref<any> = ref(schema)

    const handleCodeChange = (code: string) => {
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch (err) {}
      schemaRef.value = schema
    }
    const classesRef = useStyles()

    return () => {
      // return jsx
      const code = toJoson(schemaRef.value)

      // console.log(code)
      const classes = classesRef.value
      return (
        // <div id="app">
        //   <img src=""></img>
        //   {state.name}
        //   <HelloWorld msg="jsx msg" age={12}></HelloWorld>
        //   <div></div>
        // </div>
        <div>
          <MonacoEdiror
            code={code}
            onChange={handleCodeChange}
            title="Schema"
            class={classes.editor}
          />
        </div>
      )
    }
  }
  // render() {
  //   return <div>1123</div>
  // },
})
