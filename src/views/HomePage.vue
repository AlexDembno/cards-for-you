<script setup>
import { ref, computed } from 'vue'
import IHeader from '@/components/IHeader/IHeader.vue'
import ICard from '@/components/ICard/ICard.vue'
import IButton from '@/components/IButton/IButton.vue'

import { wordLists } from '../data/wordLists'

const currentList = ref('irregularVerbs')
const currentIndex = ref(0)

const activeWords = computed(() => wordLists[currentList.value] || [])

const increment = () => {
  if (currentIndex.value < activeWords.value.length - 1) {
    currentIndex.value += 1
  }
}
const decrement = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1
  }
}
const resetIndex = () => (currentIndex.value = 0)

const updateList = (listName) => {
  currentList.value = listName
  resetIndex()
}
</script>

<template>
  <IHeader @select-list="updateList" />
  <main class="flex h-screen">
    <section class="flex justify-center items-center w-full">
      <IButton
        class="w-25 bg-gradient-to-r from-[#FFA279] to-[#F3743D] text-secondary mr-5 px-3 py-2 rounded"
        @click="decrement"
      >
        PREVIOUS
      </IButton>

      <ICard
        :currentList="currentList"
        v-if="activeWords.length > 0"
        :frontText="activeWords[currentIndex].word"
        :backText="activeWords[currentIndex]"
      />

      <IButton
        class="w-25 bg-gradient-to-r from-[#FFA279] to-[#F3743D] text-secondary ml-5 px-3 py-2 rounded"
        @click="increment"
      >
        NEXT
      </IButton>
    </section>
  </main>
</template>
