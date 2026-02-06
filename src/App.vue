<template>
  <div class="min-h-screen bg-white">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
</script>
