<template>
  <section ref="ctaSection" class="relative py-40 bg-white overflow-hidden">
    <div class="absolute inset-0 opacity-[0.1] pointer-events-none" 
         :style="{ backgroundImage: 'radial-gradient(#64748b 0.8px, transparent 0.8px)', backgroundSize: '32px 32px' }">
    </div>

    <div class="container mx-auto px-6 relative z-10 text-center">
      
      <div 
        class="max-w-5xl mx-auto transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform"
        :class="[isVisible ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm']"
      >
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 mb-10">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Slot Terbatas untuk Kuartal Ini</span>
        </div>

        <h2 class="text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.8] tracking-tighter mb-12 uppercase">
          MAU KERJA BARENG <br/> 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
            TIM YANG JELAS?
          </span>
        </h2>

        <p class="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
          Berhenti membuang budget untuk "janji manis". Mari bicara arsitektur, strategi, dan hasil nyata bagi bisnis Anda.
        </p>

        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="#contact" 
            class="group relative px-3 md:px-12 py-3 md:py-6 bg-slate-900 text-white overflow-hidden transition-all duration-500 hover:pr-16"
          >
            <span class="relative z-10 text-md md:text-lg font-black uppercase tracking-widest">Mulai Konsultasi Gratis</span>
            <div class="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <svg class="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>

          <a 
            href="https://wa.me/your-number" 
            class="text-slate-900 font-black uppercase tracking-widest text-sm border-b-2 border-slate-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-all"
          >
            Atau Tanya via WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const ctaSection = ref(null);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    // Animasi akan dimuat ulang setiap kali masuk view sesuai permintaan awal Anda
    isVisible.value = entry.isIntersecting;
  }, { threshold: 0.3 });

  if (ctaSection.value) observer.observe(ctaSection.value);
});

onUnmounted(() => observer?.disconnect());
</script>

<style scoped>
/* Kinetic Typography feel */
h2 {
  transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.group:hover span {
  letter-spacing: 0.3em;
  transition: all 0.5s ease;
}
</style>