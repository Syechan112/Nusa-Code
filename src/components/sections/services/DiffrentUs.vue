<template>
  <section ref="whySection" class="relative py-32 bg-white overflow-hidden border-t border-emerald-50">
    <div class="absolute inset-0 opacity-[0.02] pointer-events-none" 
         :style="{ backgroundImage: 'linear-gradient(#064e3b 1px, transparent 1px), linear-gradient(90deg, #064e3b 1px, transparent 1px)', backgroundSize: '60px 60px' }">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div class="max-w-2xl">
          <h2 class="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800/60 mb-6 italic">// The Differentiator</h2>
          <h3 class="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
            KENAPA UMKM <br/> <span class="text-emerald-800">MEMILIH KAMI.</span>
          </h3>
        </div>
        <div class="md:text-right">
          <p class="text-slate-700 font-medium text-sm max-w-xs md:ml-auto leading-relaxed border-r-4 border-emerald-800/30 pr-6">
            Kami fokus pada hasil nyata untuk bisnis Anda, bukan sekadar memamerkan istilah teknis yang rumit.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          v-for="(item, index) in reasons" 
          :key="index"
          class="group relative p-10 bg-white border border-slate-100 hover:border-emerald-800/20 transition-all duration-700 overflow-hidden"
          :class="[isVisible ? 'animate-in' : 'animate-out']"
          :style="{ '--delay': `${index * 150}ms` }"
        >
          <div class="absolute -bottom-6 -right-4 text-9xl font-black text-emerald-50/20 transition-colors duration-700 pointer-events-none uppercase italic">
            {{ item.short }}
          </div>

          <div class="relative z-10">
            <div class="w-10 h-10 border-2 border-emerald-800/30 flex items-center justify-center mb-10 group-hover:bg-emerald-800 group-hover:text-white transition-all duration-500 text-emerald-800">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5" v-html="item.svgIcon"></svg>
            </div>

            <h4 class="text-xl font-black text-slate-800 uppercase italic mb-4 tracking-tighter">
              {{ item.title }}
            </h4>
            
            <p class="text-sm text-slate-600 font-medium leading-relaxed group-hover:text-slate-900 transition-colors">
              {{ item.desc }}
            </p>
          </div>

          <div class="absolute top-0 left-0 w-0 h-1 bg-emerald-800/40 group-hover:w-full transition-all duration-700"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const whySection = ref(null);
let observer = null;

const reasons = [
  {
    title: "Bahasa Gampang",
    short: "EZ",
    desc: "Gak perlu pusing istilah koding. Kami jelasin semuanya pake bahasa yang enak didengar dan mudah dimengerti.",
    svgIcon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>'
  },
  {
    title: "Proses Jelas",
    short: "PR",
    desc: "Setiap langkah terukur. Anda tau progresnya sudah sampai mana tanpa perlu nanya berulang kali.",
    svgIcon: '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>'
  },
  {
    title: "Harga Masuk Akal",
    short: "FIX",
    desc: "Investasi yang pas untuk skala UMKM. Tanpa biaya siluman di tengah jalan. Semua transparan dari awal.",
    svgIcon: '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>'
  },
  {
    title: "Support Penuh",
    short: "24H",
    desc: "Kami gak kabur setelah web jadi. Butuh bantuan atau ada kendala? Tim kami siap bantu lewat WhatsApp.",
    svgIcon: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>'
  }
];

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting;
  }, { threshold: 0.15 });

  if (whySection.value) observer.observe(whySection.value);
});

onUnmounted(() => observer?.disconnect());
</script>

<style scoped>
.animate-in {
  animation: revealCard 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

.animate-out {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
  transition: all 0.5s ease-in;
}

@keyframes revealCard {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(40px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>