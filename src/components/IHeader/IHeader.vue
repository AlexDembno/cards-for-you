<script setup>
import { defineEmits } from 'vue'
// const isDesktop = window.innerWidth >= 1024
// const isTablet = window.innerWidth < 1024
// const isMobile = window.innerWidth < 768
const emit = defineEmits(['select-list'])
</script>

<template>
  <div
    class="flex flex-col w-full h-fit bg-gradient-to-r from-[#FFA279] to-[#F3743D] text-secondary px-48 py-9"
  >
    <nav
      class="flex ss:flex-wrap flex-row justify-center items-center ss:gap-5 gap-16 text-nowrap"
    >
      <div class="flex justify-center items-center gap-2">
        <img
          alt="Logo Preview"
          src="../ICons/icon_new.png"
          width="59"
          class="rounded-full"
        />

        <p class="text-white uppercase font-bold">Cards for you</p>
      </div>
      <div class="flex flex-col gap-2">
        <button
          class="text-white uppercase font-bold"
          @click="emit('select-list', 'irregularVerbs')"
        >
          Irregular Verbs
        </button>
      </div>

      <div class="flex flex-col gap-2">
        <button
          class="text-white uppercase font-bold"
          @click="emit('select-list', 'mostUsed')"
        >
          Most Used
        </button>
      </div>

      <div class="flex flex-col gap-2">
        <button
          class="text-white uppercase font-bold"
          @click="emit('select-list', 'itWords')"
        >
          IT Words
        </button>
      </div>

      <div class="flex flex-col gap-2">
        <button
          class="text-white uppercase font-bold"
          @click="emit('select-list', 'addOwnList')"
        >
          Own List
        </button>
      </div>
    </nav>
  </div>
</template>
