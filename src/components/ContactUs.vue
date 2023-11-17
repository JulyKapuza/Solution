<script setup>
import AppBtns from '@/components/ui/AppBtns.vue'
</script>
<template>
  <div class="mt-[51px] relative">
    <div class="absolute top-10 left-[67px]">
      <app-btns title="contact_us" />
    </div>
    <!-- <div class="overlay"></div> -->
    <img src="../../public/images/image.png" class="h-auto w-full" />
    <div
      class="flex items-end justify-between px-[170px] w-full absolute -bottom-12 left-[50%] -translate-x-[50%]"
    >
      <h2 class="block w-[700px] text-[46px] font-semibold leading-[116%] font-['Roboto']">
        {{ $t('second_header') }}
      </h2>

      <app-btns title="contact_us" dark />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  z-index: 50;
  height: 740px;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-position: center;
  opacity: 0.04;
  background: url(../../public/images/image.png), lightgray 670px 320px / 9.459% 13.514% no-repeat;
}
</style>
