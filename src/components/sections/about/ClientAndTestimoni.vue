<template>
  <section ref="testiSection" class="relative py-32 bg-white overflow-hidden border-t border-slate-100">
    <div class="absolute inset-0 opacity-[0.1] pointer-events-none" 
         :style="{ backgroundImage: 'radial-gradient(#64748b 0.8px, transparent 0.8px)', backgroundSize: '24px 24px' }">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div class="max-w-2xl">
          <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-4 inline-block px-2 py-1 border border-emerald-100 bg-emerald-50/50">
            Kritik & Apresiasi
          </h2>
          <h3 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
            MEREKA YANG <br/> <span class="text-slate-400">BERHASIL</span> BERTUMBUH.
          </h3>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        <div 
          v-for="(item, index) in testimonials" 
          :key="index"
          class="bg-white/80 backdrop-blur-sm border border-slate-200 p-8 md:p-12 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-700 group"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12']"
          :style="{ transitionDelay: `${index * 200}ms` }"
        >
          <div class="flex flex-col h-full">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-12 h-12 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-sm">
                <img :src="item.avatar" :alt="item.name" class="w-full h-full object-cover" />
              </div>
              <div>
                <h4 class="text-sm font-black text-slate-900 uppercase tracking-tight">{{ item.name }}</h4>
                <p class="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{{ item.company }}</p>
              </div>
            </div>

            <blockquote class="text-lg md:text-xl font-medium text-slate-700 leading-relaxed mb-8 italic">
              "{{ item.text }}"
            </blockquote>

            <div class="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Problem Solved:</span>
                <p class="text-xs font-black text-slate-900 uppercase tracking-tight">{{ item.caseTitle }}</p>
              </div>
              <div class="text-right">
                <span class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Result:</span>
                <p class="text-xs font-black text-emerald-600 uppercase tracking-tight">{{ item.result }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-y border-slate-100 py-12">
        <p class="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-10">Trusted By Forward-Thinking SMEs</p>
        <div class="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700">
          <img v-for="logo in logos" :key="logo" :src="logo" class="h-6 md:h-8 grayscale hover:grayscale-0 transition-all cursor-pointer" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const testiSection = ref(null);
let observer = null;

const testimonials = [
  {
    name: "Hendra Wijaya",
    company: "Founder of UrbanCoffee",
    avatar: "https://i.pravatar.cc/150?u=hendra",
    text: "Sebelumnya web kami sering crash saat traffic naik dari ads. Tim ini merombak total kodenya menjadi sangat ringan. Penjualan naik drastis karena user tidak perlu menunggu lama.",
    caseTitle: "Scalability Issue",
    result: "99.9% Uptime"
  },
  {
    name: "Sari K. Putri",
    company: "Marketing Lead at Hijab-Style",
    avatar: "https://i.pravatar.cc/150?u=sari",
    text: "Strategi SEO dan Copywriting mereka sangat tajam. Dalam 3 bulan, kami mendominasi kata kunci utama di Google tanpa harus bakar uang di iklan terus-menerus.",
    caseTitle: "Low Organic Traffic",
    result: "+200% SEO Growth"
  }
];

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b8/Adidas_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
];

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting;
  }, { threshold: 0.1 });

  if (testiSection.value) observer.observe(testiSection.value);
});

onUnmounted(() => observer?.disconnect());
</script>