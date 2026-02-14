<template>
  <section ref="ctaSection" class="relative py-40 bg-white overflow-hidden border-t border-slate-100">
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         :style="{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }">
    </div>

    <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[20vw] font-black text-slate-50 select-none pointer-events-none whitespace-nowrap italic tracking-tighter uppercase opacity-50">
      Build Now
    </div>

    <div class="container mx-auto px-6 relative z-10 text-center">
      <div 
        class="max-w-4xl mx-auto transition-all duration-1000 transform"
        :class="isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'"
      >
        <h2 class="text-[10px] font-black uppercase tracking-[0.6em] text-emerald-600 mb-8 italic">
          // Siap Meluncur ke Digital?
        </h2>
        
        <h3 class="text-5xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase mb-12">
          MAU PUNYA WEBSITE <br/> 
          <span class="text-emerald-600 italic font-light">TANPA RIBET?</span>
        </h3>

        <p class="text-slate-500 font-medium text-lg md:text-xl max-w-xl mx-auto mb-16 leading-relaxed">
          Jangan biarkan kompetitor mendahului Anda. Amankan alamat website bisnis Anda hari ini dan mulai jualan dengan lebih profesional.
        </p>

        <div class="flex flex-col items-center gap-6">
          <a 
            :href="waLink" 
            target="_blank"
            class="group relative inline-flex items-center gap-6 md:px-12 md:py-6 px-8 py-4 bg-slate-900 text-white overflow-hidden transition-all duration-500 hover:bg-emerald-600 shadow-2xl hover:shadow-emerald-500/40"
          >
            <div class="absolute inset-0 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full"></div>
            
            <span class="relative z-10 text-sm font-black uppercase tracking-[0.3em]">
              Konsultasi Gratis Sekarang
            </span>
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="3" 
              class="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// 1. WhatsApp Configuration Data
const contact = {
  phone: "628979673149",
  text: "Halo, saya tertarik dengan proyek yang ada di portofolio Anda dan ingin diskusi untuk bisnis saya."
};

// 2. Compute WhatsApp Link
const waLink = computed(() => {
  return `https://wa.me/${contact.phone}?text=${encodeURIComponent(contact.text)}`;
});

const isVisible = ref(false);
const ctaSection = ref(null);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting;
  }, { threshold: 0.3 });

  if (ctaSection.value) observer.observe(ctaSection.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.scale-95 { transform: scale(0.95) translateY(20px); }
.scale-100 { transform: scale(1) translateY(0); }
</style>