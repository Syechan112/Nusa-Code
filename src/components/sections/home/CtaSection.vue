<template>
  <section ref="ctaSection" class="relative py-32 bg-[#FDFDFD] overflow-hidden">
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div 
        class="absolute inset-0 opacity-[0.05] transform rotate-45 scale-150" 
        style="background-image: linear-gradient(#163020 1px, transparent 1px), linear-gradient(90deg, #163020 1px, transparent 1px); background-size: 50px 50px;"
      ></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#FDFDFD_75%)]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 text-center">
      <div 
        class="max-w-5xl mx-auto transition-all duration-1000 transform"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
      >
        <div class="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white border border-slate-100 shadow-sm mb-12">
          <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span class="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Solusi Digital UMKM Terpercaya</span>
        </div>

        <h2 class="text-5xl md:text-[90px] font-black text-slate-900 tracking-tighter leading-[0.9] mb-12">
          BISNIS STAGNAN? <br />
          <span class="text-emerald-600 italic">SAATNYA SCALE UP.</span>
        </h2>

        <p class="text-xl text-slate-500 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
          Jangan biarkan kompetitor merebut pangsa pasar Anda. Kami bantu <span class="text-slate-900 font-bold underline decoration-emerald-400 underline-offset-4">optimasi SEO & konversi</span> untuk ubah UMKM Anda jadi pemimpin pasar.
        </p>

        <div class="flex flex-col items-center justify-center">
          <a 
            href="https://wa.me/6285780042435?text=Halo,%20saya%20ingin%20konsultasi%20strategi%20Digital%20Powerhouse%20untuk%20bisnis%20saya." 
            target="_blank"
            class="group relative md:px-12 px-4 py-4 md:py-7 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-emerald-600 hover:-translate-y-2 transition-all duration-500 shadow-2xl"
          >
            <span class="relative z-10 flex items-center gap-4 text-sm">
              AMANKAN SLOT KONSULTASI GRATIS
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          
          <div class="mt-12 flex flex-wrap justify-center items-center gap-6 opacity-60">
             <span class="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
               <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" /></svg>
               Audit Gratis
             </span>
             <span class="w-1 h-1 rounded-full bg-slate-400"></span>
             <span class="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
               <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
               Strategi Data-Driven
             </span>
             <span class="w-1 h-1 rounded-full bg-slate-400"></span>
             <span class="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
               <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
               Garansi Growth
             </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const ctaSection = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible.value = entry.isIntersecting;
    });
  }, { threshold: 0.1 });

  if (ctaSection.value) observer.observe(ctaSection.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>