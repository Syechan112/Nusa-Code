<template>
  <section ref="workSection" class="relative py-32 bg-white overflow-hidden">
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         :style="{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="max-w-2xl mb-24">
        <h2 class="text-[12px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-4 flex items-center gap-4">
          <span class="w-12 h-[1px] bg-emerald-600"></span> Workflow
        </h2>
        <h3 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">
          SISTEM KERJA <br/> <span class="text-slate-400">TANPA SPEKULASI.</span>
        </h3>
        <p class="text-slate-500 text-lg font-medium">
          Kami membedah kebutuhan Anda secara arsitektural sebelum menulis satu baris kode pun. Keamanan investasi Anda adalah prioritas.
        </p>
      </div>

      <div class="relative">
        <div class="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 hidden md:block"></div>
        
        <div 
          class="absolute left-4 lg:left-1/2 top-0 w-[2px] bg-emerald-500 -translate-x-1/2 transition-all duration-1000 ease-out hidden md:block"
          :style="{ height: `${scrollProgress}%` }"
        ></div>

        <div class="space-y-24 md:space-y-40">
          <div 
            v-for="(step, index) in workflows" 
            :key="index"
            :ref="el => { if (el) stepRefs[index] = el }"
            class="relative flex flex-col md:flex-row items-center gap-8 lg:gap-0"
            :class="[index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse']"
          >
            <div class="w-full md:w-[45%]">
              <div 
                class="p-8 border border-slate-200 bg-white transition-all duration-700 transform"
                :class="[
                  activeSteps.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
                ]"
              >
                <div class="flex items-center gap-4 mb-4">
                  <span class="text-xs font-mono font-bold text-emerald-600 px-2 py-1 bg-emerald-50 rounded italic">
                    Phase 0{{ index + 1 }}
                  </span>
                </div>
                <h4 class="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tight">{{ step.title }}</h4>
                <p class="text-slate-500 leading-relaxed mb-6">{{ step.desc }}</p>
                
                <ul class="space-y-2">
                  <li v-for="(check, i) in step.checks" :key="i" class="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                    {{ check }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="absolute left-4 lg:left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-slate-100 rounded-full z-20 transition-colors duration-500 hidden md:flex items-center justify-center"
                 :class="{'border-emerald-500': activeSteps.includes(index)}">
              <div class="w-2 h-2 bg-slate-300 rounded-full" :class="{'bg-emerald-500 animate-ping': activeSteps.includes(index)}"></div>
            </div>

            <div class="hidden md:block md:w-[45%]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const stepRefs = ref([]);
const activeSteps = ref([]);
const scrollProgress = ref(0);
let observer = null;

const workflows = [
  {
    title: "Curhat Bisnis & Cek Masalah",
    desc: "Kami tidak langsung menawarkan jasa. Kami dengarkan dulu kendala jualan Anda, siapa lawan bisnis Anda, dan apa yang ingin Anda capai.",
    checks: ["Analisis Masalah Jualan", "Intip Strategi Kompetitor", "Rangkuman Solusi Digital"]
  },
  {
    title: "Rancang Tampilan & Alur Penjualan",
    desc: "Membuat coretan rencana (blueprint) agar pelanggan Anda nyaman saat berkunjung dan mudah saat ingin membeli produk Anda.",
    checks: ["Sketsa Tampilan Mudah", "Simulasi Klik Pelanggan", "Penataan Menu Produk"]
  },
  {
    title: "Pengerjaan Sistem Jualan Digital",
    desc: "Membangun rumah digital Anda dengan pondasi kuat, cepat dibuka di HP, dan mudah ditemukan di pencarian Google.",
    checks: ["Pembuatan Web Cepat", "Optimasi Google (SEO)", "Tampilan Ramah Handphone"]
  },
  {
    title: "Uji Coba & Pastikan Lancar",
    desc: "Sebelum diluncurkan, kami tes semua tombol dan fungsi. Kami pastikan tidak ada kendala saat pelanggan bertransaksi.",
    checks: ["Cek Semua Tombol", "Tes Kecepatan Buka", "Keamanan Data Pembeli"]
  },
  {
    title: "Serah Terima & Bantuan Pantau",
    desc: "Website resmi mengudara. Kami berikan panduan cara pakai dan laporan bulanan agar bisnis Anda terus berkembang.",
    checks: ["Panduan Admin UMKM", "Laporan Pengunjung", "Bantuan Teknis Rutin"]
  }
];

onMounted(() => {
  // Observer untuk animasi card
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const index = stepRefs.value.findIndex(el => el === entry.target);
      if (entry.isIntersecting) {
        if (!activeSteps.value.includes(index)) activeSteps.value.push(index);
      } else {
        activeSteps.value = activeSteps.value.filter(i => i !== index);
      }
    });
  }, { threshold: 0.3 });

  stepRefs.value.forEach(el => { if (el) observer.observe(el); });

  // Scroll Progress Logic
  const handleScroll = () => {
    const section = stepRefs.value[0]?.closest('section');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const sectionHeight = rect.height;
    const progress = Math.max(0, Math.min(100, ((window.innerHeight - rect.top) / sectionHeight) * 100));
    scrollProgress.value = progress;
  };

  window.addEventListener('scroll', handleScroll);
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    observer?.disconnect();
  });
});
</script>