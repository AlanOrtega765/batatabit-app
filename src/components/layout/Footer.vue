<script setup>
import BatataBitLeftIcon from "../icons/BatataBitLeftIcon.vue";

const links = [
  { text: "Linkedin", url: "#" },
  { text: "Crunchbase", url: "#" },
  { text: "Hackernews", url: "#" },
];
</script>

<template>
  <footer class="flex items-center bg-bitcoin-orange min-h-[150px] md:h-[270px] w-full">
    <div class="flex justify-evenly items-center w-[80%] md:w-[100%] mx-auto">
      <div class="flex flex-col">
        <a
          class="text-md text-just-white font-medium leading-[18px] mb-2 md:text-2xl md:leading-6"
          :href="link.url"
          v-for="(link, index) in links"
          :key="index"
          >{{ link.text }}</a
        >
      </div>
      <div>
        <BatataBitLeftIcon class="mx-auto md:w-[100px] md:h-[54px]" />
        <h6 class="text-[8px] text-soft-orange font-medium leading-[18px] md:text-[17.79px] md:leading-[40.03px]">
          ® Batatabit 2020
        </h6>
      </div>
    </div>
  </footer>
</template>
