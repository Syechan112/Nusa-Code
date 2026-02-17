<template>
  <div class="min-h-screen bg-white">
    <TheHeader />
    <AiChat />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import TheHeader from '@/components/layout/TheHeader.vue';
import AiChat from './components/layout/ai_intergrate/ChatBot.vue';  
import TheFooter from '@/components/layout/TheFooter.vue';
</script>
