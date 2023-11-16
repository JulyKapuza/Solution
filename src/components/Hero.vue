<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

const box = ref(null)
const box1 = ref(null)
const box2 = ref(null)
const box3 = ref(null)

onMounted(() => {
  const boxAnimation = gsap.timeline({ repeat: -1 })

  boxAnimation
    .to(box.value, { y: '-=200', opacity: 0, duration: 2.5 })
    .set(box.value, { y: '+=200', opacity: 1,})
  boxAnimation
    .to(box1.value, { y: '-=300', opacity: 0, duration: 2.5 })
    .set(box1.value, { y: '+=300', opacity: 1 })
  boxAnimation
    .to(box2.value, { y: '-400', opacity: 0, duration: 2.5 })
    .set(box2.value, { y: '+=400', opacity: 1 })
  boxAnimation
    .to(box3.value, { y: '-=500', opacity: 0, duration: 2.5 })
    .set(box3.value, { y: '+=500', opacity: 1 })
})
</script>

<template>
  <div class="flex">
    <div
      class="max-w-[720px] text-bg-gradient text-[64px] font-semibold leading-[110%] font-['Roboto']"
    >
      {{ $t('header') }}
    </div>

    <div class="flex flex-col gap-10 relative" ref="container">
      <div class="box" ref="box">deploy completed</div>
      <div class="box" ref="box1">pipeline successful</div>
      <div class="box" ref="box2">someone pushed code</div>
      <div class="box" ref="box3">pipeline started</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-bg-gradient {
  background: radial-gradient(
    70.71% 70.71% at 50% 50%,
    rgba(218, 181, 164, 0.6) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.box {
  @apply absolute bottom-[-100%] -left-[100] -translate-x-[20%] flex items-center justify-center w-[200px] h-[50px] rounded-[10px] bg-grey;
}
</style>
