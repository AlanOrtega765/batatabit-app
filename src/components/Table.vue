<script setup>
import TrendingDownIcon from "./icons/TrendingDownIcon.vue";
import TrendingUpIcon from "./icons/TrendingUpIcon.vue";

defineProps({
  title: String,
  dataTable: Array,
  icon: Object,
});

const emit = defineEmits(["changeTable"]);

const changeTable = () => emit("changeTable");
</script>

<template>
  <div class="w-[50%] min-w-[230px] max-w-[300px] mx-auto">
    <h3
      class="text-xl leading-[23.44px] ml-3 font-bold"
      :class="
        title === 'Monedas' ? 'text-bitcoin-orange' : 'text-secondary-blue'
      "
    >
      {{ title }}
    </h3>
    <table
      class="relative bg-just-white rounded-lg mx-auto font-inter mt-3 w-full"
    >
      <tr
        class="border-off-white border-b-[1px] last-of-type:border-b-0"
        v-for="(table, index) in dataTable"
        :key="index"
      >
        <td
          class="text-lg leading-[19.36px] px-3 py-[10px] text-off-grey font-medium border-off-white border-r-[1px]"
        >
          {{ table.name_cell }}
        </td>
        <td
          class="flex justify-center items-center h-full px-3 py-[11px] text-md text-just-grey"
        >
          $ {{ table.value }}
          <span class="ml-[10.5px] font-normal">
            <TrendingDownIcon
              v-if="
                title === 'Comisiones'
                  ? false
                  : table.name_cell === 'Ethereum'
                  ? false
                  : true
              "
            />
            <TrendingUpIcon
              v-if="table.name_cell === 'Ethereum' ? true : false"
            />
          </span>
        </td>
      </tr>
      <button
        @click="changeTable"
        v-if="title === 'Comisiones' ? false : true"
        class="absolute top-1/2 -translate-y-1/2 -right-9 h-full px-2 rounded-lg bg-transparent"
      >
        <component :is="icon" />
      </button>
      <button
        @click="changeTable"
        v-if="title === 'Monedas' ? false : true"
        class="absolute top-1/2 -translate-y-1/2 -left-9 h-full px-2 rounded-lg bg-transparent"
      >
        <component :is="icon" />
      </button>
    </table>
    <h6
      class="rounded-lg w-[172px] p-2 mt-4 font-inter mx-auto"
      :class="title === 'Monedas' ? 'bg-soft-orange' : 'bg-soft-blue'"
    >
      <span class="font-bold">Actualizado: </span>19 Julio 23:48
    </h6>
  </div>
</template>
