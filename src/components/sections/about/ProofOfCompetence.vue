<template>
  <section ref="proofSection" class="relative py-24 bg-white overflow-hidden border-t border-slate-100">
    <div class="absolute inset-0 opacity-[0.02] pointer-events-none" 
         :style="{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        <div v-for="(stat, index) in stats" :key="index" 
             class="p-8 border border-slate-100 bg-slate-50/50 transition-all duration-1000 transform"
             :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
             :style="{ transitionDelay: `${index * 150}ms` }">
          <div class="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-4">{{ stat.label }}</div>
          <div class="flex items-baseline gap-1">
            <span class="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
              {{ isVisible ? stat.value : '0' }}
            </span>
            <span class="text-2xl font-black text-emerald-500">{{ stat.suffix }}</span>
          </div>
          <p class="mt-4 text-xs font-bold text-slate-400 uppercase leading-tight">{{ stat.subtext }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10']" class="transition-all duration-1000">
          <h3 class="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-6 italic">
            Divalidasi Oleh <br/> <span class="text-emerald-600">Standar Industri.</span>
          </h3>
          <p class="text-slate-500 font-medium leading-relaxed max-w-md">
            Kami tidak hanya membangun secara asal. Setiap project mengikuti standarisasi keamanan dan performa dari penyedia infrastruktur global.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="(brand, index) in trustSignals" :key="index"
               class="h-24 flex items-center justify-center border border-slate-100 grayscale hover:grayscale-0 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-500 p-6 group">
            <img :src="brand.logo" :alt="brand.name" class="max-h-full opacity-40 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const proofSection = ref(null);
let observer = null;

// Data Stats (Jujur & Realistis)
const stats = [
  { label: "Execution", value: "48", suffix: "+", subtext: "Project UMKM Selesai Tepat Waktu" },
  { label: "Performance", value: "98", suffix: "%", subtext: "Rata-rata Skor Google Lighthouse" },
  { label: "Partners", value: "12", suffix: "", subtext: "Kolaborasi Strategis Industri" },
  { label: "Retention", value: "90", suffix: "%", subtext: "Klien Puas & Melanjutkan Support" }
];

// Trust Signals (Contoh Sertifikasi/Tech Stack Resmi)
const trustSignals = [
  { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_Logo.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Vercel", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
  { name: "Laravel", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
  { name: "Vue.js", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
  { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" }
];

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting;
  }, { threshold: 0.2 });

  if (proofSection.value) observer.observe(proofSection.value);
});

onUnmounted(() => observer?.disconnect());
</script>