<template>
  <section ref="testimonialRef" class="py-24 bg-white overflow-hidden relative">
    <div class="absolute inset-0 opacity-[0.02] pointer-events-none" 
         style="background-image: radial-gradient(#163020 2px, transparent 2px); background-size: 50px 50px;">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div 
        class="text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 transform"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <h2 class="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4">Client Stories</h2>
        <h3 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
          Manusia Percaya Manusia. <br />
          <span class="text-slate-400">Inilah Kata Mereka.</span>
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        <div 
          v-for="(item, index) in testimonials" 
          :key="index"
          class="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-1000 transform shadow-sm hover:shadow-xl hover:bg-white"
          :class="[
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
            index === 0 ? 'delay-100' : index === 1 ? 'delay-300' : 'delay-500'
          ]"
        >
          <div class="flex gap-1 mb-6">
            <svg v-for="s in 5" :key="s" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
          <p class="text-slate-700 italic text-lg leading-relaxed mb-8">
            "{{ item.quote }}"
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700">
              {{ item.name.charAt(0) }}
            </div>
            <div>
              <h4 class="font-bold text-slate-900 leading-none mb-1">{{ item.name }}</h4>
              <p class="text-xs text-slate-400 uppercase tracking-wider">{{ item.company }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="relative py-12 border-y border-slate-100 w-full overflow-hidden">
        <div class="flex w-max flex-nowrap group">
          <div class="flex animate-marquee whitespace-nowrap items-center gap-x-12 px-6">
            <div v-for="(logo, idx) in logos" :key="'a-'+idx" 
                 class="flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default">
               <div class="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-black text-xl shrink-0">
                 {{ logo.charAt(0) }}
               </div>
               <span class="text-2xl font-black text-slate-900 uppercase tracking-tighter">{{ logo }}</span>
            </div>
          </div>
          <div class="flex animate-marquee whitespace-nowrap items-center gap-x-12 px-6" aria-hidden="true">
            <div v-for="(logo, idx) in logos" :key="'b-'+idx" 
                 class="flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default">
               <div class="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-black text-xl shrink-0">
                 {{ logo.charAt(0) }}
               </div>
               <span class="text-2xl font-black text-slate-900 uppercase tracking-tighter">{{ logo }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const testimonialRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible.value = entry.isIntersecting;
    });
  }, { threshold: 0.1 });

  if (testimonialRef.value) observer.observe(testimonialRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

const testimonials = [
  {
    quote: "Sales kami naik 40% setelah migrasi ke website baru dari NusaCode. Benar-benar fokus ke konversi!",
    name: "Budi Santoso",
    company: "Kopi Nira Digital"
  },
  {
    quote: "Sistem tracking-nya sangat membantu operasional harian kami. Komunikasi tim NusaCode juga sangat lancar.",
    name: "Siti Rahma",
    company: "Logistik Nusantara"
  },
  {
    quote: "Desainnya elegan dan performanya kencang. Client kami makin percaya sejak website di-handle NusaCode.",
    name: "Andi Wijaya",
    company: "Boutique Chic"
  }
];

const logos = ["Kopi Nira", "Logistik Nusantara", "Boutique Chic", "Resto Ibu", "NusaCode", "Digital Hub"];
</script>

<style scoped>
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

.animate-marquee {
  animation: marquee 35s linear infinite;
  /* Mencegah tumpang tindih dengan memastikan flex-basis dihitung benar */
  flex-shrink: 0;
}

.group:hover .animate-marquee {
  animation-play-state: paused;
}

/* Responsivitas Animasi */
@media (max-width: 768px) {
  .animate-marquee {
    animation-duration: 25s; /* Sedikit lebih cepat di mobile karena jarak tempuh lebih pendek */
  }
}
</style>