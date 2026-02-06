<template>
  <section ref="workflowSection" class="relative py-40 bg-white overflow-hidden">
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         :style="{ backgroundImage: 'radial-gradient(#000 0.8px, transparent 0.8px)', backgroundSize: '24px 24px' }">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="text-center max-w-2xl mx-auto mb-32">
        <h2 class="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-600 mb-6 italic">// Operational Flow</h2>
        <h3 class="text-4xl md:text-6xl font-black text-slate-900 leading-none tracking-tighter uppercase">
          CARA KERJA <br/> <span class="text-slate-400 text-3xl md:text-5xl font-light italic">YANG TERINTEGRASI.</span>
        </h3>
      </div>

      <div class="relative max-w-4xl mx-auto">
        
        <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-100 -translate-x-1/2 z-0">
          <div 
            class="w-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-700 ease-out origin-top"
            :style="{ height: `${scrollPercent}%`, transform: isVisible ? 'scaleY(1)' : 'scaleY(0)' }"
          ></div>
        </div>

        <div class="space-y-32 relative">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            :ref="el => stepRefs[index] = el"
            class="step-item relative flex items-center md:justify-between opacity-0 translate-y-20 transition-all duration-1000 ease-out"
            :class="[
              activeSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            ]"
          >
            <div class="w-full md:w-[42%] pl-16 md:pl-0">
              <div 
                class="p-8 border bg-white transition-all duration-700 relative"
                :class="activeSteps.includes(index) ? 'border-emerald-500 shadow-xl shadow-emerald-500/5' : 'border-slate-100'"
              >
                <span 
                  class="absolute -top-4 -left-4 md:-left-auto md:-right-4 px-3 py-1 text-[10px] font-black italic transition-all duration-700"
                  :class="activeSteps.includes(index) ? 'bg-emerald-500 text-white translate-y-0' : 'bg-slate-900 text-white translate-y-2'"
                >
                  PHASE 0{{ index + 1 }}
                </span>

                <h4 class="text-xl font-black uppercase italic mb-3 tracking-tighter transition-colors duration-700"
                    :class="activeSteps.includes(index) ? 'text-emerald-600' : 'text-slate-900'">
                  {{ step.title }}
                </h4>
                <p class="text-sm font-medium leading-relaxed transition-colors duration-700"
                   :class="activeSteps.includes(index) ? 'text-slate-700' : 'text-slate-400'">
                  {{ step.desc }}
                </p>
              </div>
            </div>

            <div 
              class="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 z-20 transition-all duration-700 delay-300"
              :class="activeSteps.includes(index) ? 'border-emerald-500 scale-125 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'border-slate-200'"
            ></div>

            <div class="hidden md:block w-[42%]"></div>
          </div>
        </div>

      </div>

      <div 
            class="md:mt-[20%] mt-[70%] text-center transition-all duration-1000 transform flex flex-col items-center"
            :class="scrollPercent > 90 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'"
          >
            <div class="relative mb-8">
              <div class="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full animate-pulse"></div>
              
              <div class="relative w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-emerald-500/40 animate-bounce">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="4" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  class="w-10 h-10"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>

            <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-10">
              Ready for Launch
            </p>
          </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const workflowSection = ref(null);
const scrollPercent = ref(0);
const activeSteps = ref([]);
const stepRefs = ref([]);
let observer = null;

const steps = [
  { title: "Konsultasi Kebutuhan", desc: "Kita ngobrol santai. Ceritain masalah bisnis Anda, kami siapkan resep websitenya." },
  { title: "Desain & Persetujuan", desc: "Kami kirimkan konsep visualnya. Anda cek, kasih masukan, dan langsung eksekusi." },
  { title: "Pembuatan Website", desc: "Proses koding dimulai. Kami bangun dengan performa tinggi agar enak dilihat di HP." },
  { title: "Revisi & QC", desc: "Anda cek hasilnya. Kurang pas? Kita poles lagi sampai benar-benar sempurna." },
  { title: "Website Online!", desc: "Serah terima kunci. Website Anda mengudara dan siap menyambut pelanggan." }
];

const handleScroll = () => {
  if (!workflowSection.value) return;
  
  const rect = workflowSection.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  // Hitung progress berdasarkan seberapa jauh section masuk ke tengah layar
  const offset = windowHeight / 1.5;
  const start = rect.top - offset;
  const totalHeight = rect.height;
  
  let progress = (Math.abs(start) / totalHeight) * 100;
  
  if (rect.top > offset) progress = 0;
  if (progress > 100) progress = 100;
  
  scrollPercent.value = progress;

  // Cek tiap step untuk aktivasi warna hijau secara individual
  stepRefs.value.forEach((el, index) => {
    if (el) {
      const stepRect = el.getBoundingClientRect();
      if (stepRect.top < windowHeight * 0.7) {
        if (!activeSteps.value.includes(index)) {
          activeSteps.value.push(index);
        }
      } else {
        // Hapus dari activeSteps jika di-scroll balik ke atas (opsional)
        activeSteps.value = activeSteps.value.filter(i => i !== index);
      }
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting;
  }, { threshold: 0.1 });

  if (workflowSection.value) observer.observe(workflowSection.value);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  observer?.disconnect();
});
</script>

<style scoped>
/* Memastikan transisi smooth untuk semua elemen interaktif */
.step-item {
  will-change: transform, opacity;
}

/* Animasi garis tumbuh */
.origin-top {
  transform-origin: top;
}
</style>