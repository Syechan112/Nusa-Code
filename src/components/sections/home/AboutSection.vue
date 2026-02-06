<template>
  <section ref="aboutTarget" class="relative py-24 bg-[#FDFDFD] overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-[0.03]" 
         style="background-image: linear-gradient(#163020 1px, transparent 1px), linear-gradient(90deg, #163020 1px, transparent 1px); background-size: 40px 40px;">
    </div>

    <div 
      class="container mx-auto px-6 relative z-10 transition-all duration-700"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'"
    >
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        
<div class="relative flex justify-center items-center py-12 lg:py-20" :class="isVisible ? 'animate-fade-in-left' : 'opacity-0'">
  
      <div 
        class="relative group duration-500 ease-out
              border-emerald-800 border-[6px] overflow-hidden rounded-[3.5rem] 
              h-[450px] w-[300px] lg:h-[550px] lg:w-[400px] bg-emerald-900 
              p-8 lg:p-12 flex flex-col items-start gap-6 
              shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)]
              /* Reset Transform ke Normal */
              transform-none hover:scale-[1.02] hover:shadow-emerald-500/20"
      >
        
        <div class="text-emerald-50 relative z-20 transition-all duration-500 group-hover:translate-y-[-5px]">
          <span class="font-black text-7xl lg:text-9xl block leading-none tracking-tighter">NC</span>
          <p class="text-base lg:text-xl font-bold tracking-[0.2em] text-emerald-400 uppercase mt-2">Nusa Code</p>
        </div>

        <div class="w-16 lg:w-24 h-2 bg-emerald-500 rounded-full transition-all duration-700 group-hover:w-full"></div>

        <p class="text-emerald-100/80 text-lg lg:text-xl leading-relaxed relative z-20 font-light max-w-[280px] lg:max-w-xs transition-colors group-hover:text-white">
          Arsitek website profesional yang mengubah bisnis konvensional menjadi kekuatan digital.
        </p>

        <svg 
          class="absolute -bottom-10 -right-10 w-80 h-80 lg:w-[420px] lg:h-[420px] z-10 
                fill-emerald-800/40 stroke-emerald-700/50 transition-all duration-1000 
                group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:rotate-3" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 64 64"
        >
          <path d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" stroke-width="0.5"></path>
        </svg>

        <div class="absolute inset-0 bg-gradient-to-tr from-emerald-400/5 via-transparent to-white/10 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>

      <div class="absolute w-[350px] lg:w-[500px] h-[500px] lg:h-[650px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
    </div>

        <div class="space-y-8">
          <div :class="isVisible ? 'animate-fade-in-up' : 'opacity-0'">
            <div class="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold tracking-widest uppercase mb-4">
              Pionir Transformasi Digital
            </div>
            <h2 class="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Ubah <span class="text-emerald-600 underline decoration-emerald-100 underline-offset-8">UMKM</span> Anda Menjadi Brand Digital yang Profesional dan Terpercaya. <br/>
            </h2>
          </div>

          <p 
            class="md:text-xl text-md text-slate-500 leading-relaxed font-medium"
            :class="isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'"
          >
            NusaCode hadir untuk mengakhiri era website UMKM yang hanya jadi pajangan digital. Kami tidak sekadar mendesain, kami membangun aset digital fungsional, baik itu Company Profile yang berwibawa, Landing Page persuasif, hingga Toko Online yang siap jualan. Semuanya kami rancang khusus untuk satu tujuan: mengubah pengunjung menjadi pelanggan setia secara otomatis, 24/7.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4" :class="isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'">
            <div class="space-y-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h4 class="font-bold text-slate-900">Performa Tanpa Kompromi</h4>
              <p class="text-sm text-slate-500 leading-snug">Kecepatan loading maksimal untuk memastikan Anda tidak kehilangan satu pelanggan pun akibat website lambat.</p>
            </div>

            <div class="space-y-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h4 class="font-bold text-slate-900">Arsitektur Ramah Google</h4>
              <p class="text-sm text-slate-500 leading-snug">Setiap baris kode dioptimasi agar mesin pencari mencintai bisnis Anda sejak hari pertama diluncurkan.</p>
            </div>
          </div>

          <div class="pt-6" :class="isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'">
            <RouterLink to="/tentang" class="group flex items-center gap-3 text-slate-900 font-bold hover:text-emerald-700 transition-all">
              <span class="w-8 h-[2px] bg-slate-200 group-hover:w-12 group-hover:bg-emerald-600 transition-all"></span>
              Pelajari Strategi Pertumbuhan Kami
            </RouterLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const navigation = [
    { name: 'Tentang', to: '/tentang' },
];

const aboutTarget = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible.value = entry.isIntersecting;
    });
  }, { 
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px' 
  });

  if (aboutTarget.value) observer.observe(aboutTarget.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-left { animation: fadeInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

.delay-200 { animation-delay: 0.2s; }
.delay-400 { animation-delay: 0.4s; }
.delay-600 { animation-delay: 0.6s; }

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}
</style>