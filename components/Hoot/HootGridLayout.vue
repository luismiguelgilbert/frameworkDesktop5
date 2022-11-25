<template>
  <div
    class="grid-container"
    :style="cssProps">
    <slot name="content" v-bind:gridInfo="viewport">
    </slot>
  </div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const props = defineProps({
  gridColumns: { type: Number, default: 12 },
  rowsHeight: { type: Number, },
})

//Data
const checkMobile = useMediaQuery('screen and (max-width: 600px)')
const checkTablet = useMediaQuery('screen and (min-width: 601px) and (max-width: 960px)')
const checkDesktop = useMediaQuery('screen and (min-width: 961px)')
const viewport = computed(() => {
  if(checkMobile.value){
    return 'mobile'
  }else if(checkTablet.value) {
    return 'tablet'
  }else if(checkDesktop.value) {
    return 'desktop'
  }
})

//Computed
const cssProps = computed(() => {
  return {
    '--grid-columns': `repeat(${props.gridColumns}, 1fr)`,
    'grid-auto-rows': props.rowsHeight ? `${props.rowsHeight}px` : 'auto'
    }
})
const gridContainerRows = computed(() => {
  const styleName = props.rowsHeight ? `${props.rowsHeight}px` : 'auto';
  return styleName;
})
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
}
.grid-container {
  grid-template-columns: var(--grid-columns);
  gap: 20px;
  padding: 10px;
}
</style>
