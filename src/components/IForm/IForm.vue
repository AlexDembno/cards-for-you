<script setup>
// import { ref } from 'vue'
// const value = ref('')

import IInput from '../IInput/IInput.vue'
import IButton from '../IButton/IButton.vue'
</script>

<template>
  <form class="w-100 bg-white p-40 rounded">
    <label class="block">
      <span class="block text-sm font-medium text-black p-15 mb-1"
        >Оригинал</span
      >
      <input
        class="w-80 h-10 border-[#2C2C2C] border-[1px] focus:border-[#FFA279] p-4 rounded"
        placeholder="Оригинал"
        type="text"
      />
    </label>
    <IInput label="Перевод"></IInput>
    <IButton
      class="w-80 bg-gradient-to-r from-[#FFA279] to-[#F3743D] text-secondary mt-11 px-3 py-2 rounded"
      >Добавить</IButton
    >
  </form>
</template>
