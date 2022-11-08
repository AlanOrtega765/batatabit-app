<script setup>
defineProps({
  icon: Object,
  title: String,
  paragraph: String,
});
</script>
<template>
  <div
    class="bg-warm-black-secondary w-[90%] mx-auto min-w-[288px] min-h-[152px] rounded flex flex-col px-4 justify-center drop-shadow-card"
  >
    <component :is="icon" />
    <h3 class="text-just-white text-xl leading-[18px] font-bold mt-3">
      {{ title }}
    </h3>
    <p class="text-[#808080] text-md leading-[18px] mt-[10px]">
      {{ paragraph }}
    </p>
  </div>
</template>
