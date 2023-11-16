<script setup>
import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'
</script>
<template>
  <div
    class="flex flex-col h-full w-full absolute top-0 start-0 text-white overflow-auto"
  >
  <div class="mx-auto max-w-[1890px] px-[15px] w-full h-full">
   <Header />
      <main class="grow flex flex-col pt-4">
        <slot></slot>
      </main>
      <!-- <Footer /> -->
  </div>
   
  </div>
</template>
<style lang="scss">
</style>
