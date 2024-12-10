<template>
  <div @click="toggleFlip" class="perspective-1000">
    <div
      class="card ss:w-48 md:w-80 w-80 ss:h-80 lg:h-58 transform-style-preserve-3d transition-transform duration-500"
      :class="{ 'rotate-y-180': isFlipped }"
    >
      <div
        class="absolute w-full h-full backface-hidden flex justify-center items-center bg-white border rounded-lg p-5"
      >
        <p class="text-xl text-black">{{ frontText }}</p>
      </div>

      <div
        class="absolute w-full h-full backface-hidden rotate-y-180 flex justify-center items-center bg-white border rounded-lg p-5"
      >
        <div v-if="currentList === 'irregularVerbs'">
          <p class="text-xl text-black mb-3">
            Infinitive: {{ backText.infinitive }}
          </p>
          <p class="text-xl text-black mb-3">Past: {{ backText.past }}</p>
          <p class="text-xl text-black">
            Participle: {{ backText.participle }}
          </p>
        </div>

        <div v-else>
          <p class="text-xl text-black text-center mb-3">
            definition: <br />
            {{ backText.definition }}
          </p>
          <p class="text-xl text-black text-center" v-if="backText.example">
            example: <br />
            {{ backText.example }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  currentList: String,
  frontText: String,
  backText: Object,
})

const isFlipped = ref(false)

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}

console.log('currentList', props.currentList)
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.card {
  transform-style: preserve-3d;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.backface-hidden {
  backface-visibility: hidden;
}
</style>
