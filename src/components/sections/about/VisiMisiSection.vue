<template>
  <section ref="storySection" class="relative bg-white overflow-clip border-t border-slate-100">
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         :style="{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }">
    </div>

    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row-reverse items-start relative">
        
        <div class="w-full lg:w-1/2 sticky top-0 lg:h-screen flex flex-col justify-center z-40 bg-white lg:bg-transparent py-12 lg:py-0 lg:pl-20">
          <header class="transition-all duration-700">
            <div class="inline-flex items-center gap-2 mb-6">
              <span class="w-8 h-[2px] bg-emerald-500"></span>
              <span class="text-emerald-600 font-black tracking-[0.3em] uppercase text-[10px]">Visi 2030</span>
            </div>
            
            <h2 class="text-3xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8 uppercase">
              MENGANGKAT <span class="text-slate-400">PRODUK LOKAL</span> <br/>
              MENJADI JAGOAN <br/>
              <span class="text-emerald-600 underline decoration-slate-200 underline-offset-8">DI DUNIA DIGITAL.</span>
            </h2>
          </header>
        </div>

        <div class="w-full lg:w-1/2 space-y-12 lg:space-y-[40vh] pt-10 lg:pt-[30vh] pb-20 lg:pb-[40vh]">
          
          <article 
            v-for="(item, index) in missions" 
            :key="index"
            :ref="el => { if (el) pointRefs[index] = el }"
            class="relative flex flex-row items-start gap-8 lg:gap-12 group transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform"
            :class="[
                visiblePoints.includes(index) 
                ? 'opacity-100 translate-x-0 blur-0 scale-100' 
                : 'opacity-0 blur-sm -translate-x-16 scale-95'
            ]"
          >
            <div class="flex-shrink-0">
              <span class="text-6xl lg:text-9xl font-black text-slate-100 group-hover:text-emerald-500/20 transition-all duration-700 leading-none">
                0{{ index + 1 }}
              </span>
            </div>

            <div class="pt-2 lg:pt-6">
              <h3 class="text-xl lg:text-3xl font-black text-slate-900 tracking-tight mb-4 uppercase italic">
                {{ item.title }}
              </h3>
              <p class="text-slate-600 text-base lg:text-xl leading-relaxed mb-6">
                {{ item.desc }}
              </p>
              
              <div class="inline-flex items-center gap-3 px-4 py-2 bg-slate-900 rounded-lg transform -skew-x-12">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse skew-x-12"></span>
                <span class="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest skew-x-12">
                  {{ item.metric }}
                </span>
              </div>
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

const missions = [
  { 
    title: "Sistem Anti Lemot", 
    desc: "Kami membangun website dengan standar tinggi agar toko online Anda selalu lancar dibuka, tidak peduli seberapa banyak barang yang Anda pajang.", 
    metric: "Sangat Cepat di HP" 
  },
  { 
    title: "Tulisan Penjual Ulung", 
    desc: "Kalimat di website Anda bukan sekadar teks, tapi disusun untuk meyakinkan calon pembeli agar segera 'klik' tombol beli.", 
    metric: "Fokus Jualan Laris" 
  },
  { 
    title: "Mudah Dicari di Google", 
    desc: "Kami atur agar nama bisnis Anda muncul di halaman atas saat orang mencari produk, sehingga Anda tidak kalah dari pemain besar.", 
    metric: "Prioritas Pencarian" 
  },
  { 
    title: "Interaksi Tanpa Menunggu", 
    desc: "Tampilan yang sangat ringan dan tombol yang responsif. Pelanggan Anda tidak akan kabur karena bosan menunggu loading.", 
    metric: "Buka Web < 1.2 Detik" 
  }
];

onMounted(() => {
  const options = {
    threshold: 0.4, 
    rootMargin: "-10% 0px -10% 0px"
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const index = pointRefs.value.findIndex(el => el === entry.target);
      if (entry.isIntersecting) {
        if (!visiblePoints.value.includes(index)) {
          visiblePoints.value.push(index);
        }
      } else {
        // Logika Reset: Menghapus index agar animasi bisa dimainkan ulang
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
.sticky {
  position: -webkit-sticky;
  position: sticky;
}

/* Custom Scrollbar untuk mendukung kesan Industrial-Tech */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #10b981;
  border-radius: 10px;
}
</style>