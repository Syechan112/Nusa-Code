<template>
  <div class="fixed top-6 inset-x-0 z-[100] px-4 flex justify-center pointer-events-none">
    
    <header 
      class="hidden md:grid grid-cols-3 items-center w-full max-w-5xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-10 py-4 pointer-events-auto"
    >
      <div class="flex justify-start">
        <RouterLink to="/" class="flex items-center gap-3 group">
          <div class="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:bg-emerald-500">
            <img 
              src="/src/assets/image/logo/main/nusa-code.png" 
              alt="Logo" 
              class="w-5 h-5 object-contain invert"
            />
          </div>
          <span class="font-black text-slate-900 tracking-tighter text-lg uppercase italic">
            NUSA<span class="text-emerald-500">CODE</span>
          </span>
        </RouterLink>
      </div>

      <nav class="flex items-center justify-center gap-10">
        <RouterLink 
          v-for="item in navigation" :key="item.name" :to="item.to" 
          class="relative text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors py-1 group"
          active-class="text-slate-900"
        >
          {{ item.name }}
          <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-500 group-hover:w-full"></span>
        </RouterLink>
      </nav>

      <div class="flex justify-end">
        <a href="https://wa.me/628979673149" 
          target="_blank" 
          rel="noopener noreferrer"
          class="px-8 py-2.5 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all duration-300 active:scale-95 inline-block">
          Hubungi Kami
        </a>
      </div>
    </header>

    <div class="md:hidden fixed bottom-8 right-6 flex flex-col items-end pointer-events-auto">
      
      <transition
        enter-active-class="transition duration-500 cubic-bezier(0.16, 1, 0.3, 1)"
        enter-from-class="opacity-0 scale-90 translate-y-10"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-90 translate-y-10"
      >
        <div v-show="isOpen" class="mb-5 bg-white border border-slate-200 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-2xl p-2 w-64 overflow-hidden">
          <div class="flex flex-col">
            <div class="px-4 py-3 border-b border-slate-50 mb-1">
              <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">Navigator</span>
            </div>
            <RouterLink 
              v-for="item in navigation" :key="item.name" :to="item.to" 
              @click="isOpen = false"
              class="px-5 py-4 text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-all flex items-center justify-between"
              active-class="text-emerald-600 bg-emerald-50/30"
            >
              {{ item.name }}
              <div v-if="$route.path === item.to" class="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
            </RouterLink>
            <div class="p-2 mt-1">
              <a href="https://wa.me/628979673149" target="_blank" class="flex items-center justify-center w-full py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition-colors">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </transition>

      <button 
        @click="isOpen = !isOpen" 
        class="w-16 h-16 rounded-full shadow-[0_15px_30px_-5px_rgba(16,185,129,0.3)] flex items-center justify-center transition-all duration-500 active:scale-90 relative overflow-hidden group"
        :class="isOpen ? 'bg-white text-slate-900' : 'bg-emerald-500 text-white'"
      >
        <div class="relative z-10">
          <svg v-if="!isOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 8h16M4 16h16" />
          </svg>
          <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <div class="absolute inset-0 bg-emerald-600 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full opacity-0 group-hover:opacity-10"></div>
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const isOpen = ref(false);
const $route = useRoute();

const navigation = [
  { name: 'Beranda', to: '/' },
  { name: 'Layanan', to: '/layanan' },
  { name: 'Portofolio', to: '/portofolio' },
  { name: 'Tentang', to: '/tentang' },
];
</script>

<style scoped>
/* Industrial Font Override if needed */
header, button, a {
  font-family: 'Inter', sans-serif;
}

/* Custom shadow for white theme */
header {
  box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.05);
}
</style>