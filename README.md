# ch-vue3-mindmap

> Mindmap component for Vue3. Fork from https://github.com/hellowuxin/vue3-mindmap/

## Install

```sh
npm install ch-vue3-mindmap
```

## Example

```html
<template>
  <mindmap v-model="data"></mindmap>
</template>

<script>
import mindmap from 'vue3-mindmap'
import 'vue3-mindmap/dist/style.css'

export default defineComponent({
  components: { mindmap },
  setup () => {
    const data = [{
      "name":"Computer programming",
      "children": [
        {
          "name":"Web",
          "children": [
            { "name":"HTML & CSS" },
            { "name":"JavaScript" },
            ...
          ]
        },
        {
          "name":"Windows",
          "collapse": true,
          "children": [ { "name": "C#" } ]
        },
        { "name":"Other", "left": true },
        ...
      ]
    }]

    return { data }
  }
})
</script>
```
