<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900" id="app">
    <Sidebar />

    <div class="flex flex-col flex-1 w-full">
      <Navigation />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navigation from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Sidebar,
    Navigation
  }
}
</script>
