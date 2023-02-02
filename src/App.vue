<script setup>
  import { ref, reactive } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import genRoute from "./routes/genRoute";
  import generateRoutes from "./routes/generateRoutes";
  const router = useRouter();
  let testRoute = reactive({});
  testRoute.base = genRoute;
  testRoute.gen = generateRoutes;
</script>

<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1
          @click="counter = 0"
          class="text-3xl font-bold leading-tight text-gray-900"
        >
          {{ $route.meta.title }} / {{ counter }}
        </h1>
      </div>
    </header>
    <main>
      <router-view />
      <div class="flex flex-row divide-x-2">
        <div>
          <pre class="p-4">{{ testRoute.base }}</pre>
        </div>
        <div>
          <pre class="p-4">{{ testRoute.gen }}</pre>
        </div>
      </div>

      <span class="w-full text-red-500">
        <hr />
      </span>
      <!-- <pre class="p-4">{{ testRoute.gen }}</pre> -->
      <!-- <pre class="p-4 text-teal-700">{{ router }}</pre> -->
    </main>
  </div>
</template>
