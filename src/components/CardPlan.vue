<script setup>
import ArrowRightIcon from "./icons/ArrowRightIcon.vue";

defineProps({
  title: String,
  description: String,
  price: Number,
});
</script>

<template>
  <div
    class="mx-auto min-w-[190px] max-w-[200px] bg-just-white drop-shadow-1 rounded-lg pb-6"
  >
    <span
      class="absolute -translate-y-1/2 left-1/2 -translate-x-1/2 justify-center items-center text-just-white p-2 w-[50%] min-w-[100px] bg-bitcoin-orange font-bold font-inter mx-auto rounded-lg"
      :class="title === 'Pago Anual' ? 'flex' : 'hidden'"
      >Recomendado</span
    >
    <div class="pt-8 text-center">
      <h3 class="text-md leading-[18px]">{{ title }}</h3>
      <div class="relative max-w-fit mx-auto mt-2">
        <span
          class="absolute -left-3 top-2 leading-[14.52px] font-medium font-inter text-dark-grey"
          >$</span
        >
        <span
          class="text-[52px] leading-[62.93px] tracking-[-4px] font-inter font-bold"
          >{{ price }}</span
        >
      </div>
      <p
        class="w-[80%] leading-[14.52px] font-medium text-just-grey mx-auto mt-2"
      >
        {{ description }}
      </p>
      <button
        class="flex items-center justify-evenly mx-auto mt-4 w-[80%] bg-off-white border-bitcoin-orange border-2 rounded py-3 px-2 text-warm-black-primary text-md leading-[18.23px] font-bold"
      >
        Escoger este <span> <ArrowRightIcon /> </span>
      </button>
    </div>
  </div>
</template>
