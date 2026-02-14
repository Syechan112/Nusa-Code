<template>
  <section ref="portfolioSection" class="py-32 bg-[#FDFDFD] relative overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      
      <div 
        class="max-w-4xl mb-20 transition-all duration-1000 transform"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <h2 class="text-emerald-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
          Selected Case Studies
        </h2>
        <h3 class="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
          EKSEKUSI <span class="text-emerald-600">NYATA.</span>
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[250px]">
        
        <a 
          :href="projects[0].link"
          target="_blank"
          class="group relative md:col-span-8 md:row-span-2 overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col transition-all duration-1000 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
        >
          <img :src="projects[0].image" :alt="projects[0].title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
          <div class="relative mt-auto p-10 text-white">
            <span class="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2 block">{{ projects[0].category }}</span>
            <h4 class="text-4xl font-black mb-4">{{ projects[0].title }}</h4>
            <p class="text-slate-200 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              {{ projects[0].description }}
            </p>
          </div>
        </a>

        <a 
          :href="projects[1].link"
          target="_blank"
          class="group relative md:col-span-4 md:row-span-2 overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-1000 delay-200 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
        >
          <img :src="projects[1].image" :alt="projects[1].title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div class="absolute bottom-8 left-8 right-8 text-white">
            <h4 class="text-2xl font-bold leading-tight">{{ projects[1].title }}</h4>
            <span class="text-emerald-400 text-xs font-bold uppercase mt-2 block">{{ projects[1].category }}</span>
          </div>
        </a>

        <a 
          :href="projects[2].link"
          target="_blank"
          class="group relative md:col-span-6 md:row-span-1 overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-1000 delay-400 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
        >
          <img :src="projects[2].image" :alt="projects[2].title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
          <div class="absolute bottom-6 left-8 text-white">
            <h4 class="text-xl font-bold drop-shadow-md">{{ projects[2].title }}</h4>
            <span class="text-emerald-300 text-[10px] font-bold uppercase">{{ projects[2].category }}</span>
          </div>
        </a>

        <a 
          :href="projects[3].link"
          target="_blank"
          class="group relative md:col-span-6 md:row-span-1 overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-1000 delay-500 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
        >
          <img :src="projects[3].image" :alt="projects[3].title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
          <div class="absolute bottom-6 left-8 text-white">
            <h4 class="text-xl font-bold drop-shadow-md">{{ projects[3].title }}</h4>
            <span class="text-emerald-300 text-[10px] font-bold uppercase">{{ projects[3].category }}</span>
          </div>
        </a>

      </div>
    </div>

    <div 
  class="mt-16 flex justify-center transition-all duration-700 delay-700 transform"
  :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
>
  <router-link 
    to="/portofolio" 
    class="group relative inline-flex items-center gap-3 px-12 py-5 border-2 border-slate-900 text-slate-900 rounded-full font-black overflow-hidden transition-all duration-300 hover:text-white"
  >
    <div class="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10"></div>
    
    <span class="relative">LIHAT SEMUA KARYA</span>
    
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </router-link>
</div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const portfolioSection = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible.value = entry.isIntersecting;
    });
  }, { 
    threshold: 0.1 
  });

  if (portfolioSection.value) observer.observe(portfolioSection.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

// Data yang telah disesuaikan dengan portfolioItems (Ambil 4 saja)
const projects = [
  {
    id: 1, // Nexus Studio WAJIB di ID 1
    link: 'https://nexus-studio-agency.netlify.app',
    title: 'Nexus Studio Agency',
    category: 'Creative Agency',
    description: 'Tampilan premium yang meningkatkan kepercayaan klien dan konversi layanan kreatif.',
    image: 'assets/image/portofolio/nexus-studo.png'
  },
  {
    id: 2,
    link: 'https://nexoraaid.netlify.app',
    title: 'Nexora AI',
    category: 'AI Company Profile',
    description: 'Website profesional dan futuristik untuk memposisikan brand di era teknologi AI.',
    image: 'assets/image/portofolio/nexora-ai.png'
  },
  {
    id: 3,
    link: 'https://call-clean.netlify.app',
    title: 'Call Clean',
    category: 'Service Company',
    description: 'Optimasi sistem booking online yang berhasil meningkatkan pesanan hingga 60%.',
    image: 'assets/image/portofolio/call-clean.png'
  },
  {
    id: 4,
    link: 'https://coffe-senja.netlify.app',
    title: 'Coffee Senja',
    category: 'Cafe Landing Page',
    description: 'Strategi SEO lokal dan reservasi online yang menaikkan trafik kunjungan cafe sebesar 45%.',
    image: 'assets/image/portofolio/coffe-senja.png'
  }
];
</script>