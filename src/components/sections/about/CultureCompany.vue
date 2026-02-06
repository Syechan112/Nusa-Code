<template>
  <section ref="cultureSection" class="relative py-32 bg-white overflow-hidden border-t border-slate-100">
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         :style="{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="max-w-4xl mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-600 mb-6 flex items-center gap-4">
          <span class="w-12 h-[1px] bg-emerald-600"></span> Operating System
        </h2>
        <h3 class="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
          BUDAYA KAMI ADALAH <br/> <span class="text-slate-400">EKOSISTEM PERTUMBUHAN.</span>
        </h3>
        <p class="text-lg text-slate-500 font-medium max-w-xl">
          Kami tidak hanya membangun produk; kami membangun cara kerja yang lebih baik melalui komunikasi jujur dan keputusan berbasis data.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <div 
          v-for="(item, index) in cultures" 
          :key="index"
          class="relative group"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12']"
          :style="{ transitionDelay: `${index * 150}ms`, transitionDuration: '800ms' }"
        >
          <div class="flex flex-col gap-6 p-8 border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all duration-500">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{{ item.tag }}</span>
            </div>

            <h4 class="text-2xl font-black text-slate-900 uppercase italic tracking-tight">{{ item.title }}</h4>
            
            <p class="text-slate-600 leading-relaxed">
              {{ item.desc }}
            </p>

            <div class="mt-4 p-4 bg-white border-l-2 border-slate-900 shadow-sm">
              <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Cara Kerja:</span>
              <p class="text-sm font-bold text-slate-900 italic">"{{ item.practical }}"</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const cultureSection = ref(null);
let observer = null;

const cultures = [
  {
    tag: "Communication",
    title: "Radical Candor",
    desc: "Kami membuang basa-basi yang tidak perlu. Masukan diberikan secara jujur dan langsung untuk mencapai solusi tercepat.",
    practical: "Langsung ke inti masalah, tidak ada politik kantor atau 'hidden agenda'."
  },
  {
    tag: "Decision Making",
    title: "Logic Over Hierarchy",
    desc: "Ide terbaiklah yang menang, bukan siapa yang jabatannya paling tinggi. Semua keputusan harus punya dasar logika yang kuat.",
    practical: "Debat terbuka yang sehat sebelum eksekusi, berbasis data bukan perasaan."
  },
  {
    tag: "Environment",
    title: "Deep Work Protocol",
    desc: "Kami menghargai waktu fokus. Lingkungan kerja kami dirancang untuk meminimalisir distraksi agar kualitas kode tetap terjaga.",
    practical: "Asynchronous communication diutamakan untuk menjaga alur kerja tim."
  },
  {
    tag: "Growth",
    title: "Continuous Refactoring",
    desc: "Bagi kami, 'selesai' bukan berarti berhenti. Kami selalu mencari cara untuk membuat sistem yang sudah ada menjadi lebih efisien.",
    practical: "Sesi review kode mingguan untuk memastikan standar kualitas selalu naik."
  }
];

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting;
  }, { threshold: 0.2 });

  if (cultureSection.value) observer.observe(cultureSection.value);
});

onUnmounted(() => observer?.disconnect());
</script>