<script setup>
import { ref } from "vue";

import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

import Table from "./components/Table.vue";
import Card from "./components/Card.vue";
import CardPlan from "./components/CardPlan.vue";

import ClockIcon from "./components/icons/ClockIcon.vue";
import EyeIcon from "./components/icons/EyeIcon.vue";
import DollarSignIcon from "./components/icons/DollarSignIcon.vue";
import CheckCircleIcon from "./components/icons/CheckCircleIcon.vue";
import ArrowDownIcon from "./components/icons/ArrowDownIcon.vue";
import ArrowRightTableIcon from "./components/icons/ArrowRightTableIcon.vue";
import ArrowLeftTableIcon from "./components/icons/ArrowLeftTableIcon.vue";
import BatataBitIcon from "./components/icons/BatataBitIcon.vue";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { computed } from "@vue/reactivity";

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
const planCards = [
  {
    title: "Pago Mensual",
    price: 19,
    description: "*Paga 1 vez al mes desde el día de tu compra.",
  },
  {
    title: "Pago Anual",
    price: 99,
    description: "*Ahorras $129 comparado al plan mensual.",
  },
  {
    title: "Acceso de por vida",
    price: 129,
    description: "*Ahorro infinito, paga sólo una vez en la vida.",
  },
];
const triggerArrowButton = ref(false);

const changeTable = () =>
  (triggerArrowButton.value = !triggerArrowButton.value);
</script>

<template>
  <Header>
    <a
      class="absolute min-w-max -bottom-4 left-1/2 -translate-x-1/2 text-md leading-[18.23px] flex items-center mx-auto gap-4 text-warm-black-primary font-bold h-[48px] w-[229px] pl-4 rounded bg-off-white drop-shadow-1"
      href="#payment"
      >Conoce Nuestros Planes
      <span><ArrowDownIcon class="w-3 h-[7.41px]" /></span
    ></a>
  </Header>
  <main>
    <section class="py-14 mx-auto flex flex-col items-center">
      <img class="mx-auto" src="./assets/bitcoin.svg" />
      <div class="mt-14">
        <h2
          class="text-3xl md:text-4xl leading-[26px] md:leading-[42px] font-bold text-center w-[90%] md:w-[70%] mx-auto"
        >
          Visibilizamos todas las tasas de cambio.
        </h2>
        <p
          class="text-just-grey w-[90%] md:w-[60%] mx-auto text-md md:text-2xl leading-[18px] md:leading-6 font-medium text-center mt-6"
        >
          Traemos información en tiempo real de las casas de cambio y las
          monedas más importantes del mundo.
        </p>
      </div>
      <section
        class="relative mt-14 w-full h-[300px] flex justify-center overflow-hidden"
      >
        <div
          class="gap-8 mx-auto w-[70%] min-w-[235px] max-w-[500px] hidden md:flex"
        >
          <Table
            title="Monedas"
            :data-table="[
              { name_cell: 'Bitcon', value: '1.96' },
              { name_cell: 'Ethereum', value: '0.07' },
              { name_cell: 'Ripple', value: '2.15' },
              { name_cell: 'Stellar', value: '4.96' },
            ]"
          />
          <Table
            title="Comisiones"
            :data-table="[
              { name_cell: 'Bitrade', value: '12.96' },
              { name_cell: 'Bitpreco', value: '13.07' },
              { name_cell: 'Novadax', value: '13.15' },
              { name_cell: 'Coinext', value: '14.96' },
            ]"
          />
        </div>
        <div
          class="absolute flex w-[200%] md:hidden"
          :class="triggerArrowButton ? '-left-[100%]' : 'left-0'"
        >
          <div class="mx-auto w-[70%] min-w-[235px] max-w-[500px]">
            <Table
              title="Monedas"
              :data-table="[
                { name_cell: 'Bitcon', value: '1.96' },
                { name_cell: 'Ethereum', value: '0.07' },
                { name_cell: 'Ripple', value: '2.15' },
                { name_cell: 'Stellar', value: '4.96' },
              ]"
              :icon="ArrowRightTableIcon"
              @change-table="changeTable"
            />
          </div>
          <div class="mx-auto w-[70%] min-w-[235px] max-w-[500px]">
            <Table
              title="Comisiones"
              :data-table="[
                { name_cell: 'Bitrade', value: '12.96' },
                { name_cell: 'Bitpreco', value: '13.07' },
                { name_cell: 'Novadax', value: '13.15' },
                { name_cell: 'Coinext', value: '14.96' },
              ]"
              :icon="ArrowLeftTableIcon"
              @change-table="changeTable"
            />
          </div>
        </div>
      </section>
    </section>
    <section class="relative bg-warm-black-primary pt-16 pb-16">
      <BatataBitIcon
        class="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
      />
      <h2
        class="text-3xl md:text-4xl md:leading-[42px] w-[90%] md:w-[70%] mx-auto leading-[26px] text-center text-just-white font-bold"
      >
        Te ayudamos a tomar la mejor decisión.
      </h2>
      <p
        class="w-[90%] mx-auto text-md leading-[18px] text-center text-[#808080] mt-[24px] mb-[32px] md:text-2xl md:leading-6 md:w-[60%]"
      >
        Que la incertidumbre en materia de criptomonedas sea cosa del pasado.
      </p>
      <div
        class="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-y-6 md:gap-y-5 md:w-[80%] max-w-[1000px] mx-auto"
      >
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
        <source
          class="w-full"
          srcset="./assets/bitcoinbaby-mobile.png"
          media="(min-width: 320px) and (max-width: 720px)"
        />
        <img class="w-full" src="./assets/bitcoinbaby.png" />
      </picture>
      <h2
        class="absolute top-0 left-0 flex justify-center md:items-center w-full h-full text-just-white text-3xl md:text-4xl md:leading-[42px] leading-[26px] pt-16 md:pt-0 font-bold"
      >
        Conócelo hoy.
      </h2>
    </section>
    <section class="pt-16" id="payment">
      <div class="w-[90%] mx-auto">
        <h2
          class="text-3xl leading-[26px] text-center font-bold md:text-4xl md:leading-[42px] md:w-[60%] mx-auto"
        >
          Escoge el plan que mejor se ajuste a ti.
        </h2>
        <p
          class="text-md leading-[18px] text-center font-medium text-just-grey mt-6 md:text-2xl md:leading-6 md:w-[70%] mx-auto"
        >
          Cualquier plan te da acceso completo a nuestra plataforma.
        </p>
      </div>
      <div
        class="grid-cols-3 py-16 hidden md:grid md:w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[40%] mx-auto"
      >
        <CardPlan
          v-for="(plan, index) in planCards"
          :key="index"
          :title="plan.title"
          :description="plan.description"
          :price="plan.price"
        />
      </div>
      <Swiper
        :initial-slide="1"
        class="py-16 md:hidden"
        :modules="[Navigation]"
        navigation
        :slides-per-view="1"
        :style="'width: 90%;'"
      >
        <SwiperSlide v-for="(plan, index) in planCards" :key="index">
          <CardPlan
            :title="plan.title"
            :description="plan.description"
            :price="plan.price"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  </main>
  <Footer />
</template>
