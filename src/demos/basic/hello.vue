<template>
  <div id="container"></div>
</template>
<script setup>
import Konva from "konva";
import { ref, unref, onMounted } from 'vue'

function useKonvaDemo() {
  console.log('konva', Konva)

  function oInit() {
    const stage = new Konva.Stage({
      container: 'container',
      width: 500,
      height: 300
    })
    const layer = new Konva.Layer()

    const text = new Konva.Text({
      x: 10,
      y: 10,
      text: 'Hello World Konva',
      fontSize: 60,
      fontFamily: 'Calibri',
      fill: 'green',
      opacity: 0.5,
      shadowColor: 'black',
      shadowBlur: 10,
      shadowOffsetX: 10,
     shadowOffsetY: 10,
    })
    layer.add(text)
    stage.add(layer)
  }

  return {
    oInit
  }
}
const { oInit } = useKonvaDemo()

onMounted(() => {
  oInit()
})
</script>
<style lang="less">
.container {
  width: 500px;
  height: 300;
}
</style>