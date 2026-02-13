<template>
  <section 
    ref="aboutHero" 
    class="relative min-h-[90vh] flex items-center pt-32 pb-16 bg-[#FDFDFD] overflow-hidden"
  >
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div 
        class="absolute inset-0 opacity-100" 
        style="background-image: linear-gradient(to right, #f0fdf4 1px, transparent 1px), linear-gradient(to bottom, #f0fdf4 1px, transparent 1px); background-size: 45px 45px;"
      ></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#FDFDFD_90%)]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        <article 
          class="lg:col-span-7 transition-all duration-1000 transform"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'"
        >
          <header>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-100 mb-6">
              <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span class="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Partner UMKM Indonesia</span>
            </div>
            
            <h1 class="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
              STRATEGI DIGITAL <br />
              <span class="text-emerald-600">BERBASIS DATA</span> UNTUK PERTUMBUHAN.
            </h1>
          </header>
          
          <h2 class="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed mb-10 font-medium italic">
            "Kami mengubah kode menjadi profit melalui ekosistem yang teroptimasi secara <span class="text-slate-900 font-bold">SEO dan Konversi</span>." 
          </h2>

          <div class="flex flex-wrap gap-10 items-center border-t border-emerald-100 pt-10">
            <div class="group cursor-default">
              <p class="text-4xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors tracking-tighter">10+</p>
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Live Projects</p>
            </div>
            <div class="group cursor-default border-l border-emerald-100 pl-10">
              <p class="text-4xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors tracking-tighter">98% </p>
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Satisfaction Rate</p>
            </div>
          </div>
        </article>

        <div class="lg:col-span-5 relative">
          <div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
              class="w-full aspect-[4/5] object-cover"
              alt="Tim NusaCode"
            />
          </div>
          <div class="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-emerald-50 transform -rotate-3">
             <span class="text-emerald-600 font-bold text-sm">#CleanCode First</span> 
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const aboutHero = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  // Intersection Observer for Animation Trigger
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible.value = entry.isIntersecting;
    });
  }, { threshold: 0.15 });

  if (aboutHero.value) observer.observe(aboutHero.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>