<!-- src/components/ICard.vue -->
<template>
  <div @click="toggleFlip" class="perspective-1000">
    <div
      class="card w-80 h-48 transform-style-preserve-3d transition-transform duration-500"
      :class="{ 'rotate-y-180': isFlipped }"
    >
      <!-- Передняя сторона карточки -->
      <div
        class="absolute w-full h-full backface-hidden flex justify-center items-center bg-white border rounded-lg p-20"
      >
        <p class="text-xl text-black">{{ frontText }}</p>
      </div>

      <!-- Задняя сторона карточки -->
      <div
        class="absolute w-full h-full backface-hidden rotate-y-180 flex justify-center items-center bg-white border rounded-lg p-20"
      >
        <!-- Если currentList равен 'irregularVerbs' -->
        <div v-if="currentList === 'irregularVerbs'">
          <p class="text-xl text-black">
            Infinitive: {{ backText.infinitive }}
          </p>
          <p class="text-xl text-black">Past: {{ backText.past }}</p>
          <p class="text-xl text-black">
            Participle: {{ backText.participle }}
          </p>
        </div>

        <!-- Если currentList НЕ равен 'irregularVerbs' -->
        <div v-else>
          <p class="text-xl text-black">
            definition: {{ backText.definition }}
          </p>
          <p class="text-xl text-black">example: {{ backText.example }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'

// Пропсы для получения данных
const props = defineProps({
  currentList: String, // список для отображения
  frontText: String, // текст на передней стороне
  backText: Object, // текст на задней стороне
})
// Состояние для отслеживания переворота
const isFlipped = ref(false)

// Функция для переключения флага переворота
const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}

console.log('currentList', props.currentList)
</script>

<style scoped>
/* Стиль для 3D-преобразования */
.perspective-1000 {
  perspective: 1000px;
}

/* Стиль для карточки с 3D-преобразованиями */
.card {
  transform-style: preserve-3d;
}

/* Добавляем переворот карточки */
.rotate-y-180 {
  transform: rotateY(180deg);
}

/* Скрываем обратную сторону при перевороте */
.backface-hidden {
  backface-visibility: hidden;
}
</style>
