<script setup>
import TrendingDownIcon from "./icons/TrendingDownIcon.vue";
import TrendingUpIcon from "./icons/TrendingUpIcon.vue";

defineProps({
  title: String,
  dataTable: Array,
  icon: Object,
});
</script>

<template>
  <div class="w-[50%] min-w-[230px] max-w-[300px] mx-auto">
    <h3 class="text-xl leading-[23.44px] text-bitcoin-orange ml-3 font-bold">
      {{ title }}
    </h3>
    <table
      class="relative bg-just-white rounded-lg mx-auto font-inter mt-3 w-full"
    >
      <tr v-for="(table, index) in dataTable" :key="index">
        <td
          class="text-lg leading-[19.36px] px-3 py-[10px] text-off-grey font-medium border-red-400 border-b-[1px] border-r-[1px]"
        >
          {{ table.name_cell }}
        </td>
        <td
          class="flex justify-center items-center h-full px-3 py-[11px] text-md text-just-grey border-off-white border-b-[1px]"
        >
          $ {{ table.value }}
          <span class="ml-[10.5px] font-normal"><TrendingDownIcon /></span>
        </td>
      </tr>
      <button
        class="absolute top-1/2 -translate-y-1/2 -right-9 h-full px-2 rounded-lg bg-transparent"
      >
        <component :is="icon" />
      </button>
    </table>
  </div>
</template>
