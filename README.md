# ch-vue3-mindmap

> Mindmap component for Vue3. Fork from https://github.com/hellowuxin/vue3-mindmap/

## Install

```sh
npm install ch-vue3-mindmap
```

## PROPS

| Name         | Type             | Default    | Description |
|--------------|------------------|------------|-------------|
| v-model      | Data[]           | undefined  | 设置思维导图数据    |
| x-gap        | Number           | 84         | 设置节点横向间隔    |
| y-gap        | Number           | 18         | 设置节点纵向间隔    |
| branch       | Number           | 4          | 设置连线的宽度     |
| scale-extent | [Number, Number] | [0.1, 0.8] | 设置缩放范围      |
| timetravel   | Boolean          | false      | 是否显示撤销重做按钮  |
| drag         | Boolean          | false      | 设置节点是否可拖拽   |
| zoom         | Boolean          | false      | 是否可缩放、拖移    |
| edit         | Boolean          | false      | 是否可编辑       |
| center-btn   | Boolean          | false      | 是否显示居中按钮    |
| fit-btn      | Boolean          | false      | 是否显示缩放按钮    |
| add-node-btn | Boolean          | false      | 是否显示添加节点按钮  |
| download-btn | Boolean          | false      | 是否显示下载按钮    |
| sharp-corner | Boolean          | false      | 设置分支为圆角或直角  |
| ctm          | Boolean          | false      | 是否响应右键菜单    |
| locale       | 'zh' \           | 'en' \     | 'ptBR'      | 'zh'       | i18n                  |

## Example

```html

<template>
    <mindmap v-model="data"></mindmap>
</template>

<script>
import mindmap from 'ch-vue3-mindmap'

export default defineComponent({
    components: {mindmap},
    setup ()
=>
{
    const data = [{
        "name": "Computer programming",
        "children": [
            {
                "name": "Web",
                "children": [
                    {"name": "HTML & CSS"},
                    {"name": "JavaScript"},
                ]
            },
            {
                "name": "Windows",
                "collapse": true,
                "children": [{"name": "C#"}]
            },
            {"name": "Other", "left": true},
        ]
    }]

    return {data}
}
})
</script>
```
