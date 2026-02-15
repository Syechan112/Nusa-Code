<template>
  <section ref="sectionRef" class="relative py-24 bg-[#FDFDFD] overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 opacity-[0.03]" 
           style="background-image: linear-gradient(#163020 1px, transparent 1px), linear-gradient(90deg, #163020 1px, transparent 1px); background-size: 40px 40px;">
      </div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-50/50 via-transparent to-transparent"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div 
        class="max-w-3xl mb-20 transition-all duration-1000 transform"
        :class="isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <div class="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-100/50 border border-emerald-200">
          <span class="text-xs font-bold text-emerald-800 uppercase tracking-[0.2em]">Solusi Digital Anti Ribet</span>
        </div>
        
        <h2 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">
          UANG <span class="text-emerald-600">AMAN</span>, <br />
          <span class="text-slate-900">JUALAN?</span> <br>
          <span class="text-emerald-600  decoration-emerald-200 underline">MAKIN LANCAR.</span>
        </h2>
        
        <p class="text-lg text-slate-500 font-medium leading-relaxed">
          Kami tahu rasanya ragu buat <span class="font-bold text-emerald-600  decoration-emerald-200">go digital</span>. Di NusaCode, kami ganti rasa khawatir Anda dengan hasil yang nyata dan laporan yang transparan.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div 
          class="group relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-700 delay-100 transform"
          :class="isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
        >
          <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span class="text-6xl font-black text-slate-900">01</span>
          </div>
          <div class="relative z-10">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-200">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h4 class="text-2xl font-bold text-slate-900 mb-4 italic">Anti Molor.</h4>
            <p class="text-slate-600 leading-relaxed">
              Bisnis macet itu rugi. Kami menjamin jadwal selesai yang pasti supaya Anda bisa langsung jualan dan layani pembeli tanpa drama nunggu lama.
            </p>
          </div>
        </div>

        <div 
          class="group relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-700 delay-300 transform"
          :class="isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
        >
          <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span class="text-6xl font-black text-slate-900">02</span>
          </div>
          <div class="relative z-10">
            <div class="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-slate-200">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            </div>
            <h4 class="text-2xl font-bold text-slate-900 mb-4 italic">Dipantau Terus.</h4>
            <p class="text-slate-600 leading-relaxed">
              Gak perlu bingung teknis. Kami pakai jalur komunikasi satu pintu yang cepat balasnya. Anda selalu tahu perkembangan aset digital Anda setiap saat.
            </p>
          </div>
        </div>

        <div 
          class="group relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-700 delay-500 transform"
          :class="isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
        >
          <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span class="text-6xl font-black text-slate-900">03</span>
          </div>
          <div class="relative z-10">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-200">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <h4 class="text-2xl font-bold text-slate-900 mb-4 italic">Bikin Cuan.</h4>
            <p class="text-slate-600 leading-relaxed">
              Kami gak cuma bikin web yang <span class="font-bold">cantik</span>. Kami rancang supaya pengunjung betah dan mau beli. Kami bangun mesin uang, bukan sekadar pajangan.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const sectionRef = ref(null);
const isIntersecting = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // isIntersecting akan true saat masuk layar, false saat keluar
      isIntersecting.value = entry.isIntersecting;
    });
  }, {
    threshold: 0.15 // Animasi terpicu saat 15% section terlihat
  });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>