<script setup>
import { defineEmits, ref, onMounted } from 'vue'
import IButton from '../IButton/IButton.vue'

const emit = defineEmits(['use-words'])

const word = ref('')
const translation = ref('')
const ownList = ref([])

onMounted(() => {
  const storedList = JSON.parse(localStorage.getItem('ownList')) || []
  ownList.value = storedList
})

const saveWord = (event) => {
  event.preventDefault()
  if (word.value.trim() && translation.value.trim()) {
    const storedList = JSON.parse(localStorage.getItem('ownList')) || []
    storedList.push({ word: word.value, definition: translation.value })
    localStorage.setItem('ownList', JSON.stringify(storedList))

    word.value = ''
    translation.value = ''
    ownList.value = storedList
  } else {
    alert('Please enter both a word and its translation.')
  }
}

const onUseWords = () => {
  emit('use-words')
}
</script>

<template>
  <form
    @submit.prevent="saveWord"
    class="flex sm:w-60 md:w-80 w-80 flex-col items-center justify-center gap-5 bg-white border rounded-lg sm:p-7 md:p-10 p-20"
  >
    <label class="block">
      <input
        v-model="word"
        type="text"
        placeholder="Enter word"
        class="border p-2 text-black"
      />
    </label>
    <label class="block">
      <input
        v-model="translation"
        type="text"
        placeholder="Enter translation"
        class="border p-2 text-black"
      />
    </label>
    <IButton
      type="submit"
      class="cursor-pointer bg-gradient-to-r from-[#FFA279] to-[#F3743D] text-white p-2"
    >
      Save Word
    </IButton>
    <IButton
      type="button"
      @click="onUseWords"
      class="cursor-pointer bg-gradient-to-r from-[#FFA279] to-[#F3743D] text-white p-2"
    >
      Use Words
    </IButton>
  </form>
</template>
