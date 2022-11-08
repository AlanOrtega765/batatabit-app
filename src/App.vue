<script setup>
import Header from "./components/layout/Header.vue";
import Table from "./components/Table.vue";
import Card from "./components/Card.vue";

import ClockIcon from "./components/icons/ClockIcon.vue";
import EyeIcon from "./components/icons/EyeIcon.vue";
import DollarSignIcon from "./components/icons/DollarSignIcon.vue";
import CheckCircleIcon from "./components/icons/CheckCircleIcon.vue";

const cards = [
  {
    icon: ClockIcon,
    title: "Tiempo real",
    paragraph:
      "Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.",
  },
  {
    icon: EyeIcon,
    title: "No hay tasas escondidas",
    paragraph:
      "Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.",
  },
  {
    icon: DollarSignIcon,
    title: "Compara monedas",
    paragraph:
      "No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual.",
  },
  {
    icon: CheckCircleIcon,
    title: "Información confiable",
    paragraph:
      "Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.",
  },
];
</script>

<template>
  <Header />
  <main>
    <section class="py-14 mx-auto flex flex-col items-center">
      <img class="mx-auto" src="./assets/bitcoin.svg" />
      <div class="mt-14">
        <h2 class="text-3xl leading-[26px] font-bold text-center">
          Visibilizamos todas las tasas de cambio.
        </h2>
        <p
          class="text-just-grey w-[90%] mx-auto text-md leading-[18px] font-medium text-center mt-6"
        >
          Traemos información en tiempo real de las casas de cambio y las
          monedas más importantes del mundo.
        </p>
      </div>
      <section class="mt-14 w-full">
        <div class="mx-auto w-[70%] min-w-[235px] max-w-[500px]">
          <Table />
        </div>
      </section>
      <h6 class="bg-soft-orange rounded-lg w-[172px] p-2 mt-4 font-inter">
        <span class="font-bold">Actualizado: </span>19 Julio 23:48
      </h6>
    </section>
    <section class="bg-warm-black-primary pt-16 pb-10">
      <h2 class="text-3xl leading-[26px] text-center text-just-white font-bold">
        Creamos un producto sin comparación.
      </h2>
      <p
        class="text-md leading-[18px] text-center text-[#808080] mt-[24px] mb-[32px]"
      >
        Confiable y diseñado para su uso diario.
      </p>
      <div class="grid grid-cols-1 grid-rows-4 gap-6">
        <Card
          v-for="(card, index) in cards"
          :key="index"
          :icon="card.icon"
          :title="card.title"
          :paragraph="card.paragraph"
        />
      </div>
    </section>
    <section class="relative">
      <picture>
        <source class="w-full" srcset="./assets/bitcoinbaby-mobile.png" media="(min-width: 320px) and (max-width: 720px)"/>
        <img class="w-full" src="./assets/bitcoinbaby.png">
      </picture>
      <h2
        class="absolute top-0 left-0 flex justify-center md:items-center w-full h-full text-just-white text-3xl md:text-4xl md:leading-[42px] leading-[26px] pt-16 md:pt-0 font-bold"
      >
        Conócelo hoy.
      </h2>
    </section>
    <section></section>
  </main>
  <footer></footer>
</template>
