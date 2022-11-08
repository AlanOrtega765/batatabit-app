<script setup>
import TrendingDownIcon from "./icons/TrendingDownIcon.vue";
import TrendingUpIcon from "./icons/TrendingUpIcon.vue";
</script>

<template>
  <div class="w-[90%] min-w-[230px] max-w-[300px] mx-auto">
    <h3 class="text-xl leading-[23.44px] text-bitcoin-orange ml-3 font-bold">
      Monedas
    </h3>
    <table class="bg-just-white rounded-lg mx-auto font-inter mt-3 w-full">
      <tr>
        <td
          class="text-lg leading-[19.36px] px-3 py-[10px] text-off-grey font-medium border-off-white border-b-[1px] border-r-[1px]"
        >
          Bitcoin
        </td>
        <td
          class="flex justify-center items-center h-full px-3 py-[11px] text-md text-just-grey border-off-white border-b-[1px]"
        >
          $ 1.96
          <span class="ml-[10.5px] font-normal"><TrendingDownIcon /></span>
        </td>
      </tr>
      <tr>
        <td
          class="text-lg leading-[19.36px] px-3 py-[10px] text-off-grey font-medium border-off-white border-b-[1px] border-r-[1px]"
        >
          Ethereum
        </td>
        <td
          class="flex justify-center items-center h-full px-3 py-[11px] text-md text-just-grey border-off-white border-b-[1px]"
        >
          $ 0.07
          <span class="ml-[10.5px] font-normal"><TrendingUpIcon /></span>
        </td>
      </tr>
      <tr>
        <td
          class="text-lg leading-[19.36px] px-3 py-[10px] text-off-grey font-medium border-off-white border-b-[1px] border-r-[1px]"
        >
          Ripple
        </td>
        <td
          class="flex justify-center items-center h-full px-3 py-[11px] text-md text-just-grey border-off-white border-b-[1px]"
        >
          $ 2.15
          <span class="ml-[10.5px] font-normal"><TrendingDownIcon /></span>
        </td>
      </tr>
      <tr>
        <td
          class="text-lg leading-[19.36px] px-3 py-[10px] text-off-grey font-medium border-off-white border-r-[1px]"
        >
          Stellar
        </td>
        <td
          class="flex justify-center items-center h-full px-3 py-[11px] text-md text-just-grey"
        >
          $ 4.96
          <span class="ml-[10.5px] font-normal"><TrendingDownIcon /></span>
        </td>
      </tr>
    </table>
  </div>
</template>
