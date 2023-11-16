<script setup>
import Multiselect from '@vueform/multiselect'
import '@vueform/multiselect/themes/default.css'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { Crisp } from 'crisp-sdk-web'

const CRISP_WEBSITE_ID = '01bd3d04-b94d-469b-a969-70566bc2d501'
const { locale } = useI18n({ useScope: 'global' })
const selectedLocale = ref(locale)

const localeChange = (newLocale) => {
  selectedLocale.value = newLocale
}
let crispLocale = locale.value;

Crisp.configure(CRISP_WEBSITE_ID, {
    locale: crispLocale
});

watch(selectedLocale, (newLocale) => {
    if (newLocale) {
    Crisp.configure(CRISP_WEBSITE_ID, {
            locale: newLocale
        });
   }
    
});


</script>

<template>
  <header class="sticky top-0 z-50 bg-black text-white py-5 px-5 flex items-center justify-between">
    <p class="text-2xl">StableXsolution</p>
    <div class="w-[200px] mx-auto md:mx-0 md:w-[250px]">
      <Multiselect
        v-model="selectedLocale"
        @click="localeChange(selectedLocale)"
        :searchable="false"
        :options="[
          { title: 'English', value: 'en' },
          { title: 'Ukranian', value: 'uk' }
        ]"
        label="title"
        optionLabel="title"
        :clear-on-select="false"
      >
      </Multiselect>
    </div>
  </header>
</template>

<style lang="scss">
.multiselect {
  --ms-bg: transparent;
  --ms-radius: 20px;
  --ms-border-color: rgb(255 255 255 / 0.1);
  --ms-dropdown-border-color: rgb(255 255 255 / 0.1);
  --ms-caret-color: rgb(255 255 255 / 0.5);
  --ms-ring-width: 0;
  --ms-option-bg-selected: rgb(255 255 255 / 0.1);
  --ms-option-bg-pointed: rgb(255 255 255 / 0.05);
  --ms-option-bg-selected-pointed: rgb(255 255 255 / 0.15);
  --ms-option-color-pointed: #fff;
  color: #263238;
}
.multiselect-single-label .multiselect-single-label-text {
  color: #fff;
}
.multiselect-dropdown {
  border-radius: 0 0 20px 20px;
  overflow: auto;
  background: #282929;
  radius: 20px;

  .multiselect-options {
    @apply bg-black;
  }
}

.multiselect-clear-icon {
  display: none;
}
</style>
