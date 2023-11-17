<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  dark: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <button
    class="h-[44px] w-[160px] bg-white text-black rounded-full text-base font-medium"
    :class="{ 'bg-color !text-white border border-white': dark }"
  >
    {{ $t(title) }}
    <span :class="{ hidden: dark }">></span>
  </button>
</template>

<style lang="scss" scoped>
.bg-color {
  background: radial-gradient(
      70.71% 70.71% at 50% 50%,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #070709;
}
</style>
