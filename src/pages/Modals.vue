<template>
  <div class="container grid px-6 mx-auto">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Modals
    </h2>
    <!-- CTA -->
    <CTA />

    <div
      class="max-w-2xl px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <p class="mb-4 text-gray-600 dark:text-gray-400">
        This is possibly
        <strong>the most accessible a modal can get</strong>
        , using JavaScript. When opened, it uses
        <code>assets/js/focus-trap.js</code>
        to create a
        <em>focus trap</em>
        , which means that if you use your keyboard to navigate around, focus
        won't leak to the elements behind, staying inside the modal in a loop,
        until you take any action.
      </p>

      <p class="text-gray-600 dark:text-gray-400">
        Also, on small screens it is placed at the bottom of the screen, to
        account for larger devices and make it easier to click the larger
        buttons.
      </p>
    </div>

    <div>
      <button
        @click="openModal"
        class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
      >
        Open Modal
      </button>
    </div>
  </div>
</template>

<script>
import CTA from "../components/CTA.vue";

export default {
  name: "Modals",
  components: {
    CTA,
  },
};
</script>
