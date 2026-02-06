<template>
  <section ref="storySection" class="relative bg-white overflow-clip">
    <div class="container mx-auto px-6">
      
      <div class="flex flex-col lg:flex-row items-start relative">
        
        <div class="w-full lg:w-1/2 sticky top-0 lg:h-screen flex flex-col justify-center z-40 bg-white lg:bg-transparent py-6 lg:py-0">
          <header class="transition-all duration-700">
            <div class="inline-flex items-center gap-2 mb-3 lg:mb-6">
              <span class="w-8 h-[2px] bg-emerald-500"></span>
              <span class="text-emerald-600 font-black tracking-[0.2em] uppercase text-[10px]">Filosofi Kami</span>
            </div>
            
            <h2 class="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-4 lg:mb-8">
              BUKAN SEKADAR <br class="hidden lg:block" /> 
              EKSIS, TAPI <br class="hidden lg:block" /> 
              <span class="text-emerald-600">MEMBERI SOLUSI.</span>
            </h2>

            <p class="text-slate-500 font-medium max-w-sm leading-relaxed text-sm lg:text-lg">
              Kami percaya teknologi adalah alat untuk menang, bukan beban untuk dipikirkan.
            </p>
          </header>
          <div class="absolute bottom-0 left-0 w-full h-[1px] bg-slate-100 lg:hidden"></div>
        </div>

        <div class="w-full lg:w-1/2 space-y-12 lg:space-y-[30vh] pt-10 lg:pt-[35vh] pb-20 lg:pb-[35vh]">
          
            <article 
            v-for="(item, index) in points" 
            :key="index"
            :ref="el => { if (el) pointRefs[index] = el }"
            class="relative flex flex-row items-start gap-5 lg:gap-10 group transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform"
            :class="[
                visiblePoints.includes(index) 
                ? 'opacity-100 translate-x-0 translate-y-0 blur-0' 
                : 'opacity-0 blur-sm lg:translate-x-16 translate-y-12 lg:translate-y-0'
            ]"
            >
            <div class="flex-shrink-0">
              <span class="text-5xl lg:text-8xl font-black text-slate-100 group-hover:text-emerald-500/20 transition-all duration-700 leading-none">
                0{{ index + 1 }}
              </span>
            </div>

            <div class="pt-1 lg:pt-3">
              <h3 class="text-lg lg:text-2xl font-black text-slate-900 tracking-tight mb-2 lg:mb-4 uppercase italic">
                {{ item.title }}
              </h3>
              <p class="text-slate-600 text-sm lg:text-xl leading-relaxed">
                {{ item.desc }}
              </p>
            </div>
          </article>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const pointRefs = ref([]);
const visiblePoints = ref([]); 
let observer = null;

const points = [
  { title: "Kesenjangan Industri", desc: "Banyak agensi hanya fokus pada estetika, melupakan fakta bahwa website adalah alat bisnis yang harus menghasilkan profit." },
  { title: "Efisiensi Tanpa Drama", desc: "Kami membangun sistem yang ringan agar Anda bisa fokus mengurus bisnis, bukan mengurus bug." },
  { title: "Data-Driven Result", desc: "Setiap keputusan desain dan kode divalidasi oleh perilaku pengguna nyata." },
  { title: "Skalabilitas Masa Depan", desc: "Sistem yang siap tumbuh tanpa perlu bongkar pasang total saat traffic meledak." },
  { title: "Kemitraan Jangka Panjang", desc: "Partner teknis yang menjaga infrastruktur digital Anda tetap aman dan relevan." }
];

onMounted(() => {
  const options = {
    // Threshold lebih kecil agar di mobile animasi cepat terpicu
    threshold: 0.15,
    rootMargin: "0px"
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const index = pointRefs.value.findIndex(el => el === entry.target);
      if (entry.isIntersecting) {
        if (!visiblePoints.value.includes(index)) {
          visiblePoints.value.push(index);
        }
      } else {
        // Hapus index agar animasi bisa di-load lagi saat scroll balik
        visiblePoints.value = visiblePoints.value.filter(i => i !== index);
      }
    });
  }, options);

  pointRefs.value.forEach(el => { if (el) observer.observe(el); });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
/* Paksa browser untuk handle sticky dengan benar */
.sticky {
  position: -webkit-sticky;
  position: sticky;
}

/* Hilangkan scrollbar horizontal jika ada elemen yang 'off-screen' sedikit */
:deep(body) {
  overflow-x: hidden;
}
</style>