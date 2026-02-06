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
          EKSEKUSI <span class="text-slate-300">NYATA.</span>
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[250px]">
        
        <router-link 
          :to="`/portofolio/${projects[0].slug}`"
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
        </router-link>

        <router-link 
          :to="`/portofolio/${projects[1].slug}`"
          class="group relative md:col-span-4 md:row-span-2 overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-1000 delay-200 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
        >
          <img :src="projects[1].image" :alt="projects[1].title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div class="absolute bottom-8 left-8 right-8 text-white">
            <h4 class="text-2xl font-bold leading-tight">{{ projects[1].title }}</h4>
            <span class="text-emerald-400 text-xs font-bold uppercase mt-2 block">{{ projects[1].category }}</span>
          </div>
        </router-link>

        <router-link 
          :to="`/portofolio/${projects[2].slug}`"
          class="group relative md:col-span-6 md:row-span-1 overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-1000 delay-400 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
        >
          <div class="absolute inset-0 flex items-center justify-center bg-slate-100">
             <img :src="projects[2].image" :alt="projects[2].title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div class="absolute inset-0 bg-white/10 group-hover:bg-emerald-600/10 transition-colors"></div>
          <div class="absolute bottom-6 left-8">
            <h4 class="text-xl font-bold text-white drop-shadow-md">{{ projects[2].title }}</h4>
          </div>
        </router-link>

        <router-link 
          :to="`/portofolio/${projects[3].slug}`"
          class="group relative md:col-span-6 md:row-span-1 overflow-hidden rounded-[2.5rem] bg-emerald-600 p-8 flex flex-col justify-between transition-all duration-1000 delay-500 transform"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
        >
          <div class="flex justify-between items-start">
             <div class="text-white">
               <span class="text-emerald-200 text-xs font-bold uppercase block mb-1">Latest Success</span>
               <h4 class="text-2xl font-black">{{ projects[3].title }}</h4>
             </div>
             <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
             </div>
          </div>
          <p class="text-emerald-100 text-sm max-w-xs">{{ projects[3].description }}</p>
        </router-link>

      </div>

      <div 
        class="mt-16 flex justify-center transition-all duration-700 delay-700 transform"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <router-link 
          to="/portofolio" 
          class="px-12 py-5 border-2 border-slate-900 text-slate-900 rounded-full font-black hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          LIHAT SEMUA KARYA
        </router-link>
      </div>

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
      // Toggle state berdasarkan interaksi viewport
      isVisible.value = entry.isIntersecting;
    });
  }, { 
    threshold: 0.1 // Triggers ketika 10% section masuk layar
  });

  if (portfolioSection.value) observer.observe(portfolioSection.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

const projects = [
  {
    id: 1,
    slug: 'kopi-nira',
    title: 'Kopi Nira Digital',
    category: 'E-Commerce UMKM',
    description: 'Transformasi dari sistem manual ke platform digital otomatis yang meningkatkan revenue 40%.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    slug: 'logistik-nusantara',
    title: 'Logistik Nusantara',
    category: 'Corporate Web',
    description: 'Sistem tracking real-time untuk jasa ekspedisi.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    slug: 'boutique-chic',
    title: 'Boutique Chic',
    category: 'Fashion Hub',
    description: 'Website katalog elegan dengan integrasi WhatsApp.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    slug: 'restoran-ibu',
    title: 'Resto Ibu Sambal',
    category: 'Food & Beverage',
    description: 'Landing page kuliner dengan optimasi SEO lokal nomor satu di pencarian Google.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80'
  }
];
</script>