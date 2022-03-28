import { defineComponent } from 'vue'

import * as Monaco from 'monaco-editor'
import type { PropType, ref } from 'vue'
import { createUseStyles } from 'vue-jss'

// css in jss files
const useStyles = createUseStyles({
  container: {
    border: '1px solid #eee',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5
  },
  title: {
    backgroundColor: '#eee',
    padding: '10px 0',
    paddingLeft: '20px'
  },
  code: {
    flexGrow: 1
  }
})

export default defineComponent({
  props: {
    code: {
      type: String as PropType<string>,
      required: true
    },
    title: {
      type: String as PropType<string>,
      default: ''
    }
  },
  setup() {
    const classesRef = useStyles()
    return () => {
      const classes = classesRef.value
      return (
        <div class={classes.container}>
          <div class={classes.title}>
            <span>{props.title}</span>
          </div>
          <div class={classes.code} ref={containerRef}></div>
        </div>
      )
    }
  }
})
