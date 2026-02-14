<template>
  <section id="target-audiens-bisnis" ref="targetSection" class="relative py-32 bg-white overflow-hidden border-t border-slate-100">
    <div class="absolute inset-0 opacity-[0.08] pointer-events-none" 
         :style="{ backgroundImage: 'radial-gradient(#000 0.8px, transparent 0.8px)', backgroundSize: '24px 24px' }">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="max-w-3xl mb-20">
        <h2 class="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 mb-4 inline-flex items-center gap-3">
          // Audiens Strategis
        </h2>
        <h3 class="text-4xl md:text-6xl font-black text-slate-900 leading-none tracking-tighter uppercase">
          WEBSITE INI DIRANCANG <br />
          <span class="text-slate-400 text-3xl md:text-5xl italic font-medium tracking-normal">KHUSUS UNTUK ANDA YANG...</span>
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          v-for="(target, index) in targets" 
          :key="index"
          class="group relative p-8 bg-white border border-slate-200 hover:border-emerald-500 transition-all duration-500"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <span class="absolute -right-2 -top-2 text-7xl font-black text-slate-50 group-hover:text-emerald-50/50 transition-colors pointer-events-none">
            0{{ index + 1 }}
          </span>

          <div class="relative z-10 flex flex-col h-full">
            <div class="w-14 h-14 bg-slate-900 text-white flex items-center justify-center mb-10 group-hover:bg-emerald-600 group-hover:rotate-6 transition-all duration-500 shadow-xl">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="w-7 h-7"
                v-html="target.svgIcon"
              ></svg>
            </div>

            <h4 class="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight leading-tight">
              {{ target.title }}
            </h4>
            
            <p class="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
              {{ target.desc }}
            </p>

            <div class="pt-4 border-t border-dashed border-slate-200">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Target Filter Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 p-10 bg-slate-900 text-white relative overflow-hidden group">
        <div class="absolute right-0 top-0 h-full w-1 bg-emerald-500 group-hover:w-full transition-all duration-700 opacity-20"></div>
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p class="text-slate-300 font-medium italic max-w-2xl leading-relaxed">
            "Kami memprioritaskan kualitas di atas kuantitas. Jika Anda mencari vendor website murahan yang sekadar 'asal online', <span class="text-white font-black underline decoration-emerald-500 underline-offset-4">kami bukan partner yang Anda butuhkan.</span>"
          </p>
          <div class="text-emerald-500 font-mono text-xs font-bold tracking-[0.3em] uppercase whitespace-nowrap">
            [ System // Rejected ]
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const targetSection = ref(null);
let observer = null;

const targets = [
  {
    title: "Aset Digital Mandiri",
    desc: "Bosun jualan hanya di marketplace dengan potongan biaya admin yang mencekik? Kendalikan profit Anda 100% di website sendiri.",
    svgIcon: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>'
  },
  {
    title: "Dominasi SEO Lokal",
    desc: "Pastikan saat orang mencari produk Anda di Google, bisnis Andalah yang muncul di peringkat teratas, bukan kompetitor sebelah.",
    svgIcon: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>'
  },
  {
    title: "Scale-up Branding",
    desc: "Website premium mencerminkan kualitas produk Anda. Jangan biarkan desain murahan membuat calon pembeli ragu dengan kredibilitas Anda.",
    svgIcon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path>'
  },
  {
    title: "Sistem Otomasi 24/7",
    desc: "Kirim katalog, terima leads, hingga tracking performa SEO dilakukan oleh sistem. Anda tinggal fokus membesarkan skala produksi.",
    svgIcon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>'
  }
];

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting;
  }, { threshold: 0.15 });

  if (targetSection.value) observer.observe(targetSection.value);
});

onUnmounted(() => observer?.disconnect());
</script>