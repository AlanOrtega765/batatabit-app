<script setup>
import ArrowDownIcon from "../icons/ArrowDownIcon.vue";
</script>

<template>
  <header
    class="relative bg-linear-gradient text-just-white flex flex-col justify-center w-full min-w-[320px] h-[334px] text-center"
  >
    <img
      class="w-[150px] h-[24px] self-center -mt-[40px]"
      src="../../assets/logo.svg"
    />
    <div class="mx-auto w-11/12 min-w-[288px] max-w-[900px] mt-[40px]">
      <h1 class="text-3xl leading-[26px]">
        La próxima revolución en el intercambio de criptomonedas.
      </h1>
      <p class="mt-[40px] text-soft-orange text-md leading-[18px]">
        Batatabit te ayuda a navegar entre los diferentes precios y tendencias.
      </p>
      <a
        class="absolute min-w-max -bottom-4 left-1/2 -translate-x-1/2 text-md leading-[18.23px] flex items-center mx-auto gap-4 text-warm-black-primary font-bold h-[48px] w-[229px] pl-4 rounded bg-off-white drop-shadow-button"
        href="#"
        >Conoce Nuestros Planes
        <span><ArrowDownIcon class="w-3 h-[7.41px]" /></span
      ></a>
    </div>
  </header>
</template>
