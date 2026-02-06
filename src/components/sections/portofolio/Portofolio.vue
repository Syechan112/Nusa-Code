<template>
  <section class="relative pt-32 pb-20 bg-white overflow-hidden">
    <div class="absolute inset-0 opacity-[0.05] pointer-events-none" 
         :style="{ backgroundImage: 'radial-gradient(#000 0.8px, transparent 0.8px)', backgroundSize: '32px 32px' }">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-3xl mb-24">
        <h2 class="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 mb-4 inline-flex items-center gap-3">
          <span class="w-8 h-[1px] bg-emerald-600"></span> 03. Galeri Karya
        </h2>
        <h3 class="text-5xl md:text-7xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
          BUKTI NYATA <br />
          <span class="text-slate-400 italic font-medium tracking-normal text-4xl md:text-6xl">TRANSFORMASI DIGITAL</span>
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div 
          v-for="(item, index) in portfolioItems" 
          :key="index"
          :ref="el => { if (el) itemRefs[index] = el }"
          class="group relative transition-all duration-[1200ms] cubic-bezier(0.23, 1, 0.32, 1)"
          :class="[
            visibleStates[index] 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-20 scale-95 blur-sm'
          ]"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="relative aspect-[4/5] overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl transition-all duration-700 group-hover:shadow-emerald-500/10 group-hover:-translate-y-2">
            
            <div class="absolute top-4 left-4 z-20 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
              <span v-for="tech in item.stack" :key="tech" class="px-3 py-1 bg-white/90 backdrop-blur-md text-[8px] font-black uppercase tracking-widest text-slate-900">
                {{ tech }}
              </span>
            </div>

            <div class="absolute inset-0 bg-slate-200 overflow-hidden">
               <div class="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-110 transition-transform duration-1000"></div>
            </div>

            <div class="absolute inset-0 bg-slate-900/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0">
              <div class="mb-6">
                <p class="text-emerald-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">[ Result // {{ item.result }} ]</p>
                <p class="text-white text-sm font-medium leading-relaxed italic">
                  "{{ item.testimonial }}"
                </p>
              </div>
              <button class="w-full py-4 border border-emerald-500 text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-emerald-500 hover:text-white transition-all">
                Detail Case Study
              </button>
            </div>
          </div>

          <div class="mt-6 flex justify-between items-start">
            <div>
              <h4 class="text-xl font-black text-slate-900 uppercase tracking-tight">{{ item.title }}</h4>
              <p class="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{{ item.category }}</p>
            </div>
            <div class="h-8 w-[1px] bg-slate-200"></div>
            <div class="text-right">
              <span class="text-[10px] font-black text-emerald-600 block leading-none">LAUNCHED</span>
              <span class="text-xs font-bold text-slate-400">{{ item.year }}</span>
            </div>
          </div>
        </div>
      </div>

      <div 
        ref="ctaRef"
        class="mt-32 text-center border-t border-slate-100 pt-20 transition-all duration-1000"
        :class="ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <p class="text-slate-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-6">Siap Menjadi Bagian Dari Galeri Kami?</p>
        <button class="px-12 py-6 bg-slate-900 text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-emerald-600 transition-all shadow-xl">
          Mulai Proyek Anda Sekarang
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';

const portfolioItems = [
  {
    title: "Kedai Kopi Senja",
    category: "Landing Page & Management",
    year: "2023",
    stack: ["Vue.js", "Tailwind", "SEO Optimized"],
    result: "+45% Local Traffic",
    testimonial: "Website yang dibuat Nusa Code meningkatkan reservasi meja secara signifikan.",
  },
  {
    title: "Batik Nusantara",
    category: "E-Commerce Platform",
    year: "2024",
    stack: ["E-Commerce", "Payment Gateway", "Speed Opt."],
    result: "Automated Shipping",
    testimonial: "Sistem adminnya sangat mudah digunakan bahkan untuk staf kami yang awam.",
  },
  {
    title: "Bengkel Maju Jaya",
    category: "Local Authority Web",
    year: "2023",
    stack: ["GMB Integration", "Performance", "Clean Code"],
    result: "Page 1 Google Search",
    testimonial: "Sekarang pelanggan menemukan bengkel kami lebih mudah di Google Maps.",
  }
];

// State management untuk visibilitas per item
const visibleStates = reactive(portfolioItems.map(() => false));
const itemRefs = ref([]);
const ctaRef = ref(null);
const ctaVisible = ref(false);

let observer = null;

onMounted(() => {
  // Opsi Observer: Mengizinkan repeat animation setiap kali masuk/keluar view
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Cari index dari element yang terdeteksi
      const index = itemRefs.value.indexOf(entry.target);
      
      if (index !== -1) {
        // Toggle visibility: true saat masuk, false saat keluar
        visibleStates[index] = entry.isIntersecting;
      }

      // Logic khusus untuk CTA di bagian bawah
      if (entry.target === ctaRef.value) {
        ctaVisible.value = entry.isIntersecting;
      }
    });
  }, observerOptions);

  // Daftarkan semua item portofolio ke observer
  itemRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });

  // Daftarkan CTA ke observer
  if (ctaRef.value) observer.observe(ctaRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>