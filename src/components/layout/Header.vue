<script setup></script>

<template>
  <header
    class="relative bg-linear-gradient text-just-white flex flex-col justify-center w-full min-w-[320px] min-h-[334px] md:h-[550px] text-center"
  >
    <img
      class="w-[150px] h-[24px] self-center -mt-[40px] md:w-[174px] md:h-[27.69px] md:mt-[100px]"
      src="../../assets/logo.svg"
    />
    <div class="mx-auto w-11/12 min-w-[288px] max-w-[900px] mt-[40px]">
      <h1 class="text-3xl leading-[26px] md:text-4xl font-bold md:leading-[42px] md:w-[65%] mx-auto">
        La próxima revolución en el intercambio de criptomonedas.
      </h1>
      <p class="mt-[40px] text-soft-orange text-md leading-[18px] md:text-2xl md:leading-6 md:w-[60%] lg:w-[55%] mx-auto md:mb-[100px]">
        Batatabit te ayuda a navegar entre los diferentes precios y tendencias del mercado.
      </p>
      <slot />
    </div>
  </header>
</template>
