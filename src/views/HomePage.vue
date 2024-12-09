<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import IHeader from '@/components/IHeader/IHeader.vue'
import ICard from '@/components/ICard/ICard.vue'
import IForm from '@/components/IForm/IForm.vue'
import IButton from '@/components/IButton/IButton.vue'
import { wordLists } from '../data/wordLists'

const currentList = ref('irregularVerbs')
const currentIndex = ref(0)

const activeWords = computed(() => {
  if (currentList.value === 'ownList') {
    const storedList = JSON.parse(localStorage.getItem('ownList')) || []
    return storedList
  } else {
    return wordLists[currentList.value] || []
  }
})

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

const handleUseWords = () => {
  currentList.value = 'ownList'
  resetIndex()
}

// Восстанавливаем состояние при загрузке страницы
onMounted(() => {
  const savedList = localStorage.getItem('currentList')
  const savedIndex = localStorage.getItem('currentIndex')

  if (savedList) currentList.value = savedList
  if (savedIndex) currentIndex.value = parseInt(savedIndex, 10)
})

// Следим за изменениями currentList и currentIndex и сохраняем в localStorage
watch([currentList, currentIndex], ([newList, newIndex]) => {
  localStorage.setItem('currentList', newList)
  localStorage.setItem('currentIndex', newIndex.toString())
})
</script>

<template>
  <IHeader @select-list="updateList" />

  <main class="flex h-screen">
    <section class="flex justify-center items-center w-full">
      <IButton
        v-if="currentList !== 'addOwnList'"
        class="w-25 bg-gradient-to-r from-[#FFA279] to-[#F3743D] text-secondary mr-5 px-3 py-2 rounded"
        @click="decrement"
      >
        PREVIOUS
      </IButton>

      <IForm v-if="currentList === 'addOwnList'" @use-words="handleUseWords" />

      <ICard
        v-else-if="currentList === 'ownList'"
        :currentList="currentList"
        :frontText="activeWords[currentIndex].word"
        :backText="activeWords[currentIndex]"
      />

      <ICard
        v-else
        :currentList="currentList"
        :frontText="activeWords[currentIndex].word"
        :backText="activeWords[currentIndex]"
      />

      <IButton
        v-if="currentList !== 'addOwnList'"
        class="w-25 bg-gradient-to-r from-[#FFA279] to-[#F3743D] text-secondary ml-5 px-3 py-2 rounded"
        @click="increment"
      >
        NEXT
      </IButton>
    </section>
  </main>
</template>
