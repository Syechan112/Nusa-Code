<template>
  <section ref="valuesSection" class="relative py-32 bg-white overflow-hidden border-t border-slate-100">
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         :style="{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="max-w-3xl mb-20">
        <div class="inline-flex items-center gap-3 mb-6">
          <span class="px-2 py-1 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">Core Values</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-slate-900 leading-none tracking-tighter mb-6">
          PRINSIP YANG <br/> <span class="text-emerald-600">MENJAGA KUALITAS KODE KAMI.</span>
        </h2>
        <p class="text-slate-500 text-lg font-medium leading-relaxed">
          Kami tidak bekerja dengan janji manis. Kami bekerja dengan standar teknis yang tidak bisa ditawar.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(value, index) in coreValues" 
          :key="index"
          ref="valueCards"
          class="group relative bg-white border border-slate-200 p-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
          :class="[
            visibleCards.includes(index) 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-12 scale-95'
          ]"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="absolute top-0 left-0 w-full h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          
          <div class="flex flex-col h-full">
            <div class="flex items-center justify-between mb-12">
              <span class="text-4xl font-black text-slate-100 group-hover:text-emerald-500/20 transition-colors tracking-tighter">0{{ index + 1 }}</span>
              <div class="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </div>
            </div>

            <h3 class="text-2xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">{{ value.title }}</h3>
            <p class="text-slate-500 group-hover:text-slate-600 leading-relaxed mb-8">
              {{ value.desc }}
            </p>

            <div class="mt-auto pt-6 border-t border-dashed border-slate-200">
              <span class="text-[10px] font-black text-emerald-600 uppercase tracking-widest block mb-2">Penerapan Praktis:</span>
              <p class="text-sm font-bold text-slate-900 leading-snug">
                {{ value.example }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const valueCards = ref([]);
const visibleCards = ref([]);
let observer = null;

const coreValues = [
  {
    title: "Keterbukaan Jujur",
    desc: "Kami tidak menggunakan istilah teknis yang membingungkan untuk menutupi masalah. Anda akan selalu tahu kondisi asli proyek Anda.",
    example: "Laporan kemajuan setiap hari lewat WhatsApp/Dashboard, tanpa perlu ditagih."
  },
  {
    title: "Tanggung Jawab Penuh",
    desc: "Setiap eror atau kendala adalah tanggung jawab kami. Kami tidak akan menyalahkan server atau pihak lain secara sepihak.",
    example: "Jika ada fitur yang macet, kami perbaiki segera tanpa biaya tambahan."
  },
  {
    title: "Fitur Tepat Sasaran",
    desc: "Kami membangun apa yang benar-benar mendatangkan pembeli untuk Anda, bukan fitur mahal yang tidak terpakai.",
    example: "Fokus pada kecepatan web agar pelanggan tidak kabur karena loading lama."
  },
  {
    title: "Sistem Tahan Lama",
    desc: "Website Anda dirancang agar tidak cepat jadul. Tetap kencang meski barang dagangan dan pembeli Anda bertambah banyak.",
    example: "Penyusunan data yang rapi agar web tetap ringan dibuka di HP jadul sekalipun."
  },
  {
    title: "Keputusan Berbasis Data",
    desc: "Kami tidak asal tebak dalam mendesain. Semua perubahan didasarkan pada kebiasaan pelanggan Anda saat berbelanja.",
    example: "Warna tombol beli dipilih karena terbukti paling sering diklik oleh pembeli."
  },
  {
    title: "Mitra Tumbuh Bersama",
    desc: "Kami bukan hanya pembuat web sekali jalan. Kami adalah tim IT Anda yang siap membantu bisnis Anda naik kelas.",
    example: "Bimbingan rutin dan tips jualan digital meski website sudah selesai dikerjakan."
  }
];

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const index = valueCards.value.findIndex(el => el === entry.target);
      if (entry.isIntersecting) {
        if (!visibleCards.value.includes(index)) visibleCards.value.push(index);
      } else {
        // Reset animasi saat keluar view
        visibleCards.value = visibleCards.value.filter(i => i !== index);
      }
    });
  }, { threshold: 0.15 });

  valueCards.value.forEach(el => { if (el) observer.observe(el); });
});

onUnmounted(() => observer?.disconnect());
</script>

<style scoped>
.group:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -15px rgba(0,0,0,0.05);
}
</style>